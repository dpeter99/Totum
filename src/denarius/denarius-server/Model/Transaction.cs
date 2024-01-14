using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Denarius.DTO;
using Microsoft.EntityFrameworkCore;

namespace Denarius.Model;


public class Transaction
{
    //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public string Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public string Payee { get; set; }
    
    public Category Category { get; set; } = null!;
    public string CategoryId { get; set; } = null!;
    
    public string Description { get; set; } = string.Empty;
    
    public float Amount { get; set; }
    
    public string UserId { get; set; }
    
    public bool IsCommon { get; set; }
    
    public string CardType { get; set; }
    public DateTime CreationDate { get; set; }
}