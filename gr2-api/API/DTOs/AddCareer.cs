namespace API.Entities;

public class AddCareer
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? LinkedProfileUrl { get; set; }
    public string? CoverLetter { get; set; }
    public IFormFile? Resume { get; set; }
    public string? RoleAppliedFor { get; set; }
}