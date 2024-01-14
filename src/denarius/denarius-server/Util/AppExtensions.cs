using Alba.CsConsoleFormat;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace Denarius.DTO;

public static class AppExtensions
{
    public static void ListRoutes(this WebApplication app)
    {
        var routeInfo = app.Services.GetRequiredService<IActionDescriptorCollectionProvider>();

        var doc = new Document(
            new Grid
            {
                Columns = { GridLength.Auto, GridLength.Auto, GridLength.Auto },
                Children =
                {
                    //new Cell("Id"),
                    new Cell("Name"),
                    new Cell("Methods"),
                    new Cell("Url"),
                    routeInfo.ActionDescriptors.Items.Select(item => new[]
                    {
                        //new Cell(item.Id),
                        new Cell(item.DisplayName),
                        new Cell(
                            String.Join( ", ",
                            item.ActionConstraints
                            .OfType<HttpMethodActionConstraint>()
                            .First().HttpMethods)),
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
}