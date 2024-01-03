using System.Reflection;
using System.Runtime.Serialization;
using System.Text.Json;
using Alba.CsConsoleFormat;
using Denarius;
using Denarius.DTO;
using Asp.Versioning;
using Asp.Versioning.ApiExplorer;
using Asp.Versioning.Conventions;
using AspNetCore.RouteAnalyzer;
using Denarius.Configuration;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.OData.Edm;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
    })
    .AddOData(options => 
        options
            .Count().Filter().Expand().Select().OrderBy().SetMaxTop(5)
            .AddRouteComponents("api/v1", EdmModelBuilder.GetEdmModel())
        );

builder.Services.AddProblemDetails();

builder.Services.AddSwaggerGen();

builder.Services.AddApiVersioning(opt =>
    {
        opt.ReportApiVersions = true;
    })
    .AddMvc()
    .AddApiExplorer(
        setup =>
        {
            setup.GroupNameFormat = "'v'VVV";
            setup.SubstituteApiVersionInUrl = true;
        })
    .AddOData(options => options.AddRouteComponents( "api/v{version:apiVersion}" ))
    .AddODataApiExplorer(
        setup =>
        {
            setup.GroupNameFormat = "'v'VVV";
            setup.SubstituteApiVersionInUrl = true;
        });

builder.Services.AddDbContext<BankingContext>(opt =>
    opt.UseInMemoryDatabase("BakingDb"));

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.ConfigureOptions<ConfigureSwaggerOptions>();



var app = builder.Build();

app.UseHttpsRedirection();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    var apiVersionDescriptionProvider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();

    app.UseSwagger(c =>
    {
        c.RouteTemplate = "api/{documentName}/swagger.json";
    });
    app.UseSwaggerUI(options =>
    {
        foreach (var description in apiVersionDescriptionProvider.ApiVersionDescriptions)
        {
            options.SwaggerEndpoint($"/api/{description.GroupName}/swagger.json",
                description.GroupName.ToUpperInvariant());
        }
        //options.RoutePrefix = "swagger";
    });
    
    app.UseODataRouteDebug();

    ListRoutes(app);
}

app.MapControllers();

app.Run();



void ListRoutes(WebApplication webApplication)
{
    var routeInfo = webApplication.Services.GetRequiredService<IActionDescriptorCollectionProvider>();
    
    var doc = new Document(
        new Grid {
            Columns = { GridLength.Auto, GridLength.Auto, GridLength.Star(1) },
            Children = {
                new Cell("Id"),
                new Cell("Name"),
                new Cell("Url"),
                routeInfo.ActionDescriptors.Items.Select(item => new[] {
                    new Cell(item.Id),
                    new Cell(item.DisplayName),
                    new Cell(item.AttributeRouteInfo?.Template ?? "null"),
                })
            }
        }
    );

    var sw = new StringWriter();
    ConsoleRenderer.RenderDocumentToText(doc, new TextRenderTarget(sw));
    string str = sw.GetStringBuilder().ToString();
    Console.WriteLine(str);
    
}