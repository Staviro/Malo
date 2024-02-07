using Malo.Web.Helpers.Bundles;
using WebOptimizer;

namespace Malo.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews()
                .AddRazorRuntimeCompilation();

            //Bundling
            builder.Services.AddWebOptimizer((config) =>
            {
                config.AddCssBundle(AppBundles.GetCSSBundleName(), AppBundles.GetCSSBundleFiles());
                config.AddJavaScriptBundle(AppBundles.GetJSBundleName(), AppBundles.GetJSBundleFiles());
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseWebOptimizer();
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
