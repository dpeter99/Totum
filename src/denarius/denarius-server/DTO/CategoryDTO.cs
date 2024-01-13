using Denarius.Model;

namespace Denarius.DTO;

[APIDataContract("Category")]
public class CategoryDTO
{
    public long Id { get; set; }
    
    public string Name { get; set; } = string.Empty;
    
    public string Color { get; set; } = string.Empty;
    
    public string Icon { get; set; } = string.Empty;
    
    public long? Parent { get; set; }
}

public class CategoryProfile : AutoMapper.Profile
{
    public CategoryProfile()
    {
        CreateMap<Category, CategoryDTO>();
        CreateMap<CategoryDTO, Category>();
    }
}