using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class GestorCuenta
    {
        //funciona
        public void CrearCuenta(Cuenta nueva)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {
                con.Open();

                var comm = con.CreateCommand();
                comm.CommandText = "obtener_ultimo_CVU";
                comm.CommandType = CommandType.StoredProcedure;
                var dr = comm.ExecuteReader();
                dr.Read();
                var ultimoCVU = Convert.ToDecimal(dr.GetString(0));
                ultimoCVU = ultimoCVU + 1;
                var nuevoCVU=  ultimoCVU.ToString();
                   
                dr.Close();
    
                comm.CommandText = "crear_cuenta";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@CVU", nuevoCVU));
                comm.Parameters.Add(new SqlParameter("@id_cliente", nueva.Id_cliente));
                comm.Parameters.Add(new SqlParameter("@fecha_alta", nueva.Fecha_alta));
                comm.Parameters.Add(new SqlParameter("@fecha_baja", Convert.ToDateTime("11/9/2000")));
                comm.Parameters.Add(new SqlParameter("@saldo", nueva.Saldo));
                comm.Parameters.Add(new SqlParameter("@valida", nueva.Valida));
                comm.ExecuteNonQuery();
                con.Close();

            }
        }
        //funciona
        public Cuenta ObtenerCuenta(int id_cliente)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {

                var cuenta = new Cuenta();
                //Abro la conexion 
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "obtener_cuenta";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@id_cliente", id_cliente));
                var dr = comm.ExecuteReader();
                if (dr.Read())
                {

                    cuenta.cVU = dr.GetString(0).Trim();
                    cuenta.Id_cliente = dr.GetInt32(1);
                    cuenta.Saldo = dr.GetDecimal(2);
                    cuenta.Fecha_alta = dr.GetDateTime(3);
                    if (dr.GetDataTypeName(4) == null)
                    {
                        cuenta.Fecha_baja = Convert.ToDateTime("11/9/2000");
                    }
                    else
                    {
                        cuenta.Valida = dr.GetBoolean(5);
                    }


                    con.Close();
                    return cuenta;
                }

                return cuenta;

            }
        }

        //funciona
        public void EliminarCuenta(string CVU)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {

                var cuenta = new Cuenta();
                //Abro la conexion 
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "eliminar_cuenta";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@CVU", CVU));
                var dr = comm.ExecuteNonQuery();
                con.Close();
            }
        }
        public LoginRequest ObtenerLoginCuenta(string Username , string Password)
        {
            string stringdb = ConfigurationManager.ConnectionStrings["stringdb"].ToString();

            using (var con = new SqlConnection(stringdb))
            {

                var loginRequest = new LoginRequest();
                //Abro la conexion 
                con.Open();
                SqlCommand comm = con.CreateCommand();
                comm.CommandText = "obtener_loginCuenta";
                comm.CommandType = CommandType.StoredProcedure;
                comm.Parameters.Add(new SqlParameter("@username", Username));
                comm.Parameters.Add(new SqlParameter("@password", Password));
                var dr = comm.ExecuteReader();
                if (dr.Read())
                {   

                    loginRequest.Username = dr.GetString(0).Trim();
                    loginRequest.Password = dr.GetString(1).Trim();
                    loginRequest.Id_cliente = dr.GetInt32(2);
                    loginRequest.CVU = dr.GetString(3).Trim();



                    con.Close();
                    return loginRequest;
                }

                return loginRequest;

            }


        }
    }
}