using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Cliente
    {
        private int DNI;
        private string contra;
        private string mail;
        private string nombre;
        private string apellido;
        private int id_direccion;
        //private BadImageFormatException DNI_foto_frente;
        //private BadImageFormatException DNI_foto_dorso;
        //Constructor
        public Cliente()
        {

        }
        //Contructor para cargar los datos
        //public Cliente(int DNI, string contra, string mail, string nombre, string apellido, int id_direccion)
        //{
        //    this.DNI = DNI;
        //    this.contra = contra;
        //    this.mail = mail;
        //    this.nombre = nombre;
        //    this.apellido = apellido;
        //    this.id_direccion = id_direccion;
        //    //this.DNI_foto_frente = DNI_foto_frente;
        //    //this.DNI_foto_dorso = DNI_foto_dorso;
        //}

        //Este es el cliente que va para el front 
        public Cliente(int DNI, string contra,string mail, string nombre, string apellido, int id_direccion)
        {
            this.DNI = DNI;
            this.contra = contra;
            this.mail = mail;
            this.nombre = nombre;
            this.apellido = apellido;
            this.id_direccion = id_direccion;
        }

        public int dNI { get => DNI; set => DNI = value; }
        public string Contra { get => contra; set => contra = value; }
        public string Mail { get => mail; set => mail = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellido { get => apellido; set => apellido = value; }
        public int Id_direccion { get => id_direccion; set => id_direccion = value; }
        //public BadImageFormatException dNI_foto_frente { get => DNI_foto_frente; set => DNI_foto_frente = value; }
        //public BadImageFormatException dNI_foto_dorso { get => DNI_foto_dorso; set => DNI_foto_dorso = value; }
    }
}