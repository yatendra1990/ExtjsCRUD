using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace MvcApplicationExtJS.Models
{
    public class UserDataMapper
    {
        public static List<UserModel> MapUserInfo(DataSet dsRecords)
        {
            try
            {
                List<UserModel> lstModel = new List<UserModel>();
                foreach (DataRow item in dsRecords.Tables[0].Rows)
                {
                    UserModel user = new UserModel();
                    if (item["ID"]!=DBNull.Value)
                    {
                        user.ID = Convert.ToInt32(item["ID"]);
                    }
                    if (item["Name"]!=DBNull.Value)
                    {
                        user.UserName = item["Name"].ToString();
                    }
                    if (item["Father_Name"]!=DBNull.Value)
                    {
                        user.FatherName = item["Father_Name"].ToString();
                    }
                    if (item["DOB"]!=DBNull.Value)
                    {
                        user.DOB = Convert.ToDateTime(item["DOB"]);
                    }
                    if (item["Address"]!=DBNull.Value)
                    {
                        user.Address = item["Address"].ToString();
                    }
                    if (item["Contact"]!=DBNull.Value)
                    {
                        user.Contact = Convert.ToInt64(item["Contact"]);
                    }
                    lstModel.Add(user);
                }
                return lstModel;
            }
            catch (Exception)
            {                
                throw;
            }
        }
    }
}