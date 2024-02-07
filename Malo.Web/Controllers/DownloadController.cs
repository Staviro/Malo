using Malo.Web.Helpers.Download;
using Malo.Web.Models.Download;
using Microsoft.AspNetCore.Mvc;

namespace Malo.Web.Controllers
{
    public class DownloadController : Controller
    {
        [HttpGet]
        [Route("/Download/{version}")]
        public IActionResult Download(string version)
        {
            DownloadResponseModel model = new DownloadResponseModel();
            try
            {
                if (version is null)
                {
                    model.Url = string.Empty;
                    model.StatusCode = 500;
                    model.Message = "Could not find file";
                }
                else 
                {
                    if (DownloadHelper.FileExists(version))
                    {
                        model.Url = DownloadHelper.FullFilePath(version);
                        model.StatusCode = 200;
                        model.Message = $"Downloading Version {version}";
                    }
                    else
                    {
                        model.Url = string.Empty;
                        model.StatusCode = 500;
                        model.Message = "Could not find file";

                    }
                }
            }
            catch (Exception)
            {
            }
            return Json(model);
        }
    }
}
