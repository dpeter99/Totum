using System.ComponentModel.DataAnnotations.Schema;

namespace Denarius.Model;

public class Category
{
    public string Id { get; set; }
    
    public string Name { get; set; } = string.Empty;
    
    public string Color { get; set; } = string.Empty;
    
    public string Icon { get; set; } = string.Empty;
    
    public Category? Parent { get; set; }
}