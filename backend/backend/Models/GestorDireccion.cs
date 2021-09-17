using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorDireccion
    {
        //funciona
        public void Crear_Direccion(Direccion direccion)
        {

            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();
            using (var con = new SqlConnection(stringdb))
            {
                con.Open();
                var comm = con.CreateCommand();
                comm.CommandText = "crear_direccion";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_localidad", direccion.Id_localidad));
                comm.Parameters.Add(new SqlParameter("@calle", direccion.Calle));
                comm.Parameters.Add(new SqlParameter("@numero", direccion.Numero));
                comm.ExecuteNonQuery();
                con.Close();
            }

        }
    }
}