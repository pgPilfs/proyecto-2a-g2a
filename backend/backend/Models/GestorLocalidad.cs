using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorLocalidad
    {
        //funciona
        public List<Localidad> ObtenerLocalidades()
        {
            var listaLocalidades = new List<Localidad>();

            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (SqlConnection con = new SqlConnection(stringdb))
            {
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "obtener_Localidades";
                comm.CommandType = CommandType.StoredProcedure;
                SqlDataReader dr = comm.ExecuteReader();

                while (dr.Read())
                {
                    int id = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();
                    int id_provincia = dr.GetInt32(2);

                    var localidad = new Localidad(id, nombre , id_provincia);
                    listaLocalidades.Add(localidad);
                }
                con.Close();
            }

            return listaLocalidades;
        }
    }
}