using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class ModularController : ControllerBase
{
    private readonly DataContext _context;
    private readonly IWebHostEnvironment _env;
    public ModularController(DataContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    [HttpPost]
    public async Task<IActionResult> AddModularEnquiry(AddModular modularEnquiry)
    {
        ModularFormEnquiry newModular = new ModularFormEnquiry();
        newModular.ClientName = modularEnquiry.ClientName;
        newModular.Location = modularEnquiry.Location;
        newModular.CustomerName = modularEnquiry.CustomerName;
        newModular.CustomerEmail = modularEnquiry.CustomerEmail;
        newModular.CustomerPhone = modularEnquiry.CustomerPhone;
        newModular.Source = modularEnquiry.Source;
        newModular.Comments = modularEnquiry.Comments;
        newModular.IsDeleted = 0;
        newModular.CreatedAt = DateTime.UtcNow;
        string uploadsFolder = Path.Combine(_env.WebRootPath, "Uploads");
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }
        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(modularEnquiry?.File?.FileName);
        string filePath = Path.Combine(uploadsFolder, fileName);
        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
            await modularEnquiry?.File?.CopyToAsync(fileStream);
        }
        newModular.FileUrl = $"{Request.Scheme}://{Request.Host}/Uploads/{fileName}";

        _context.ModularEnquiries.Add(newModular);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetModularEnquiriesList()
    {
        var modularList = await _context.ModularEnquiries.ToListAsync();
        return Ok(modularList);
    }

    [HttpDelete]
    public async Task<IActionResult> GetModularEnquiryById(int id)
    {
        var modular = await _context.ModularEnquiries.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);
        return Ok(modular);
    }
}
