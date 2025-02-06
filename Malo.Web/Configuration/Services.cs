using Malo.Web.Configuration.Bundles;

namespace Malo.Web.Configuration
{
    public static class Services
    {
        public static WebApplicationBuilder ConfiguredServices(this WebApplicationBuilder builder)
        {
            // Add services to the container.
            builder.Services.AddControllersWithViews()
                .AddRazorRuntimeCompilation();

            builder.Services.AddWebOptimizer((pipeline) =>
            {
                pipeline.AddCssBundle(AppBundle.GetBundle("styles", "css"), AppBundle.CssFiles());
                pipeline.AddJavaScriptBundle(AppBundle.GetBundle("scripts", "js"), AppBundle.JavaScriptFiles());
            });
            return builder;
        }
    }
}
