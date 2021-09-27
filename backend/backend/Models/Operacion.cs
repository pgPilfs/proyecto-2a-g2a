using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Operacion
    {
        private int id_operacion;
        private int tipo_operacion;
        private string id_emisor;
        private string id_destinatario;
        private decimal monto;
        private DateTime fecha;

        //Constructor
        public Operacion()
        {

        }
        //Contructor para cargar los datos
        public Operacion(int id_operacion, int tipo_operacion, string id_emisor, string id_destinatario, decimal monto, DateTime fecha)
        {
            this.id_operacion = id_operacion;
            this.tipo_operacion = tipo_operacion;
            this.id_emisor = id_emisor; //CVU
            this.id_destinatario = id_destinatario; //CVU
            this.monto = monto;
            this.fecha = fecha;
        }
        public int Id_operacion { get => id_operacion; set => id_operacion = value; }
        public int Tipo_operacion { get => tipo_operacion; set => tipo_operacion = value; }
        public string Id_emisor { get => id_emisor; set => id_emisor = value; }
        public string Id_destinatario { get => id_destinatario; set => id_destinatario = value; }
        public decimal Monto { get => monto; set => monto = value; }
        public DateTime Fecha { get => fecha; set => fecha = value; }
    }
}