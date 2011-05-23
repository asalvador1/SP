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
    public class StockingProgramController : Controller
    {
        #region fields
        IProgramaVtaRepository _repProgVta;
        IUnitOfWork _db;
        #endregion 
        #region Constructors
        /// <summary>
        /// Definicion por default : ADO.NET EF 4.1 sin ioc
        /// </summary>
        public StockingProgramController()
        {
            DataBaseFactory dbf = new DataBaseFactory();
            _db = new UnitOfWork(dbf);
            _repProgVta = new EntityProgramaVtaRepository(dbf);
        }
        public StockingProgramController(IProgramaVtaRepository rep1, IUnitOfWork db)
        {
            this._db = db;
            this._repProgVta = rep1;
        }
        #endregion

        public ViewResult Index()
        {
            return View();
        
        }

        /// <summary>
        /// Obtener todos los programas vigentes
        /// </summary>
        /// <returns></returns>
        public JsonResult ListVigentes()
        {
            //consultar programas vigentes
            var current = DateTime.Now.Date.Add(new TimeSpan(23,59,59));
            var query = this._repProgVta.GetMany(f => f.estatus == "1" &&
                current <= f.fch_caducidad);
            
            Hashtable result = new Hashtable();
            result["Rows"] = query.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}
