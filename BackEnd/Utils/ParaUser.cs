using System;
using BackEnd.Models;
namespace BackEnd.Utils
{
    public class ParaUser
    {
        public User TransformarParaUser (UsuarioAutenticado usuarioAutenticado)
        {
            User user = new User();
            user.Email = usuarioAutenticado.Email;
            user.Id = Convert.ToInt32(usuarioAutenticado.Id);
            user.Nome = usuarioAutenticado.Name;
            user.Permissao = usuarioAutenticado.Permissao;
            user.Senha = "";

            return user;
        } 
    }
}