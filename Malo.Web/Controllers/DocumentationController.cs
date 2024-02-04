using Microsoft.AspNetCore.Mvc;

namespace Malo.Web.Controllers
{
    public class DocumentationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
