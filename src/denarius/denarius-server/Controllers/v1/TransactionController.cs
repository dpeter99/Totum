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
using Swashbuckle.AspNetCore.Filters;
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
    [Produces( "application/json" )]
    [EnableQuery]
    public async Task<IQueryable<TransactionDTO>> GetTransactions(ODataQueryOptions<TransactionDTO> options )
    {
        return await context.Transactions.GetQueryAsync(mapper, options);
    }
    
    /// <summary>
    /// Get a specific transaction by it's id
    /// </summary>
    /// <param name="id">The id of the transaction</param>
    /// <returns>The requested transaction</returns>
    [HttpGet("{id}")]
    [ActionName("GetTransaction")]
    public async Task<ActionResult<TransactionDTO>> GetTransaction(string id)
    {
        var transaction = await context.Transactions.FindAsync(id);

        if (transaction == null)
        {
            return NotFound();
        }

        return  mapper.Map<TransactionDTO>(transaction);
    }
    
    /// <summary>
    /// Create a new transaction
    /// </summary>
    /// <param name="data">The transaction data</param>
    /// <returns></returns>
    [HttpPost]
    [SwaggerRequestExample(typeof(ODataRawQueryOptions), typeof(TransactionsQueryExample))]
    [Consumes("application/json")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(TransactionDTO), Status201Created)]
    public async Task<ActionResult<TransactionDTO>> PostTransaction([FromBody] TransactionCreateDTO data)
    {
        var transaction = mapper.Map<Transaction>(data);
            
        transaction.CreationDate = DateTime.Now;
        
        context.Transactions.Add(transaction);
        await context.SaveChangesAsync();

        return CreatedAtAction("GetTransaction", new { id = transaction.Id }, transaction);
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

    [HttpGet("test")]
    public IActionResult Test([FromQuery]ODataRawQueryOptions query)
    {
        return Ok();
    }
    
}

public class TransactionsQueryExample : IMultipleExamplesProvider<TransactionCreateDTO>
{
    public IEnumerable<SwaggerExample<TransactionCreateDTO>> GetExamples()
    {
        //yield return SwaggerExample.Create("Get all transactions", new Odata);
        return new []
        {
            SwaggerExample.Create(
                "Add simple transaction", 
                new TransactionCreateDTO
                {
                    Amount = 100,
                    Description = "Test"
                }),
            
            SwaggerExample.Create(
                "Add detailed transaction", 
                new TransactionCreateDTO
                {
                    Date = DateTime.Today,
                    Amount = 100,
                    Description = "Test",
                    CardType = "Visa",
                    CategoryId = "1",
                    IsCommon = true,
                    Payee = "Ikea",
                    UserId = "Peter"
                })
        };
    }
}