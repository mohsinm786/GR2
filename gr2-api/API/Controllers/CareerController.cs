using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class CareerController : ControllerBase
{
    private readonly DataContext _context;
    private readonly IWebHostEnvironment _env;
    public CareerController(DataContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    [HttpPost]
    public async Task<IActionResult> AddCareerEnquiry(AddCareer careerEnquiry)
    {
        CareerEnquiry newCareer = new CareerEnquiry();
        newCareer.Name = careerEnquiry.Name;
        newCareer.Email = careerEnquiry.Email;
        newCareer.LinkedProfileUrl = careerEnquiry.LinkedProfileUrl;
        newCareer.CoverLetter = careerEnquiry.CoverLetter;
        newCareer.RoleAppliedFor = careerEnquiry.RoleAppliedFor;
        newCareer.IsDeleted = 0;
        newCareer.CreatedAt = DateTime.UtcNow;
        string uploadsFolder = Path.Combine(_env.WebRootPath, "Uploads");
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }
        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(careerEnquiry?.Resume?.FileName);
        string filePath = Path.Combine(uploadsFolder, fileName);
        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
            await careerEnquiry?.Resume?.CopyToAsync(fileStream);
        }
        newCareer.ResumeUrl = $"{Request.Scheme}://{Request.Host}/Uploads/{fileName}";

        _context.CareerEnquiries.Add(newCareer);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetCareerEnquiriesList()
    {
        var careerList = await _context.CareerEnquiries.ToListAsync();
        return Ok(careerList);
    }

    [HttpDelete]
    public async Task<IActionResult> GetCareerEnquiryById(int id)
    {
        var career = await _context.CareerEnquiries.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);
        return Ok(career);
    }
}
