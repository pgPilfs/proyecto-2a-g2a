using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public int Id_cliente { get; set; }
        public string CVU { get; set; }
    }

}