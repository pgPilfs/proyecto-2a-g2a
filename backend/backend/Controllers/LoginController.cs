using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace backend.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {

        [HttpGet]
        [Route("echoping")]
        public IHttpActionResult EchoPing()
        {
            return Ok(true);
        }
        [HttpGet]
        [Route("echouser")]
        public IHttpActionResult EchoUser()
        {
            var identity = Thread.CurrentPrincipal.Identity;
            return Ok($" IPrincipal-user: {identity.Name} - IsAuthenticated: { identity.IsAuthenticated}");
        }

        [HttpPost]
        [Route("authenticate")]
        public IHttpActionResult Authenticate(LoginRequest login)
        {
            if (login == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            //TODO: This code is only for demo - extract method in new class & validate correctly in your application !!
            var gestorCuenta = new GestorCuenta();
            var loginRequest = gestorCuenta.ObtenerLoginCuenta(login.Username, login.Password);
            //var isUserValid = (login.Username == "user" && login.Password == "123456");
            if (loginRequest.Password.Length > 0)
            {
                var rolename = "Developer";
                var token = TokenGenerator.GenerateTokenJwt(login.Username, rolename);
                loginRequest.Password = "nananinao";
                loginRequest.Token = token;
                return Ok(loginRequest);
            }
            // Unauthorized access 
            return Unauthorized();
        }
    }
}

