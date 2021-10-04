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
    public class DireccionFrontController : ApiController
    {
        // GET: api/DireccionFront
        public DireccionFront Get(int id_direccion)
        {
            var gDireccionFront = new GestorDireccionFront();
            return gDireccionFront.ObtenerDireccion(id_direccion);
        }

        // GET: api/DireccionFront/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/DireccionFront
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/DireccionFront/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DireccionFront/5
        public void Delete(int id)
        {
        }
    }
}
