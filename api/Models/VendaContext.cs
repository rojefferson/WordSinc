using Microsoft.EntityFrameworkCore;

namespace api.Models{

    public class VendaContext : DbContext{


        public VendaContext(DbContextOptions<VendaContext> options): base(options)
        {

        }

        public DbSet<Venda> Vendas {get;set;}
    }
}