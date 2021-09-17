using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorDireccionFront
    {
        //funciona
        public DireccionFront ObtenerDireccion(int id_direccion)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {
                
                con.Open();
                var comm = con.CreateCommand();
                comm.CommandText = "obtener_direccion";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_direccion", id_direccion));
                var dr = comm.ExecuteReader();
                dr.Read();
                var direccionFront = new DireccionFront(dr.GetInt32(0), dr.GetString(1), dr.GetString(2), dr.GetString(3), dr.GetInt32(4));

                con.Close();
                return direccionFront;
            }

        }
    }
}