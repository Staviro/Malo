using Malo.Web.Configuration;
namespace Malo.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args).ConfiguredServices();
            var app = builder.Build().Application();
            app.Run();
        }
    }
}
