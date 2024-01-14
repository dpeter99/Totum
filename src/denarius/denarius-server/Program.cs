using ApiVersioning.Examples;
using Denarius.DTO;
using Asp.Versioning.Conventions;
using Denarius;
using Denarius.Configuration;
using Denarius.Controllers.v1;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.

builder.Services
    .AddControllers()
    .AddOData( options =>
    {
        options.Filter().Select().Count();
        options.RouteOptions.EnableKeyInParenthesis = false;
        options.RouteOptions.EnableNonParenthesisForEmptyParameterFunction = true;
        options.RouteOptions.EnablePropertyNameCaseInsensitive = true;
        options.RouteOptions.EnableQualifiedOperationCall = false;
        options.RouteOptions.EnableUnqualifiedOperationCall = true;
    });

builder.Services.AddProblemDetails();
builder.Services
    .AddApiVersioning(options =>
    {
        options.ReportApiVersions = true;
    })
    .AddOData( options =>
    {
        options.AddRouteComponents( "api/v{version:apiVersion}" );
    })
    .AddODataApiExplorer(options =>
    {
        options.GroupNameFormat = "'v'VVV";
        options.SubstituteApiVersionInUrl = true;
    });

builder.Services.AddTransient<IConfigureOptions<SwaggerGenOptions>, ConfigureSwaggerOptions>();
builder.Services.AddSwaggerGen(
    options =>
    {
        // add a custom operation filter which sets default values
        options.OperationFilter<SwaggerDefaultValues>();

        var fileName = typeof( Program ).Assembly.GetName().Name + ".xml";
        var filePath = Path.Combine( AppContext.BaseDirectory, fileName );

        // integrate xml comments
        options.IncludeXmlComments( filePath );
    } );

builder.Services.AddDbContext<BankingContext>(opt => opt.UseInMemoryDatabase("BakingDb"));

builder.Services.AddAutoMapper(configAction: (provider, expression) =>
{
    expression.AddProfile<TransactionProfile>();
    expression.AddProfile<CategoryProfile>();
},typeof(Program));


var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.UseODataRouteDebug();
app.UseSwagger(c =>
{
    c.RouteTemplate = "api/{documentName}/swagger.json";
});
app.UseSwaggerUI(options =>
{
    var descriptions = app.DescribeApiVersions();

    // build a swagger endpoint for each discovered API version
    foreach ( var description in descriptions )
    {
        var url = $"/api/{description.GroupName}/swagger.json";
        var name = description.GroupName.ToUpperInvariant();
        options.SwaggerEndpoint( url, name );
    }
});

app.ListRoutes();

app.Run();