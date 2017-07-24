using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MvcApplicationExtJS.Models
{
    public class DBConnection
    {
        private SqlConnection connection = null;
        private static string conStr = System.Configuration.ConfigurationManager.ConnectionStrings["MyCon"].ConnectionString;

        public DBConnection()
        {
            connection = new SqlConnection(conStr);
        }

        public SqlConnection Connection
        {
            get { return connection; }
        }
    }
}