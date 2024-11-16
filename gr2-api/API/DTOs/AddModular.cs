namespace API.DTOs;

public class AddModular
{
    public string? ClientName { get; set; }
    public string? Location { get; set; }
    public string? CustomerName { get; set; }
    public string? CustomerEmail { get; set; }
    public string? CustomerPhone { get; set; }
    public string? Source { get; set; }
    public string? Comments { get; set; }
    public IFormFile? File { get; set; }
}