using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace backend.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CuentaController : ApiController
    {
        // GET: api/Cuenta
        public Cuenta Get(string CVU)
        {
            GestorCuenta gCuenta = new GestorCuenta();
            return gCuenta.ObtenerCuenta(CVU);
        }

        // POST: api/Cuenta
        public void Post(Cuenta nueva)
        {
            var gCuenta = new GestorCuenta();
            gCuenta.CrearCuenta(nueva);
        }

        // PUT: api/Cuenta/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cuenta/5
        public void Delete(string CVU)
        {
            var gCuenta = new GestorCuenta();
            gCuenta.EliminarCuenta(CVU);
        }
    }
}
