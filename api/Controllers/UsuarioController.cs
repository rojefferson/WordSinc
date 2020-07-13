using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;
using api.Services;
using api.Repositories;
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
        
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody]Usuario model)
        {

           var usuario = _usuarioCont.Usuarios.Single(v => v.login.ToLower() == model.login.ToLower() && v.Password.ToLower() == model.Password );                      
           
             if (usuario == null)
                 return NotFound(new { message = "Usuário ou senha inválidos" });
            
            var token =  TokenService.GenerateToken(usuario);
            return new
            {   
                message = "Sucesso",
                user = usuario,
                token = token
            };
        }
    

    }

}