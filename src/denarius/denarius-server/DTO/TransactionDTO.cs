using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Denarius.Model;

namespace Denarius.DTO;

[APIDataContract("Transaction")]
public class TransactionDTO
{
    [Key]
    public long Id { get; set; }
    
    [Required]
    public float Amount { get; set; }
    
    [Required]
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public DateTime Date { get; set; }
}

public class TransactionProfile : AutoMapper.Profile
{
    public TransactionProfile()
    {
        CreateMap<Transaction, TransactionDTO>();
    }
}