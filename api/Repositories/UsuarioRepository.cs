using System.Collections.Generic;
using System.Linq;
using api.Models;


namespace api.Repositories{
    public static class UsuarioRepository{

        public static Usuario Get(string username, string password)
        {
            var users = new List<Usuario>();
            users.Add(new Usuario { id = 1, login = "jefferson", Password = "123", Role = "admin" });
            return users.Where(x => x.login.ToLower() == username.ToLower() && x.Password == x.Password).FirstOrDefault();
        }
    }
}