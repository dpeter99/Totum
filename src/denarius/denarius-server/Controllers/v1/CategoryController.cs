using AutoMapper;
using AutoMapper.AspNet.OData;
using Denarius.DTO;
using Denarius.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;

namespace Denarius.Controllers.v1;

[Route("api/v{version:apiVersion}/[controller]")]
public class CategoryController(BankingContext context, IMapper mapper) : Controller
{
    [HttpGet]
    [EnableQuery]
    public async Task<IEnumerable<TransactionDTO>> GetCategory(
        ODataQueryOptions<TransactionDTO> options)
    {
        return await context.Categories.GetAsync(mapper, options);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<TransactionDTO>> GetCategory(string id)
    {
        var category = await context.Categories.FindAsync(id);

        if (category == null)
        {
            return NotFound();
        }

        return  mapper.Map<TransactionDTO>(category);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCategory(long id, TransactionDTO data)
    {
        var category = mapper.Map<Category>(data);
        
        if (id != category.Id)
        {
            return BadRequest();
        }

        context.Entry(category).State = EntityState.Modified;

        try
        {
            await context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!CategoryExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    private bool CategoryExists(long id)
    {
        return context.Categories.Any(e => e.Id == id);
    }
}