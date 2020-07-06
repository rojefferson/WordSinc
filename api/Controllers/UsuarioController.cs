using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioContext _usuarioCont;

        public UsuarioController(UsuarioContext cont)
        {
            _usuarioCont = cont;
        }   

        [HttpGet]
        public string getUsuario(){
            
            _usuarioCont.Usuarios.Add(new Usuario(){nome = "teste"});

            return "inseriu";
        }

    }

}