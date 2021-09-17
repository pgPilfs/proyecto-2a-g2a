using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers
{
    public class DireccionController : ApiController
    {
        // GET: api/Direccion
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Direccion/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Direccion
        public void Post(Direccion direccion)
        {
            var gDireccion = new GestorDireccion();
            gDireccion.Crear_Direccion(direccion);
        }

        // PUT: api/Direccion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Direccion/5
        public void Delete(int id)
        {
        }
    }
}
