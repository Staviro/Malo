namespace Malo.Web.Configuration.Bundles
{
    public static class AppBundle
    {
        private static readonly long _Version = DateTime.Now.Ticks;

        public static string GetBundle(string name, string extension) 
        {
            return $"/web-bundles/{name}.{extension}?v={_Version}";
        }

        public static string[] JavaScriptFiles()
        {
            return new string[]
                {
                    "/lib/latest/malo.js",
                    "/js/main.js"
                };
        }

        public static string[] CssFiles()
        {
            return new string[]
                {
                    "/lib/latest/malo.css",
                    "/css/main.css"
                };
        }
    }
}
