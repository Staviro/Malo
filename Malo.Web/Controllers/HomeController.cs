using Microsoft.AspNetCore.Mvc;

namespace Malo.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
