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
        //funciona
        public List<Provincia> ObtenerProvincias()
        {
            var listaProvincias = new List<Provincia>();

            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (SqlConnection con = new SqlConnection(stringdb))
            {
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "obtener_Provincias";
                comm.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = comm.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();

                    var provincia = new Provincia(id, nombre);
                    listaProvincias.Add(provincia);
                }
                con.Close();
            }

            return listaProvincias;
        }
    }
}