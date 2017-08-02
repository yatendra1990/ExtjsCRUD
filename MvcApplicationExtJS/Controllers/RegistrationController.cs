using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplicationExtJS.Models;

namespace MvcApplicationExtJS.Controllers
{
    public class RegistrationController : Controller
    {
        private UserRegContext db = new UserRegContext();

        //
        // GET: /Registration/

        public ActionResult Index()
        {
            return View(db.UserRegistration.ToList());
        }

        //
        // GET: /Registration/Details/5

        public ActionResult Details(string id = null)
        {
            UserRegModel userregmodel = db.UserRegistration.Find(id);
            if (userregmodel == null)
            {
                return HttpNotFound();
            }
            return View(userregmodel);
        }

        //
        // GET: /Registration/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Registration/Create

        [HttpPost]
        public ActionResult Create(UserRegModel userregmodel)
        {
            if (ModelState.IsValid)
            {
                db.UserRegistration.Add(userregmodel);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(userregmodel);
        }

        //
        // GET: /Registration/Edit/5

        public ActionResult Edit(string id = null)
        {
            UserRegModel userregmodel = db.UserRegistration.Find(id);
            if (userregmodel == null)
            {
                return HttpNotFound();
            }
            return View(userregmodel);
        }

        //
        // POST: /Registration/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(UserRegModel userregmodel)
        {
            if (ModelState.IsValid)
            {
                db.Entry(userregmodel).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(userregmodel);
        }

        //
        // GET: /Registration/Delete/5

        public ActionResult Delete(string id = null)
        {
            UserRegModel userregmodel = db.UserRegistration.Find(id);
            if (userregmodel == null)
            {
                return HttpNotFound();
            }
            return View(userregmodel);
        }

        //
        // POST: /Registration/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            UserRegModel userregmodel = db.UserRegistration.Find(id);
            db.UserRegistration.Remove(userregmodel);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}