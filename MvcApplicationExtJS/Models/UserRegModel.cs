using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Security;
using System.Data.Entity;
using System.Globalization;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace MvcApplicationExtJS.Models
{
    public class UserRegContext : DbContext
    {
        public UserRegContext()
            : base("DefaultConnection1")
        { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public DbSet<UserRegModel> UserRegistration { get; set; }
        public DbSet<FileUploadModel> File { get; set; }
    }

    public class UserRegModel
    {
        [Key]
        [Required]
        public string UserID
        {
            get;set;
        }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long.",MinimumLength=4)]
        public string Password
        {
            get;set;
        }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage="Password and Confirm Password do not match.")]
        public string ConfirmPassword
        {
            get;
            set;
        }

        [Required]        
        public string FirstName
        {
            get;set;
        }

        [Required]
        public string LastName
        {
            get;set;
        }

        [Required]
        public string CompanyName
        {
            get;set;
        }

        [Required]
        public string EmailID
        {
            get;set;
        }

        [Required]
        public DateTime DateOfBirth
        {
            get;set;
        }

    }
}