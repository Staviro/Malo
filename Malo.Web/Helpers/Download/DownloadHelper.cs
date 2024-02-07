namespace Malo.Web.Helpers.Download
{
    public class DownloadHelper
    {
        public static string FilePath =  "/lib/stable/";
        public static string FullAppFilePath = AppContext.BaseDirectory + "wwwroot\\lib\\stable\\";
        public static string FileExtension = ".zip";
        public static string FileName = "malo.";
        public static bool FileExists(string version) => File.Exists(FullAppFilePathMethod(version));
        public static string FullAppFilePathMethod(string version) => $"{FullAppFilePath}{FileName}{version}{FileExtension}";
        public static string FullFilePath(string version) => $"{FilePath}{FileName}{version}{FileExtension}";

    }
}
