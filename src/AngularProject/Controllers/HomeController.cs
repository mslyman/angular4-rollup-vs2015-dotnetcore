using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Serialization;

namespace AngularProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult RxJsTest()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }

        [HttpGet]
        public BaseResponse TestGet1(TestRequest1 request)
        {
            try
            {
                var response = new BaseResponse()
                {
                    Result = $"Ok1. A={request.A}"
                };
                return response;
            }
            catch (Exception ex)
            {
                return new BaseResponse()
                {
                    Result = ex.ToString()
                };
            }
        }


        [HttpPost]
        public IActionResult TestPost1([FromBody]TestRequest1 request)
        {
            try
            {
                var response = new BaseResponse()
                {
                    Result = $"Ok1. A={request.A}"
                };
                return new JsonResult(response);
            }
            catch (Exception ex)
            {
                return new JsonResult(new BaseResponse()
                {
                    Result = ex.ToString()
                });
            }
        }

        [HttpPost]
        public BaseResponse TestPost2([FromBody]TestRequest1 request)
        {
            try
            {
                var response = new BaseResponse()
                {
                    Result = $"Ok2. A={request.A}"
                };
                return response;
            }
            catch (Exception ex)
            {
                return new BaseResponse()
                {
                    Result = ex.ToString()
                };
            }
        }

        [DataContract]
        public class TestRequest1
        {
            [DataMember(Name = "a")]
            public string A { get; set; }
        }


        [DataContract]
        public class BaseResponse
        {
            [DataMember(Name = "result")]
            public string Result { get; set; }
        }
    }

    
}
