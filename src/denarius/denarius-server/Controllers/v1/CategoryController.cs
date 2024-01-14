using Asp.Versioning;
using AutoMapper;
using AutoMapper.AspNet.OData;
using Denarius.DTO;
using Denarius.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Denarius.Controllers.v1;

[ApiVersion( 1.0 )]
[ControllerName( "Categories" )]
[Route( "api/v{version:apiVersion}/Category" )]
public class CategoryController(BankingContext context, IMapper mapper) : ODataController
{
    
    [HttpGet("")]
    [EnableQuery]
    public async Task<IQueryable<CategoryDTO>> GetCategories(ODataQueryOptions<CategoryDTO> options)
    {
        return await context.Categories.GetQueryAsync(mapper, options);
    }
    
    [HttpGet("{id:long}")]
    public async Task<ActionResult<TransactionDTO>> GetCategory(long id)
    {
        var transaction = await context.Transactions.FindAsync(id);

        if (transaction == null)
        {
            return NotFound();
        }

        return  mapper.Map<TransactionDTO>(transaction);
    }
    
    [HttpPost]
    public async Task<ActionResult<TransactionDTO>> PostCategory(TransactionCreateDTO data)
    {
        var transaction = mapper.Map<Transaction>(data);
            
        transaction.CreationDate = DateTime.Now;
            
        context.Transactions.Add(transaction);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetCategory), new { id = transaction.Id }, transaction);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCategory(string id)
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
