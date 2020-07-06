using System;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
namespace api.Models
{
    public class Usuario{
       
       
        public int id {get;set;}
        public string nome {get;set;}

    }
}