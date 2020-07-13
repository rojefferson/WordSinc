using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;
using System.Collections;
using AutoMapper;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Http;


namespace api.Controllers {
    [ApiController]
    [Route("[Controller]")]
    public class VendaController : ControllerBase
    {
        private readonly VendaContext _vendaContext;
        private readonly IMapper _mapVenda;

        public VendaController(VendaContext cont ,IMapper mvenda)
        {
            _vendaContext = cont;
            _mapVenda = mvenda;

        }   
        [HttpGet]
        [Route("Venda")]
        public List<ViewVenda> vendas(){
     
           return   _vendaContext.Vendas.ToList().Select(x => _mapVenda.Map<ViewVenda>(x)).ToList();;
        }
        
        [HttpPost]
        [Route("cadastrar")]
        public IActionResult  casdastrar([FromBody]Venda venda)
        {
           if(venda.id ==0)
           {
                _vendaContext.Vendas.Add(venda);
                _vendaContext.SaveChanges();
           }else{
        
                var vendaOLD = _vendaContext.Vendas.Single(v => v.id == venda.id);
                if(vendaOLD == null)
                {
                    return NotFound();
                }
                _vendaContext.Remove(vendaOLD);
                _vendaContext.SaveChanges();
                try
                {


                    _vendaContext.Add(venda);
                    _vendaContext.SaveChanges();
                }
                catch (System.Exception e)
                {
                    System.Console.WriteLine(e.Message);
                }
               
           }
         
            
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult deleteByid (int? id)
        {
            
            try
            {
                var venda = _vendaContext.Vendas.Single(v => v.id == id);

                if(venda == null)
                {
                    return NotFound();
                }

                _vendaContext.Remove(venda);

                _vendaContext.SaveChanges();

            }
            catch (System.Exception)
            {
               
                return StatusCode(500, "Internal server error");
            }
            return Ok();
        }
        
        [HttpGet("{id}")]
        public Venda getByid(int? id)
        {
            return _vendaContext.Vendas.Single(v => v.id == id);
        }
    
    }
}