using Asp.Versioning;
using AutoMapper;
using AutoMapper.AspNet.OData;
using Denarius.DTO;
using Denarius.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Denarius.Controllers.v1
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class TransactionController(BankingContext context, IMapper mapper) : ODataController
    {
        // GET: api/Transaction
        [HttpGet]
        [EnableQuery]
        public async Task<IEnumerable<TransactionDTO>> GetTransactions(
            ODataQueryOptions<TransactionDTO> options)
        {
            return await context.Transactions.GetAsync(mapper, options);
        }

        // GET: api/Transaction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TransactionDTO>> GetTransaction(string id)
        {
            var transaction = await context.Transactions.FindAsync(id);

            if (transaction == null)
            {
                return NotFound();
            }

            return  mapper.Map<TransactionDTO>(transaction);
        }

        // PUT: api/Transaction/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransaction(long id, TransactionDTO data)
        {
            var transaction = mapper.Map<Transaction>(data);
            
            if (id != transaction.Id)
            {
                return BadRequest();
            }

            context.Entry(transaction).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionExists(id))
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

        // POST: api/Transaction
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TransactionDTO>> PostTransaction(TransactionDTO data)
        {
            var transaction = mapper.Map<Transaction>(data);
            
            context.Transactions.Add(transaction);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTransaction), new { id = transaction.Id }, transaction);
        }

        // DELETE: api/Transaction/5
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

        private bool TransactionExists(long id)
        {
            return context.Transactions.Any(e => e.Id == id);
        }
    }
}
