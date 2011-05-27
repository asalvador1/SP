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
    public class CierreProVtaController : Controller
    {
        #region fields
        ICierreProgramaVtaRepository _repCierre;
        Ivw_ProVtaDealerRepository _repPrVtaxDeal;
        IProgramaVtaDetalleCuota _repPrVtaDetxDeal;
        IPeriodoRepository _repPeriodos;
        ITipoPeriodosRepository _repTipoPeriodos;
        
        IUnitOfWork _db;
        #endregion

        #region Constructors
        /// <summary>
        /// Definicion por default : ADO.NET EF 4.1 sin ioc
        /// </summary>
        public CierreProVtaController()
        {
            DataBaseFactory dbf = new DataBaseFactory();
            _db = new UnitOfWork(dbf);
            _repCierre = new EntityCierreProgramaVtaRepository(dbf);
            _repPrVtaxDeal = new Entityvw_ProVtaDealerRepository(dbf);
            _repPrVtaDetxDeal = new EntityProgramaVtaDetalleCuotaRepository(dbf);
            _repPeriodos = new EntityPeriodoRepository(dbf);
            _repTipoPeriodos = new EntityTipoPeriodoRepository(dbf);
        }
        public CierreProVtaController(ICierreProgramaVtaRepository rep1, Ivw_ProVtaDealerRepository rep2, IProgramaVtaDetalleCuota rep3, IPeriodoRepository rep4,ITipoPeriodosRepository rep5, IUnitOfWork db)
        {
            this._db = db;
            this._repCierre = rep1;
            this._repPrVtaxDeal = rep2;
            this._repPrVtaDetxDeal = rep3;
            this._repPeriodos = rep4;
            this._repTipoPeriodos = rep5;
        }
        #endregion

        public ViewResult Index()
        {
            return View();
        }

        public ActionResult CierreProgramaVta()
        {
            return View();
        }

        public JsonResult ObtenerDistribuidores()
        {
            var GFX = _repCierre.GetDealers().ToList();
            Hashtable result = new Hashtable();
            result["GFX"] = GFX.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerProgramasdeventaxDistribuidor(int idgfx)
        {
            var ProVta = _repPrVtaxDeal.GetMany(f => f.id_Gfx == idgfx);
            Hashtable result = new Hashtable();
            result["ProVta"] = ProVta.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetPerxProVtaxDist(int idProVta, int idGfx)
        {
            var TipoPeriodo = _repPrVtaDetxDeal.Get(f => f.idProgramaVta == idProVta && f.id_Gfx == idGfx);
            var vPeriodos = _repPeriodos.GetMany(f => f.id_TipoPeriodo == TipoPeriodo.id_TipoPeriodo);
            Hashtable result = new Hashtable();
            result["Periodos"] = vPeriodos.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
