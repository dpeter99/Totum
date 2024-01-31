using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Denarius.Model;

namespace Denarius.DTO;

[APIDataContract("TransactionCreate")]
public class TransactionCreateDTO
{
    [Required]
    public DateTime Date { get; set; }
    
    [Required]
    public string Payee { get; set; }
    
    [Required]
    public long CategoryId { get; set; }
    
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public float Amount { get; set; }
    
    [Required]
    public string UserId { get; set; }
    
    [Required]
    public bool IsCommon { get; set; }
    
    [Required]
    public string CardType { get; set; }
}

[APIDataContract("Transaction")]
public class TransactionDTO : TransactionCreateDTO
{
    [Key]
    public long Id { get; set; }
    
    public DateTime CreationDate { get; set; }
}

public class TransactionProfile : AutoMapper.Profile
{
    public TransactionProfile()
    {
        CreateMap<Transaction, TransactionDTO>();
        CreateMap<TransactionDTO, Transaction>();
        
        CreateMap<TransactionCreateDTO, Transaction>();
        
        CreateMap<DateTime, DateTime>().ConvertUsing((s) => DateTime.SpecifyKind(s, DateTimeKind.Utc));
    }
}