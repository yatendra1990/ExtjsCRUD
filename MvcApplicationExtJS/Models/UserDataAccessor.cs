using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace MvcApplicationExtJS.Models
{
    public class UserDataAccessor
    {
        DBConnection objConnection;
        public UserDataAccessor()
        {
            objConnection = new DBConnection();
        }

        public DataSet GetUserData()
        {
            DataSet ds = new DataSet();
            using (SqlCommand cmd=new SqlCommand())
            {
                cmd.CommandText = "USP_GetUserData";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = objConnection.Connection;
                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                sda.Fill(ds);
            }
            return ds;
        }

        public int SaveUserRecord(string name, string fatherName, DateTime DOB, string address, long contactNum)
        {
            int result = 0;
            using (SqlCommand cmd=new SqlCommand())
            {
                objConnection.Connection.Open();
                cmd.CommandText = "USP_InsertUserReocrd";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = objConnection.Connection;

                cmd.Parameters.AddWithValue("@name", name);
                cmd.Parameters.AddWithValue("@FatherName", fatherName);
                cmd.Parameters.AddWithValue("@DOB", DOB);
                cmd.Parameters.AddWithValue("@address", address);
                cmd.Parameters.AddWithValue("@contact", contactNum);
                
                result = cmd.ExecuteNonQuery();
                objConnection.Connection.Close();
            }
            return result;
        }
    }
}