using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Repositories;
using BackEnd.Services;
using BackEnd.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using BackEnd.Utils;

namespace BackEnd.Controllers
{
    [Controller]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly UsuarioAutenticado _usuario;
        private readonly ParaUser _paraUser;

        public HomeController (UsuarioAutenticado usuario, ParaUser paraUser)
        {
            _usuario = usuario;
            _paraUser = paraUser;
        }


        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public ActionResult<dynamic> Authenticate([FromBody] User model)
        {
            // Recupera o usuário
            var user = UserRepository.Get(model.Email, model.Senha);

            // Verifica se o usuário existe
            if (user == null)
                return NotFound(new Resposta("Usuário ou senha inválidos", 404 ));

            // Gera o Token
            var token = TokenService.GenerateToken(user);

            // Oculta a senha
            user.Senha = "";

            // Retorna os dados
            return new
            {
                user = user,
                token = token
            };
        }

        //Verifica se o token é válido
        [HttpGet]
        [Route("verificacao")]
        [Authorize]
        public ActionResult<User> VerificaSeTokenEstaCorreto ()
        {
            User user = _paraUser.TransformarParaUser(_usuario);
            return user;   
        }

        [HttpGet]
        [Route("portal/livre")]
        [Authorize(Roles = "Professor, Aluno")]
        public ActionResult<User> EntrarNoPortalLivre ()
        {
            User user = _paraUser.TransformarParaUser(_usuario);
            return user;
        }

        [HttpGet]
        [Route("portal/professor")]
        [Authorize(Roles = "Professor")]
        public ActionResult<User> EntrarNoPortalDoProfessor ()
        {
            User user = _paraUser.TransformarParaUser(_usuario);
            return user;
        }

        [HttpGet]
        [Route("portal/aluno")]
        [Authorize(Roles = "Aluno")]
        public ActionResult<User> EntrarNoPortalDoAluno ()
        {
            User user = _paraUser.TransformarParaUser(_usuario);
            return user;
        }

        /*Verifica se o token está correto, se estiver retorna uma menssagem
        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticated() => String.Format("Autenticado - {0}", User.Identity.Name);
        */
    }
}