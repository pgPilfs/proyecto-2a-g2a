using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Provincia
    {
        private int id_provincia;
        private string nombre;

        // es medio al pepe hacer hacerlo  porque por defecto el contructor ya es vacio
        public Provincia()
        {

        }
        //pero ahora si hacemos un contructor para cargar los datos
        public Provincia(int id_provincia,string nombre)
        {
            this.id_provincia = id_provincia;
            this.nombre = nombre;

        }
        public int Id_provincia { get => id_provincia; set => id_provincia = value; }
        public string Nombre { get => nombre; set => nombre = value; }
    }
}