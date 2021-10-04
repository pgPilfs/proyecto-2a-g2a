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
    public class OperacionController : ApiController
    {

        // GET: api/Operacion/5
        public IEnumerable<Operacion> Get(string CVU)
        {
            var gOperacion = new GestorOperacion();
            return gOperacion.obtenerUltimosMovimientos(CVU);

        }

        // POST: api/Operacion
        public void Post(Operacion operacion)
        {
            var gOperacion = new GestorOperacion();
            gOperacion.CrearOperacion(operacion);
        }

        // PUT: api/Operacion/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Operacion/5
        public void Delete(int id)
        {
        }
    }
}
