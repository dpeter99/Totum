namespace Denarius.DTO;

public class APIDataContractAttribute(string Name) : Attribute
{
    public string? Name { get; set; } = Name;
}