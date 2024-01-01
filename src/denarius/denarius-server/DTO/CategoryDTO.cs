using Denarius.Model;

namespace Denarius.DTO;

public class CategoryDTO
{
    public long Id { get; set; }
    
    public string Name { get; set; } = string.Empty;
    
    public string Color { get; set; } = string.Empty;
    
    public string Icon { get; set; } = string.Empty;
    
    public Category? Parent { get; set; }
}

public class CategoryProfile : AutoMapper.Profile
{
    public CategoryProfile()
    {
        CreateMap<Category, CategoryDTO>();
    }
}