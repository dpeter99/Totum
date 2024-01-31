using Denarius.Model;
using Microsoft.EntityFrameworkCore;

namespace Denarius;

public class BankingContext : DbContext
{
    public BankingContext(DbContextOptions<BankingContext> options)
        : base(options)
    {
        Database.Migrate();
    }

    public DbSet<Transaction> Transactions { get; set; } = null!;
    
    public DbSet<Category> Categories { get; set; } = null!;
}