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
        IVwPedidosCierreProVtaRepository _repPedidosProVta;
        
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
            _repCierre = new EntityCierreProgramaVtaRepository();
            _repPrVtaxDeal = new Entityvw_ProVtaDealerRepository();
            _repPrVtaDetxDeal = new EntityProgramaVtaDetalleCuotaRepository();
            _repPeriodos = new EntityPeriodoRepository();
            _repTipoPeriodos = new EntityTipoPeriodoRepository();
            _repPedidosProVta = new EntityVwPedidosCierreProVtaRepository();
        }
        public CierreProVtaController(ICierreProgramaVtaRepository rep1, Ivw_ProVtaDealerRepository rep2, IProgramaVtaDetalleCuota rep3, IPeriodoRepository rep4,ITipoPeriodosRepository rep5, IVwPedidosCierreProVtaRepository rep6,IUnitOfWork db)
        {
            this._db = db;
            this._repCierre = rep1;
            this._repPrVtaxDeal = rep2;
            this._repPrVtaDetxDeal = rep3;
            this._repPeriodos = rep4;
            this._repTipoPeriodos = rep5;
            this._repPedidosProVta = rep6;
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

        public JsonResult GetDistribuidores()
        {
            var GFX = _repCierre.GetDealers().ToList();
            Hashtable result = new Hashtable();
            result["GFX"] = GFX.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetProgramasdeventaxDistribuidor(int idgfx)
        {
            var ProVta = _repPrVtaxDeal.GetMany(f => f.id_Gfx == idgfx);
            Hashtable result = new Hashtable();
            result["ProVta"] = ProVta.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTipoPerxProvtaxDist(int idGfx, int idProVta)
        {
            var TP = _repPrVtaDetxDeal.GetMany(f => f.idProgramaVta == idProVta && f.id_Gfx == idGfx);
            int i=0;
            int[] arr = new int[TP.Count()];
            foreach (var item in TP)
            {
                arr[i] = item.id_TipoPeriodo;
                i = i + 1;
            }
            
            var Tps = _repTipoPeriodos.GetMany(tps => arr.Contains(tps.id_TipoPeriodo));
            Hashtable result = new Hashtable();
            result["TipoPer"] = Tps.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetPerxProVtaxDist(int idTipoPeriodo)
        {
            var vPeriodos = _repPeriodos.GetMany(f => f.id_TipoPeriodo == idTipoPeriodo);
            Hashtable result = new Hashtable();
            result["Periodos"] = vPeriodos.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCuotasCumplidas(int idgfx, int idProVta, int tipoPeriodo, int Periodo)
        {
            //para este getmany se debe de hacer diferente dependiendo del tipo de cuota (Limite o Minima)
            var Cuotascumplidas = _repPedidosProVta.GetMany(f => f.CD_DISTRIBUIDOR == idgfx && f.idProgramaVta == idProVta && f.id_TipoPeriodo == tipoPeriodo && f.id_Periodo == Periodo && f.UnidadesFaltantes <= 0);
            Hashtable result = new Hashtable();
            result["CuotaCumplida"] = Cuotascumplidas.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetCuotasNOCumplidas(int idgfx, int idProVta, int tipoPeriodo, int Periodo)
        {
            //para este getmany se debe de hacer diferente dependiendo del tipo de cuota (Limite o Minima)
            var Cuotascumplidas = _repPedidosProVta.GetMany(f => f.CD_DISTRIBUIDOR == idgfx && f.idProgramaVta == idProVta && f.id_TipoPeriodo == tipoPeriodo && f.id_Periodo == Periodo && f.UnidadesFaltantes > 0);
            Hashtable result = new Hashtable();
            result["CuotaNOCumplida"] = Cuotascumplidas.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }


    }
}
