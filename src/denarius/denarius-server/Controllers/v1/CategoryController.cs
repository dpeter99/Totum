using Asp.Versioning;
using AutoMapper;
using AutoMapper.AspNet.OData;
using Denarius.DTO;
using Denarius.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;

namespace Denarius.Controllers.v1;

[Route("api/v{version:apiVersion}/[controller]")]
[ApiController]
[ApiVersion("1.0")]
public class CategoryController(BankingContext context, IMapper mapper) : Controller
{
    [HttpGet]
    [EnableQuery]
    public async Task<IEnumerable<CategoryDTO>> GetCategory(
        ODataQueryOptions<CategoryDTO> options)
    {
        return await context.Categories.GetAsync(mapper, options);
    }
    
    [HttpGet("{catId}")]
    public async Task<ActionResult<CategoryDTO>> GetCategory(long catId)
    {
        var category = await context.Categories.FindAsync(catId);

        if (category == null)
        {
            return NotFound();
        }

        return  mapper.Map<CategoryDTO>(category);
    }
    
    [HttpPut("{catId}")]
    public async Task<IActionResult> PutCategory(long catId, CategoryDTO data)
    {
        var category = mapper.Map<Category>(catId);
        
        if (catId != category.Id)
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
            if (!CategoryExists(catId))
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