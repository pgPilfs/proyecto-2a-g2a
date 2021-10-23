using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers
{
    public class CuentaController : ApiController
    {
        // GET: api/Cuenta
        public Cuenta Get(int id_cliente)
        {

            GestorCuenta gCuenta = new GestorCuenta();
            return gCuenta.ObtenerCuenta(id_cliente);
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
