using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorProvincia
    {
        public void AgregarProvincia(Provincia provincia)
        {
            //creo una variable con en la cual guardo el string de la coneccion que esta en web.config
            string con = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (SqlConnection conn = new SqlConnection(con))
            {
                conn.Open();
                SqlCommand comm = conn.CreateCommand();
                comm.CommandText = "crear_provincia";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_provincia", provincia.Id_provincia));
                comm.Parameters.Add(new SqlParameter("@nombre", provincia.Nombre));
                comm.ExecuteNonQuery();
            }
        }
    }
}