using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorCliente
    {
        //funciona
        public Cliente ObtenerCliente(int DNI)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {
                //esta tiene un error
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "obtener_cliente";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@DNI", DNI));
                var dr = comm.ExecuteReader();
                dr.Read();
                var cliente = new Cliente(dr.GetInt32(0),"nada",dr.GetString(1),dr.GetString(2),dr.GetString(3),dr.GetInt32(4));
                
                con.Close();
                return cliente;
            }
        }
        //funciona
        public void CrearCliente(Cliente cliente)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {
                con.Open();
                var comm = con.CreateCommand();
                comm.CommandText = "obtener_ultimo_id_direccion";
                comm.CommandType = CommandType.StoredProcedure;
                var dr = comm.ExecuteReader();
                dr.Read();
                var id_direccion = dr.GetInt32(0);
                dr.Close();
                comm.Parameters.Clear();
                comm.CommandText = "crear_cliente";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@DNI",cliente.dNI));
                comm.Parameters.Add(new SqlParameter("@contra", cliente.Contra));
                comm.Parameters.Add(new SqlParameter("@mail", cliente.Mail));
                comm.Parameters.Add(new SqlParameter("@nombre", cliente.Nombre));
                comm.Parameters.Add(new SqlParameter("@apellido", cliente.Apellido));
                comm.Parameters.Add(new SqlParameter("@id_direccion",id_direccion));
                comm.ExecuteNonQuery();
                con.Close();
            }

        }
    }
}