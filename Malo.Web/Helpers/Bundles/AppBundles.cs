using NUglify.JavaScript.Syntax;

namespace Malo.Web.Helpers.Bundles
{
    public class AppBundles
    {
        public static string MaloVersion = "1.0.1";
        public static long BundleVersion = DateTime.Now.Ticks;
        public static string[] GetCSSBundleFiles() =>  [ "/css/main.css", GetCSSFileForMaloVersion(MaloVersion) ];
        public static string[] GetJSBundleFiles() => [ GetJSFileForMaloVersion(MaloVersion), "/js/shared.ui.js", "/js/sidemenu.ui.js", "/js/app.js","/js/startup.js" ];
        public static string GetCSSFileForMaloVersion(string version) => $"/lib/css/malo.{version}.css";
        public static string GetJSFileForMaloVersion(string version) => $"/lib/js/malo.{version}.js";
        public static string GetCSSBundleName() => $"/css/appBundlev{BundleVersion}";
        public static string GetJSBundleName() => $"/js/appBundlev{BundleVersion}";

    }
}
