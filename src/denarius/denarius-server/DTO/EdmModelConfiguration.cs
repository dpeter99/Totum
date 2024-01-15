using ApiVersioning.Examples.Configuration;
using Asp.Versioning;
using Asp.Versioning.OData;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace Denarius.DTO;

public class EdmModelConfiguration : IModelConfiguration
{
    public static void ConfigureV1( ODataModelBuilder builder )
    {
        var transaction = builder.EntitySet<TransactionDTO>( "Transaction" ).EntityType;
        transaction.HasKey(t=>t.Id);
        
        var category = builder.EntitySet<CategoryDTO>( "Category" ).EntityType;
        category.HasKey(c=>c.Id);
    }

    public void Apply( ODataModelBuilder builder, ApiVersion apiVersion, string routePrefix )
    {
        if(apiVersion == ApiVersions.V1)
        {
            ConfigureV1( builder );
        }
    }
}