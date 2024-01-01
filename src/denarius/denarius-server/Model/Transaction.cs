using System.ComponentModel.DataAnnotations.Schema;
using Denarius.DTO;

namespace Denarius.Model;


public class Transaction
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public float Amount { get; set; }
    
    public string Description { get; set; } = string.Empty;
    
    public DateTime Date { get; set; }
    
    public Category Category { get; set; } = null!;
}