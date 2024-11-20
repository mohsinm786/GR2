using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase
{
    private readonly DataContext _context;
    private readonly IWebHostEnvironment _env;
    public EventController(DataContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    [HttpPost]
    public async Task<IActionResult> AddEvent(AddEvent newEvent)
    {
        CompanyEvent companyEvent = new CompanyEvent();
        companyEvent.Name = newEvent.Name;
        companyEvent.Description = newEvent.Description;
        companyEvent.IsDeleted = 0;
        companyEvent.CreatedAt = DateTime.UtcNow;
        string uploadsFolder = Path.Combine(_env.WebRootPath, "Uploads");
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }
        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(newEvent?.Image?.FileName);
        string filePath = Path.Combine(uploadsFolder, fileName);
        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
            await newEvent?.Image?.CopyToAsync(fileStream);
        }
        companyEvent.ImageUrl = $"{Request.Scheme}://{Request.Host}/Uploads/{fileName}";

        _context.CompanyEvents.Add(companyEvent);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> UpdateEvent(AddEvent newEvent, int id)
    {
        var oldEvent = await _context.CompanyEvents.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);

        if (oldEvent == null)
        {
            return NotFound();
        }

        oldEvent.Name = newEvent.Name;
        oldEvent.Description = newEvent.Description;
        oldEvent.IsDeleted = 0;
        string uploadsFolder = Path.Combine(_env.WebRootPath, "Uploads");
        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }
        string fileName = Guid.NewGuid().ToString() + Path.GetExtension(newEvent?.Image?.FileName);
        string filePath = Path.Combine(uploadsFolder, fileName);
        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
            await newEvent?.Image?.CopyToAsync(fileStream);
        }
        oldEvent.ImageUrl = $"{Request.Scheme}://{Request.Host}/Uploads/{fileName}";

        _context.CompanyEvents.Update(oldEvent);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetEventsList()
    {
        var eventList = await _context.CompanyEvents.ToListAsync();
        return Ok(eventList);
    }

    [HttpDelete]
    public async Task<IActionResult> GetEventById(int id)
    {
        var companyEvent = await _context.CompanyEvents.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);
        return Ok(companyEvent);
    }
}
