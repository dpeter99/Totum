namespace Denarius;

public class DatabaseOptions
{
    public string ConnectionString { get; set; } = String.Empty;
    public static string SectionName { get; set; } = "Database";
}