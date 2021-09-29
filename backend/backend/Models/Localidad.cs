using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Localidad
    {
        private int id_localidad;
        private string nombre;
        private int id_provincia;

        //Constructor
        public Localidad()
        {

        }
        //Contructor para cargar los datos
        public Localidad(int id_localidad, string nombre, int id_provincia)
        {
            this.id_localidad = id_localidad;
            this.nombre = nombre;
            this.id_provincia = id_provincia;
        }
        public int Id_localidad { get => id_localidad; set => id_localidad = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int Id_provincia { get => id_provincia; set => id_provincia = value; }
    }
}