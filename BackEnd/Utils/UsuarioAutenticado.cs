using System;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Security.Claims;
using System.Linq;
using BackEnd.Models;

namespace BackEnd.Utils
{
    public class UsuarioAutenticado
    {

        //Injeção de dependência
        private readonly IHttpContextAccessor _accessor;     
        public UsuarioAutenticado (IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        //Adiciona os valores que foram passadas ao claim para as propriedades criadas
        public string Id => GetClaimsIdentity().FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
        public string Name => _accessor.HttpContext.User.Identity.Name;
        public string Email => GetClaimsIdentity().FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
        public string Permissao => GetClaimsIdentity().FirstOrDefault(x => x.Type == ClaimTypes.Role)?.Value;
        public IEnumerable<Claim> GetClaimsIdentity()
        {
            return _accessor.HttpContext.User.Claims;
        }
    }
}