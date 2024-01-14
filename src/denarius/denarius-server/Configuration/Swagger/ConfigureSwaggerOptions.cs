using System.Reflection;
using Asp.Versioning.ApiExplorer;
using Denarius.DTO;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Filters;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Denarius.Configuration;

public class ConfigureSwaggerOptions
    : IConfigureNamedOptions<SwaggerGenOptions>
{
    private readonly IApiVersionDescriptionProvider _provider;

    public ConfigureSwaggerOptions(
        IApiVersionDescriptionProvider provider)
    {
        _provider = provider;
    }

    /// <summary>
    /// Configure each API discovered for Swagger Documentation
    /// </summary>
    /// <param name="options"></param>
    public void Configure(SwaggerGenOptions options)
    {
        //options.ExampleFilters();
        
        // add swagger document for every API version discovered
        foreach (var description in _provider.ApiVersionDescriptions)
        {
            options.SwaggerDoc(
                description.GroupName,
                CreateVersionInfo(description));
            
            options.CustomSchemaIds((type =>
            {
                var objAttribute = type.GetCustomAttribute<APIDataContractAttribute>();
                if (objAttribute != default && objAttribute?.Name?.Length > 0)
                {
                    return objAttribute.Name;
                }
                return type.Name;
            }));
            
            /*
            options.SchemaFilter<CustomNameSchema>();
            */
        }
    }

    /// <summary>
    /// Configure Swagger Options. Inherited from the Interface
    /// </summary>
    /// <param name="name"></param>
    /// <param name="options"></param>
    public void Configure(string name, SwaggerGenOptions options)
    {
        Configure(options);
    }

    /// <summary>
    /// Create information about the version of the API
    /// </summary>
    /// <param name="description"></param>
    /// <returns>Information about the API</returns>
    private OpenApiInfo CreateVersionInfo(
        ApiVersionDescription desc)
    {
        var info = new OpenApiInfo()
        {
            Title = "Denarius API",
            Version = desc.ApiVersion.ToString()
        };

        if (desc.IsDeprecated)
        {
            info.Description += " This API version has been deprecated. Please use one of the new APIs available from the explorer.";
        }
        
        return info;
    }
}

public class CustomNameSchema : ISchemaFilter
{
    public void Apply(OpenApiSchema schema, SchemaFilterContext context)
    {
        if (schema?.Properties == null)
        {
            return;
        }

        var objAttribute = context.Type.GetCustomAttribute<APIDataContractAttribute>();
        if( objAttribute!= default && objAttribute?.Name?.Length > 0)
        {
            schema.Title = objAttribute.Name;
            //schema.Type = objAttribute.Name;
        }
    }
}