using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class DireccionFront
    {
        private int id_direccion;
        private string localidad;
        private string provincia;
        private string calle;
        private int numero;

        //Constructor
        public DireccionFront()
        {

        }
        //Contructor para cargar los datos
        public DireccionFront(int id_direccion, string localidad, string provincia, string calle, int numero)
        {
            this.id_direccion = id_direccion;
            this.localidad = localidad;
            this.provincia = provincia;
            this.calle = calle;
            this.numero = numero;
        }
        public int Id_direccion { get => id_direccion; set => id_direccion = value; }
        public string Localidad { get => localidad; set => localidad = value; }
        public string Provincia { get => provincia; set => provincia = value; }
        public string Calle { get => calle; set => calle = value; }
        public int Numero { get => numero; set => numero = value; }
    }
}