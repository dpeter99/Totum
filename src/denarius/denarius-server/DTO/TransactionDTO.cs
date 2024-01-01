using System.ComponentModel.DataAnnotations;
using Denarius.Model;

namespace Denarius.DTO;

public class TransactionDTO
{
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