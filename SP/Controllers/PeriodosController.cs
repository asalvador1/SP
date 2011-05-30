using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SP.DomainModel;
using SP.DomainModel.Base;
using SP.DomainModel.Repositories;
using System.Collections;

namespace SP.Controllers
{
    public class PeriodosController : Controller
    {
         #region fields
        IPeriodoRepository _repPeriodos;
        IUnitOfWork _db;
        #endregion


         #region Constructors
        /// <summary>
        /// Definicion por default : ADO.NET EF 4.1 sin ioc
        /// </summary>
        public PeriodosController()
        {
            DataBaseFactory dbf = new DataBaseFactory();
            _db = new UnitOfWork(dbf);
            _repPeriodos = new EntityPeriodoRepository(dbf);
        }
        public PeriodosController(IPeriodoRepository rep4, IUnitOfWork db)
        {
            this._db = db;
            this._repPeriodos = rep4;
        }
        #endregion
        //
        // GET: /Periodos/
       
        public ViewResult Index()
        {
            return View();
        }
        
        public JsonResult ObtenerDistribuidores()
        {

            var query = _repPeriodos.GetAll();
            Hashtable result = new Hashtable();
            result["Rows"] = query.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
