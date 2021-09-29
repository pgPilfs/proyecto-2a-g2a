using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class TipoOperacion
    {
        private int id_tipo_operacion;
        private string nombre;
        private string descripcion;

        //Constructor
        public TipoOperacion()
        {

        }
        //Contructor para cargar los datos
        public TipoOperacion(int id_tipo_operacion, string nombre, string descripcion)
        {
            this.id_tipo_operacion = id_tipo_operacion;
            this.nombre = nombre;
            this.descripcion = descripcion;
        }
        public int Id_tipo_operacion { get => id_tipo_operacion; set => id_tipo_operacion = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}