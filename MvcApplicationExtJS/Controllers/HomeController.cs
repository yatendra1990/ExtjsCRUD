using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplicationExtJS.Models;
using System.Data;

namespace MvcApplicationExtJS.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        static string message = string.Empty;   //define string type static variable 
        static bool success = false;   //define bool type static variable

        public ActionResult Index()
        {
            UserDataAccessor objAccessor = new UserDataAccessor();
            DataSet dsRecord = new DataSet();
            dsRecord = objAccessor.GetUserData();
            return View(dsRecord);
        }

        //
        // GET: /Home/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Home/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Home/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        [HttpPost]
        public JsonResult Save(UserModel user) //define Save function thats call from controller.Its return type is JsonResult 
        {
            try    //all statement written in try block thats may be causes abnormal conditions(exception)
            {
                UserDataAccessor objAccessor = new UserDataAccessor();
                objAccessor.SaveUserRecord(user.UserName, user.FatherName, user.DOB, user.Address, user.Contact);
                success = true;
                message = "Record Inserted Successfully.";
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                success = false;
                message = ex.Message;
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpPost]
        public JsonResult Update(UserModel user) //define Save function thats call from controller.Its return type is JsonResult 
        {
            try    //all statement written in try block thats may be causes abnormal conditions(exception)
            {
                UserDataAccessor objAccessor = new UserDataAccessor();
                objAccessor.UpdateUserRecord(user.ID, user.UserName, user.FatherName, user.DOB, user.Address, user.Contact);
                success = true;
                message = "Record Updated Successfully.";
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                success = false;
                message = ex.Message;
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpDelete]
        public JsonResult Delete(UserModel user)
        {
            try
            {
                UserDataAccessor objAccessor = new UserDataAccessor();
                objAccessor.DeleteUserRecord(user.ID);
                success = true;
                message = "Record Deleted Successfully.";
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                success = false;
                message = ex.Message;
                return Json(new { success, message }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Show()
        {
            try
            {
                DataSet dsRecord = new DataSet();
                UserDataAccessor objAccessor = new UserDataAccessor();
                dsRecord = objAccessor.GetUserData();
                List<UserModel> userList = new List<UserModel>();
                if (dsRecord != null && dsRecord.Tables.Count > 0 && dsRecord.Tables[0].Rows.Count > 0)
                {
                    userList = UserDataMapper.MapUserInfo(dsRecord);
                    success = true;
                }
                return Json(new { userList, success }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                success = false;
                message = ex.Message;
                return Json(
                                new
                                {
                                    success,
                                    message
                                }, JsonRequestBehavior.AllowGet);
            }
        }

        //
        // GET: /Home/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Home/Edit/5

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
        // GET: /Home/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Home/Delete/5

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
