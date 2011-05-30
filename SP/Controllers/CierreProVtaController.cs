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
            //var TipoPeriodo = _repPrVtaDetxDeal.GetMany(f => f.idProgramaVta == idProVta && f.id_Gfx == idGfx);
            //var otro = TipoPeriodo.ToList();
            int buscar = 1;//TipoPeriodo.id_TipoPeriodo;   
            //TipoPeriodo = null;
            var vPeriodos = _repPeriodos.GetMany(f => f.id_TipoPeriodo == buscar).ToList();

            var resultColl = vPeriodos; //new List<Periodos>();
            //vPeriodos.ForEach(a =>
            //    resultColl.Add(new Periodos
            //    {
            //        id_TipoPeriodo = a.id_TipoPeriodo,
            //        id_periodo = a.id_periodo,
            //        Cierre_ProVta = new List<Cierre_ProVta>(),
            //        Descripcion = a.Descripcion,
            //        estatus =a.estatus,
            //        fch_fin = a.fch_fin,
            //        fch_inicio = a.fch_inicio,
            //        ProgramaVtaDetalleCuota = new List<ProgramaVtaDetalleCuota>(),
            //        Tipo_Periodos = new Tipo_Periodos()
            //    }));

            Hashtable result = new Hashtable();
            result["Periodos"] = resultColl;
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
