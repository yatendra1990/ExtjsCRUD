using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplicationExtJS.Models
{
    public class UserModel
    {
        public int ID { get; set; }

        public string UserName { get; set; }

        public string FatherName { get; set; }

        public DateTime DOB { get; set; }

        public string Address { get; set; }

        public long Contact { get; set; }

    }
}