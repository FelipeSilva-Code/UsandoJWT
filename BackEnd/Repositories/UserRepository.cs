using System.Collections.Generic;
using System.Linq;
using BackEnd.Models;

namespace BackEnd.Repositories
{
    public static class UserRepository
    {
        //Cria dois registros, para não ter que usar o banco de dados
        public static User Get(string email, string senha)
        {
            var users = new List<User>();
            users.Add(new User { Id = 1, Nome = "batman", Email = "batman@gmail.com", Senha = "batman", Permissao = "Professor" });
            users.Add(new User { Id = 2, Nome = "robin", Email = "robin@gmail.com", Senha = "robin", Permissao = "Aluno" });
            return users.Where(x => x.Email.ToLower() == email.ToLower() && x.Senha == senha).FirstOrDefault();
        }
    }
}