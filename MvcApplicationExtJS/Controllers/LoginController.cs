using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplicationExtJS.Models;
using System.Data;

namespace MvcApplicationExtJS.Controllers
{
    public class LoginController : Controller
    {
        private UserRegContext db = new UserRegContext();

        static string message = string.Empty;   //define string type static variable 
        static bool success = false;   //define bool type static variable
        //
        // GET: /Login/

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /Login/Details/5 

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Login/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Login/Create

        [HttpPost]
        public JsonResult LoginUser(FormCollection collection)
        {
            try
            {
                success = false;
                message = "Invalid User.";
                string userId = collection["UserID"];
                string password = collection["password"];
                UserRegModel userregmodel = db.UserRegistration.Single(p => p.UserID == userId && p.Password == password);
                if (userregmodel!=null)
                {
                    success = true;
                    message = "Loggedin Successfully.";
                }
                
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                success = false;
                message = ex.Message;
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
        }

        //
        // GET: /Login/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Login/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Login/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Login/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
