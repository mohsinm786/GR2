using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<ContactEnquiry> ContactEnquiries { get; set; }
    public DbSet<ModularFormEnquiry> ModularEnquiries { get; set; }
    public DbSet<CareerEnquiry> CareerEnquiries { get; set; }
    public DbSet<User> Users { get; set; }

}