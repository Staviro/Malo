using Microsoft.AspNetCore.Mvc;

namespace Malo.Web.Controllers
{
    public class HistoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
