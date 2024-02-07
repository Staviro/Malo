namespace Malo.Web.Helpers.Download
{
    public class DownloadHelper
    {
        public static string FilePath = AppContext.BaseDirectory + "/wwwroot/lib/stable/";
        public static string FileExtension = ".zip";
        public static string FileName = "malo.";
        public static bool FileExists(string version) => File.Exists(FullFilePath(version));
        public static string FullFilePath(string version) => $"{FilePath}{FileName}{version}{FileExtension}";
    }
}
