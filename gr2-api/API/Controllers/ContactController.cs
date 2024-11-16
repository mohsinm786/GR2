using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class ContactController : ControllerBase
{
    private readonly DataContext _context;
    public ContactController(DataContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddContactEnquiry(AddContact contactEnquiry)
    {
        ContactEnquiry newContact = new ContactEnquiry();
        newContact.Name = contactEnquiry.Name;
        newContact.Email = contactEnquiry.Email;
        newContact.Message = contactEnquiry.Message;
        newContact.IsDeleted = 0;
        newContact.CreatedAt = DateTime.UtcNow;
        _context.ContactEnquiries.Add(newContact);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetContactEnquiriesList()
    {
        var contactList = await _context.ContactEnquiries.ToListAsync();
        return Ok(contactList);
    }

    [HttpDelete]
    public async Task<IActionResult> GetContactEnquiryById(int id)
    {
        var contact = await _context.ContactEnquiries.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);
        return Ok(contact);
    }
}
