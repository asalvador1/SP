using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace SP.Controllers
{
    public class BaseController : Controller
    {
        public T DeserializeJSON<T>(string sJson)
        {
            JavaScriptSerializer oSe = new JavaScriptSerializer();
            return oSe.Deserialize<T>(sJson);
        }

        protected string CurrentUser
        {
            get
            {
                return Convert.ToString(Session["id_usuario"]);
            }
            set
            {
                Session["id_usuario"] = value;
            }
        }

    }
}
