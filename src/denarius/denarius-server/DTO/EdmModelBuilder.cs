using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace Denarius.DTO;

public static class EdmModelBuilder
{
    
    public static IEdmModel GetEdmModel()
    {
        var builder = new ODataConventionModelBuilder();
        
        builder.EntitySet<TransactionDTO>("Transaction");
        builder.EntitySet<CategoryDTO>("Category");
        
        return builder.GetEdmModel();
    }
    
    
}