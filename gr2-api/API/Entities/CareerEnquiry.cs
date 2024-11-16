namespace API.Entities;

public class CareerEnquiry
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? LinkedProfileUrl { get; set; }
    public string? CoverLetter { get; set; }
    public string? ResumeUrl { get; set; }
    public string? RoleAppliedFor { get; set; }
    public int IsDeleted { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}