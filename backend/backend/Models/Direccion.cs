using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Direccion
    {
        private int id_direccion;
        private int id_localidad;
        private string calle;
        private int numero;

        //Constructor
        public Direccion()
        {

        }
        //Contructor para cargar los datos
        public Direccion(int id_direccion, int id_localidad, string calle, int numero)
        {
            this.id_direccion = id_direccion;
            this.id_localidad = id_localidad;
            this.calle = calle;
            this.numero = numero;
        }
        public int Id_direccion { get => id_direccion; set => id_direccion = value; }
        public int Id_localidad { get => id_localidad; set => id_localidad = value; }
        public string Calle { get => calle; set => calle = value; }
        public int Numero { get => numero; set => numero = value; }
    }
}