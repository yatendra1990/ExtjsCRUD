using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcApplicationExtJS.Models;
using System.IO;

namespace MvcApplicationExtJS.Controllers
{
    public class FileUploadController : Controller
    {
        private UserRegContext db = new UserRegContext();

        //
        // GET: /FileUpload/

        public ActionResult Index()
        {
            return View(db.File.ToList());
        }

        //
        // GET: /FileUpload/Details/5

        public ActionResult Details(int id = 0)
        {
            FileUploadModel fileuploadmodel = db.File.Find(id);
            if (fileuploadmodel == null)
            {
                return HttpNotFound();
            }
            return View(fileuploadmodel);
        }

        //
        // GET: /FileUpload/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /FileUpload/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(FileUploadModel fileuploadmodel)
        {
            if (ModelState.IsValid)
            {
                db.File.Add(fileuploadmodel);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(fileuploadmodel);
        }

        private byte[] ConvertToByteArray(string fileName)
        {
            string filePath = Server.MapPath(fileName);
            FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read);
            BinaryReader br = new BinaryReader(fs);
            Byte[] bytes = br.ReadBytes((int)fs.Length);
            return bytes;
        }

        [HttpPost]
        public ActionResult Upload()
        {
            if (Request.Files.Count == 1)
            {
                var file = Request.Files["file"];
                if (file != null)
                {
                    var size = file.ContentLength;
                    var name = System.IO.Path.GetFileName(file.FileName);

                    if (size > 0)
                    {
                        if (size <= 2 * 1024 * 1024)
                        {
                            FileUploadModel fileuploadmodel = new FileUploadModel();
                            fileuploadmodel.FileName = name;
                            BinaryReader br = new BinaryReader(file.InputStream);
                            Byte[] bytes = br.ReadBytes((int)file.InputStream.Length);
                            fileuploadmodel.FileData = bytes;
                            db.File.Add(fileuploadmodel);
                            int res = db.SaveChanges();
                            if (res > 0)
                            {
                                return Json(new
                                {
                                    success = true,
                                    msg = "Your file has been uploaded",
                                    data = new
                                    {
                                        name,
                                        size
                                    }
                                }, "text/html");
                            }
                            else
                            {
                                return Json(new
                                {
                                    success = true,
                                    msg = "Unable To Upload.",
                                    data = new { name, size }
                                }, "text/html");
                            }

                        }

                        return Json(new
                        {
                            success = false,
                            msg = "Your file is too large"
                        }, "text/html");
                    }
                }
            }

            return Json(new
            {
                success = false,
                msg = "Select file to upload"
            }, "text/html");
        }

        //
        // GET: /FileUpload/Edit/5

        public ActionResult Edit(int id = 0)
        {
            FileUploadModel fileuploadmodel = db.File.Find(id);
            if (fileuploadmodel == null)
            {
                return HttpNotFound();
            }
            return View(fileuploadmodel);
        }

        //
        // POST: /FileUpload/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(FileUploadModel fileuploadmodel)
        {
            if (ModelState.IsValid)
            {
                db.Entry(fileuploadmodel).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(fileuploadmodel);
        }

        //
        // GET: /FileUpload/Delete/5

        public ActionResult Delete(int id = 0)
        {
            FileUploadModel fileuploadmodel = db.File.Find(id);
            if (fileuploadmodel == null)
            {
                return HttpNotFound();
            }
            return View(fileuploadmodel);
        }

        //
        // POST: /FileUpload/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            FileUploadModel fileuploadmodel = db.File.Find(id);
            db.File.Remove(fileuploadmodel);
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