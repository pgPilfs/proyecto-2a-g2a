using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorOperacion
    {
        private object opereacion;

        //funciona
        //devuelve las ulitmas 10 operaciones
        public List<Operacion> obtenerUltimosMovimientos(string CVU)
        {
            var listaOperaciones = new List<Operacion>();

            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (SqlConnection con = new SqlConnection(stringdb))
            {
                con.Open();
                var comm = con.CreateCommand();
                comm.CommandText = "obtener_ultimos_movimientos";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("id_emisor",CVU));
                var dr = comm.ExecuteReader();

                while (dr.Read())
                {
                    int id_operacion = dr.GetInt32(0);
                    int tipo_operacion = dr.GetInt32(1);
                    string id_emisor = dr.GetString(2).Trim();
                    string id_destinatario = dr.GetString(3).Trim();
                    decimal monto = dr.GetDecimal(4);
                    DateTime fecha = dr.GetDateTime(5);
                    var operacion = new Operacion(id_operacion,tipo_operacion,id_emisor,id_destinatario,monto,fecha);
                    listaOperaciones.Add(operacion);
                }
                con.Close();
            }
            return listaOperaciones;
        }

        //funciona
        public void CrearOperacion(Operacion operacion)
        {
            //pongo el string de conexion en una variable  y creo una transaccion vacia 
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();
            SqlTransaction objTransaction = null;
            //creo el objeto conexion y le paso como parametro el stringdb 
            using (var con = new SqlConnection(stringdb))
            {
                var fecha = DateTime.Now;
                //abro la conexion 
                con.Open();
                //cargo el onjeto transaccion 
                objTransaction = con.BeginTransaction("CrearOperacion");
                //creo los comandos de la coneccion
                var comm = con.CreateCommand();
                //asigno la transaccion al comando 
                comm.Transaction = objTransaction;
                //digo que stored procedure voy a usar
                comm.CommandText = "crear_operacion";
                comm.CommandType = CommandType.StoredProcedure;
                //cargo los parametros del procedimiento
                comm.Parameters.Add(new SqlParameter("@tipo_operacion", operacion.Tipo_operacion));
                if (operacion.Tipo_operacion == 3)
                {
                    comm.Parameters.Add(new SqlParameter("@id_emisor", "null"));
                }
                else
                {
                    comm.Parameters.Add(new SqlParameter("@id_emisor", operacion.Id_emisor));
                }
                comm.Parameters.Add(new SqlParameter("@id_destinatario", operacion.Id_destinatario));
                comm.Parameters.Add(new SqlParameter("@monto", operacion.Monto));
                comm.Parameters.Add(new SqlParameter("@fecha", operacion.Fecha));
                //ejecuto la query
                comm.ExecuteNonQuery();

                //retiro el sando de la cuenta emisora
                if(operacion.Tipo_operacion == 0 || operacion.Tipo_operacion == 4)
                {
                    comm.Parameters.Clear();
                    comm.CommandText = "modifcar_saldo";
                    comm.CommandType = CommandType.StoredProcedure;
                    var resta_monto = -operacion.Monto;
                    comm.Parameters.Add(new SqlParameter("@CVU", operacion.Id_emisor));
                    comm.Parameters.Add(new SqlParameter("@monto", resta_monto));

                    comm.ExecuteNonQuery();
                }

                //limpio los parametros 
                comm.Parameters.Clear();

                comm.CommandText = "crear_operacion";
                comm.CommandType = CommandType.StoredProcedure;

                comm.Parameters.Add(new SqlParameter("@tipo_operacion", 1));
                comm.Parameters.Add(new SqlParameter("@id_emisor", operacion.Id_emisor));
                if(operacion.Tipo_operacion == 4)
                {
                    comm.Parameters.Add(new SqlParameter("@id_destinatario", "null"));
                }
                else
                {
                    comm.Parameters.Add(new SqlParameter("@id_destinatario", operacion.Id_destinatario));
                }
                comm.Parameters.Add(new SqlParameter("@monto", operacion.Monto));
                comm.Parameters.Add(new SqlParameter("@fecha", fecha));

                comm.ExecuteNonQuery();

                comm.Parameters.Clear();
                //cargo el sando de la cuenta receptora
                if(operacion.Tipo_operacion != 4)
                {
                    comm.CommandText = "modifcar_saldo";
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.Parameters.Add(new SqlParameter("@CVU",operacion.Id_destinatario));
                    comm.Parameters.Add(new SqlParameter("@monto",operacion.Monto));

                    comm.ExecuteNonQuery();
                }

                //hago efectiva la transaccion 
                objTransaction.Commit();
                //cierro la conexion 
                con.Close();
            }

        }
    }
}