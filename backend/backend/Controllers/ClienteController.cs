using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers
{
    [RoutePrefix("api/cliente")]
    public class ClienteController : ApiController
    {

        //GET: api/Cliente/5
        public Cliente Get(int DNI)
        {
            var gCliente = new GestorCliente();
            return gCliente.ObtenerCliente(DNI);
        }

        // POST: api/Cliente
        public void Post(Cliente cliente)
        {
            var gCliente = new GestorCliente();
            gCliente.CrearCliente(cliente);

        }

        // PUT: api/Cliente/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cliente/5
        public void Delete(int id)
        {
        }
    }
}
