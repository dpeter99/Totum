using Denarius.Model;
using Microsoft.EntityFrameworkCore;

namespace Denarius;

public class BankingContext : DbContext
{
    
    
    public BankingContext(DbContextOptions<BankingContext> options)
        : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var categories = new List<Category>()
        {
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Food", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Food Delivery", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Rent", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
            new() { Id = NewId(), Name = "Groceries", Color = "#FF0000", Icon = "fas fa-shopping-cart" },
        };
        modelBuilder.Entity<Category>().HasData(categories);
        
        
        List<Transaction> transactions = new()
        {
            new Transaction()
            {
                Id = NewId(),
                Amount = +100, Date = DateTime.Today, Description = "Test", Payee = "asd", CardType = "Debit",
                UserId = "Peter",
                CategoryId = categories[0].Id
            },
            new Transaction()
            {
                Id = NewId(),
                Amount = +100, Date = DateTime.Today, Description = "Test", Payee = "asd", CardType = "Debit",
                UserId = "Peter",
                CategoryId = categories[0].Id
            }
        };
        modelBuilder.Entity<Transaction>().HasData(transactions);
    }

    private static string NewId()
    {
        return Guid.NewGuid().ToString();
    }

    public DbSet<Transaction> Transactions { get; set; } = null!;
    
    public DbSet<Category> Categories { get; set; } = null!;
}