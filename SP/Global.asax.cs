using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Diagnostics;

namespace SP
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default", // Route name
                "{controller}.aspx/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Main", id = UrlParameter.Optional } // Parameter defaults
                //new { controller = "StockingProgram", action = "panelProgramaVtaHeader" } // 
            );

        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);
        }

        public void Session_OnStart()
        {
            Debug.WriteLine("Session Start");
            //Cargar información de usuario actual
            string sNTUser = Request.ServerVariables["HTTP_IV_USER"] + Request.ServerVariables["AUTH_USER"];
            int pos = sNTUser.IndexOf("\\", 0);
            int clong = sNTUser.Length;
            if (pos > -1)
                sNTUser = sNTUser.Substring(pos + 1, clong - pos - 1);

            Session["id_usuario"] = sNTUser;
        }
    }
}