using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace backend
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Configuración y servicios de API web
<<<<<<< Updated upstream

            // Rutas de API web
=======
            //config.EnableCors();
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
            //el maping lo que te permite dalre nombres personalizados a las rutas
>>>>>>> Stashed changes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
