namespace API.Entities;

public class ModularFormEnquiry
{
    public int Id { get; set; }
    public string? ClientName { get; set; }
    public string? Location { get; set; }
    public string? CustomerName { get; set; }
    public string? CustomerEmail { get; set; }
    public string? CustomerPhone { get; set; }
    public string? Source { get; set; }
    public string? Comments { get; set; }
    public string? FileUrl { get; set; }
    public int IsDeleted { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}