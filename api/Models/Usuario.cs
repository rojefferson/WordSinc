using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
namespace api.Models
{
    public class Usuario{  
        public int id {get;set;}
        public string login {get;set;}
        public string Password { get; set; }
        public string Role { get; set; }

    }
}