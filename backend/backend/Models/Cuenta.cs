using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Cuenta
    {
        private string CVU;
        private int id_cliente;
        private decimal saldo;
        private DateTime fecha_alta;
        private DateTime fecha_baja;
        private bool valida;
        //Constructor
        public Cuenta()
        {

        }
        //Contructor para cargar los datos
        public Cuenta(string CVU, int id_cliente, decimal saldo, DateTime fecha_alta, DateTime fecha_baja ,bool valida)
        {
            this.CVU = CVU;
            this.id_cliente = id_cliente;
            this.saldo = saldo;
            this.fecha_alta = fecha_alta;
            this.fecha_baja = fecha_baja;
            this.valida = valida;
        }
        public string cVU { get => CVU; set => CVU = value; }
        public int Id_cliente { get => id_cliente; set => id_cliente = value; }
        public decimal Saldo { get => saldo; set => saldo = value; }
        public DateTime Fecha_alta { get => fecha_alta; set => fecha_alta = value; }
        public DateTime Fecha_baja { get => fecha_baja; set => fecha_baja = value; }
        public bool Valida { get => valida; set => valida = value; }
    }
}