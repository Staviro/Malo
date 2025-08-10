using Microsoft.AspNetCore.Mvc;

namespace Malo.Web.Controllers
{
    public class ExamplesController : Controller
    {
        public IActionResult Registration()
        {
            return View();
        }

        public IActionResult AppSimulator()
        {
            return View();
        }
    }
}
