using Asp.Versioning;
using Asp.Versioning.OData;
using AutoMapper;
using AutoMapper.AspNet.OData;
using AutoMapper.QueryableExtensions;
using Denarius.DTO;
using Denarius.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Controllers;

using static Microsoft.AspNetCore.Http.StatusCodes;
using static Microsoft.AspNetCore.OData.Query.AllowedQueryOptions;

namespace Denarius.Controllers.v1;

[ApiVersion( 1.0 )]
[ControllerName( "Transactions" )]
[Route( "api/v{version:apiVersion}/Transaction" )]
public class TransactionController(BankingContext context, IMapper mapper) : ODataController
{
    /// <summary>
    /// Returns all the transactions
    /// </summary>
    /// <returns></returns>
    ///
    /// <example>
    /// [
    ///     {
    ///         "id": 1,
    ///         "amount": 100.0,
    ///         "description": "Test",
    ///     }
    /// ]
    /// </example>
    [HttpGet("")]
    [EnableQuery]
    public async Task<IQueryable<TransactionDTO>> GetTransactions(ODataQueryOptions<TransactionDTO> options )
    {
        return await context.Transactions.GetQueryAsync(mapper, options);
    }
    
    [HttpGet("{id:long}")]
    public async Task<ActionResult<TransactionDTO>> GetTransaction(long id)
    {
        var transaction = await context.Transactions.FindAsync(id);

        if (transaction == null)
        {
            return NotFound();
        }

        return  mapper.Map<TransactionDTO>(transaction);
    }
    
    [HttpPost]
    public async Task<ActionResult<TransactionDTO>> PostTransaction(TransactionCreateDTO data)
    {
        var transaction = mapper.Map<Transaction>(data);
            
        transaction.CreationDate = DateTime.Now;
            
        context.Transactions.Add(transaction);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTransaction), new { id = transaction.Id }, transaction);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTransaction(string id)
    {
        var transaction = await context.Transactions.FindAsync(id);
        if (transaction == null)
        {
            return NotFound();
        }

        context.Transactions.Remove(transaction);
        await context.SaveChangesAsync();

        return NoContent();
    }

}

