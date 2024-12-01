using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    private readonly DataContext _context;
    public LoginController(DataContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Login(string email, string password)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email && x.IsDeleted == 0);
        if (user == null) {
            return NotFound();
        }
        if (user.Password == password) {
            return Ok();
        }
        else {
            return NotFound();
        }
    }
}
