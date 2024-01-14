using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Serialization;
using Denarius.Model;

namespace Denarius.DTO;

[APIDataContract("TransactionCreate")]
public class TransactionCreateDTO
{
    /// <summary>
    /// The date the transaction was made
    /// </summary>
    /// <example>2021-01-01</example>
    [Required]
    public DateTime Date { get; set; }

    /// <summary>
    /// The target of the transaction
    /// </summary>
    /// <example>Amazon</example>
    [Required]
    public string Payee { get; set; } = String.Empty;
    
    /// <summary>
    /// The category of the transaction
    /// </summary>
    /// <example>Food</example>
    [Required]
    public string CategoryId { get; set; } = String.Empty;
    
    /// <summary>
    /// The description of the transaction
    /// </summary>
    /// <example>Bought some food</example>
    public string Description { get; set; } = string.Empty;
    
    /// <summary>
    /// The amount of the transaction
    /// </summary>
    /// <example>-13125</example>
    [Required]
    public float Amount { get; set; }
    
    /// <summary>
    /// The user that made the transaction
    /// </summary>
    /// <example>Peter</example>
    [Required]
    public string UserId { get; set; } = String.Empty;
    
    /// <summary>
    /// Is the transaction shared with other users
    /// </summary>
    /// <example>true</example>
    [Required]
    public bool IsCommon { get; set; } 
    
    /// <summary>
    /// The type of the card used for the transaction
    /// </summary>
    /// <example>Visa</example>
    [Required]
    public string CardType { get; set; } = String.Empty;
}


[APIDataContract("Transaction")]
public class TransactionDTO : TransactionCreateDTO
{
    [Key]
    public string Id { get; set; }
    
    public DateTime CreationDate { get; set; }
}

public class TransactionProfile : AutoMapper.Profile
{
    public TransactionProfile()
    {
        CreateMap<Transaction, TransactionDTO>();
        CreateMap<TransactionDTO, Transaction>();
        
        CreateMap<TransactionCreateDTO, Transaction>();
    }
}