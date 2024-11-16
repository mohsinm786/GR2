using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly DataContext _context;
    public UserController(DataContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> AddUser(AddUser user)
    {
        User newUser = new User();
        newUser.FirstName = user.FirstName;
        newUser.LastName = user.LastName;
        newUser.Email = user.Email;
        newUser.Password = user.Password;
        newUser.Username = user.Username;
        newUser.IsDeleted = 0;
        newUser.CreatedAt = DateTime.UtcNow;
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> UpdateUser(AddUser user, int id)
    {
        var oldUser = await _context.Users.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);

        if (oldUser == null)
        {
            return NotFound();
        }

        oldUser.FirstName = user.FirstName;
        oldUser.LastName = user.LastName;
        oldUser.Email = user.Email;
        oldUser.Password = user.Password;
        oldUser.Username = user.Username;
        oldUser.IsDeleted = 0;
        oldUser.CreatedAt = DateTime.UtcNow;
        _context.Users.Update(oldUser);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetUsersList()
    {
        var userList = await _context.Users.ToListAsync();
        return Ok(userList);
    }

    [HttpDelete]
    public async Task<IActionResult> GetUserById(int id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == 0);
        return Ok(user);
    }
}
