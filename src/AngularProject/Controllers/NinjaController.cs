using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Serialization;

namespace AngularProject.Controllers
{
    public class NinjaController : Controller
    {
        public IActionResult Chapter7()
        {
            return View();
        }

        [HttpGet]
        public List<Race> Races()
        {
            return new List<Race>()
            {
                new Race("Test A"),
                new Race("Test B")
            };
        }
    }

    [DataContract]
    public class Race
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        public Race(string name)
        {
            this.Name = Name;
        }
    }
}
