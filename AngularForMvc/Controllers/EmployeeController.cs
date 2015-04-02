using AngularForMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace AngularForMVC.Controllers {
    public class EmployeeController : Controller {

        public ActionResult GetEmployees() {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM() {
                    FullName = "Milton Waddams"
                },
                new EmployeeVM() {
                    FullName = "Andy Bernard"
                }
            };

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(EmployeeVM item) {
            if (ModelState.IsValid)
                return new HttpStatusCodeResult(201, "Пользователь добавлен");

            List<string> errors = new List<string>();
            errors.Add("Ошибка добавления нового сотрудника");
            if (!ModelState.IsValidField("Notes"))
                errors.Add("Внесите чего-нибудь про него...");

            Response.StatusCode = 500;

            Response.TrySkipIisCustomErrors = true;

            return new ContentResult {
                Content = "ERROR: " + string.Join("  ", errors),
                ContentEncoding = System.Text.Encoding.UTF8
            };
        }
    }
}