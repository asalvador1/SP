using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SP.DomainModel;
using SP.DomainModel.Base;
using SP.DomainModel.Repositories;
using System.Collections;
using System.Transactions;
using System.Linq.Expressions;

namespace SP.Controllers
{
    public class CierreProVtaController : BaseController
    {
        #region fields
        ICierreProgramaVtaRepository _repCierre;
        Ivw_ProVtaDealerRepository _repPrVtaxDeal;
        IProgramaVtaDetalleCuota _repPrVtaDetxDeal;
        IPeriodoRepository _repPeriodos;
        ITipoPeriodosRepository _repTipoPeriodos;
        IVwPedidosCierreProVtaRepository _repPedidosProVta;
        ICierreProgramaVtaDetalleRepository _repCierreProVtaDEt;
        
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
            _repCierreProVtaDEt = new EntityCierreProgramaVtaDetalleRepository();
        }
        public CierreProVtaController(ICierreProgramaVtaRepository rep1, Ivw_ProVtaDealerRepository rep2, IProgramaVtaDetalleCuota rep3, IPeriodoRepository rep4, ITipoPeriodosRepository rep5, IVwPedidosCierreProVtaRepository rep6, ICierreProgramaVtaDetalleRepository rep7,IUnitOfWork db)
        {
            this._db = db;
            this._repCierre = rep1;
            this._repPrVtaxDeal = rep2;
            this._repPrVtaDetxDeal = rep3;
            this._repPeriodos = rep4;
            this._repTipoPeriodos = rep5;
            this._repPedidosProVta = rep6;
            this._repCierreProVtaDEt = rep7;
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

            var Tps = _repTipoPeriodos.GetMany(tps => arr.Contains(tps.id_TipoPeriodo) && tps.estatus == "Activo");
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

        public JsonResult SaveCierreProVta(Cierre_ProVta info)
        {
            //validaciones
            var val = _repCierre.Get(Cierre => Cierre.id_GFX == info.id_GFX && Cierre.id_ProgramaVta == info.id_ProgramaVta && Cierre.id_tipoperiodo == info.id_tipoperiodo && Cierre.id_Periodo == info.id_Periodo);
            
            if (val.id_Status_ProVta == 3)//suponiendo que es el tipo Cerrado
            {
                return
                   this.Json("{success:false,error:'Este Periodo ya esta cerrado para este Distribuidor.'}", JsonRequestBehavior.AllowGet);
            }
            //1.- Validar
            if (info.id_GFX ==null)
            {
                return
                    this.Json("{success:false,error:'Incluir GFX'}", JsonRequestBehavior.AllowGet);
            }

            if (info.id_ProgramaVta == null)
            {
                return
                   this.Json("{success:false,error:'Debe seleccionar un Programa de Venta'}", JsonRequestBehavior.AllowGet);
            }

            if (info.id_tipoperiodo == null)
            {
                return
                   this.Json("{success:false,error:'Debe seleccionar un Tipo de Periodo'}", JsonRequestBehavior.AllowGet);
            }

            if (info.id_Periodo== null)
            {
                return
                   this.Json("{success:false,error:'Debe seleccionar un Periodo'}", JsonRequestBehavior.AllowGet);
            }

            int status = 3; //realizar la funcionalidad para sacar el status, dependiendo si va a estar pendiente o cerrado
            //en este caso para esta funcion de cierre deberia de ser el id del estatus de cerrado
            
            try//SOLO PARA PRUEBAS en caso de que exista un usuario en tabla principal
            {
                string usuarioActual = this.CurrentUser;
            }
            catch
            {
                string usuarioActual = "yyyy368";
            }
            bool EsNuevo = false;
            if (info.id_CierrexProVta == 0)
            {
                //insert
                info.id_Status_ProVta = status; //rEVISAR QUE ESTATUS SERIA AL GRABAR UN CIERRE
                //info.USERmODIF = usuarioActual;//REVISAR SI SE VA A AGREGAR UN USUARIO DE MODIFICACION A LA TABLA PRINCIPAL
                info.fch_Modif = DateTime.Now;
                if (status==3)//se esta suponiendo que el estatus de cerrado es el 3
                    info.fch_Cierre = DateTime.Now;
                this._repCierre.Add(info);
                EsNuevo = true;
            }
            else
            {
                //update
                //info.cd_usuariomodif = usuarioActual;
                info.id_Status_ProVta = status;
                info.fch_Modif = DateTime.Now;
                if (status == 3)
                    info.fch_Cierre = DateTime.Now;
                this._repCierre.Update(info);
                EsNuevo = false;
            }
            try//revisar desde donde empieza el try
            {
                this._repCierre.SaveAllChanges();
                if (SaveCierreProVtaDetalle(EsNuevo,info.id_CierrexProVta,info.id_GFX, info.id_ProgramaVta, info.id_tipoperiodo, info.id_Periodo) == true)
                {
                    return this.Json("{success:true,id:" + info.id_CierrexProVta.ToString() + "}", JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return
                  this.Json("{success:false,error:'Error al guardar la información de Detalle'}", JsonRequestBehavior.AllowGet);
                }
            }
            catch
            {
                return
                  this.Json("{success:false,error:'Error al guardar la información'}", JsonRequestBehavior.AllowGet);
            }
        }

        public bool SaveCierreProVtaDetalle(bool esNuevo,int id_CierrexProVta,int idgfx, int idProVta, int tipoPeriodo, int Periodo)
        {
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {
                    var Cuotas = _repPedidosProVta.GetMany(f => f.CD_DISTRIBUIDOR == idgfx && f.idProgramaVta == idProVta && f.id_TipoPeriodo == tipoPeriodo && f.id_Periodo == Periodo);
                    string usuarioActual = "";
                    try//solo para pruebas
                    {
                        usuarioActual = this.CurrentUser;
                    }
                    catch
                    {
                        usuarioActual = "yyyy368";
                    }
                    
                    int i = 0;
                    Cierre_ProgramaVta_Detalle cpvd;
                    foreach (var item in Cuotas)
                    {
                        cpvd = new Cierre_ProgramaVta_Detalle();
                        cpvd.id_cierreProVta = id_CierrexProVta;
                        cpvd.Cierre_ProVta_id_GFX= item.CD_DISTRIBUIDOR;
                        cpvd.Cierre_ProVta_id_ProgramaVta = item.idProgramaVta;
                        cpvd.Cierre_ProVta_id_tipoperiodo= item.id_TipoPeriodo;
                        cpvd.Cierre_ProVta_id_Periodo = item.id_Periodo;
                        cpvd.id_ClasCorp = item.idClasCorp;
                        cpvd.Cuota_ProVta = item.cuota;
                        cpvd.UnidadesPedidas = int.Parse(item.UnidadesPedidas.ToString());
                        //cpvd.NumPedido_comp = numPedido;//REVISAR PARA ELININAR CAMPO
                        cpvd.userModif = usuarioActual;
                        if (esNuevo == true)
                            _repCierreProVtaDEt.Add(cpvd);
                        else
                            _repCierreProVtaDEt.Update(cpvd);
                    }
                    this._repCierreProVtaDEt.SaveAllChanges();
                    scope.Complete();
                }
                return true;
            }
            catch
            {
                return false;
            }

        }

        //faltan
        public JsonResult SaveCierreCuotaNOCumplida(int idgfx, int idProVta, int tipoPeriodo, int Periodo)
        {
            //falta hacer esta funcion, en donde regrese los pedidos a SPA original en donde no cumplio la cuota
            return this.Json("{success:true}", JsonRequestBehavior.AllowGet);
        }

        public JsonResult SavePedidotoClassCorp(int idgfx, int idProVta, int tipoPeriodo, int Periodo)
        {
            //falta hacer esta funcion, en donde guarde la indformacion o valide que el pedido para aplicar en el programa sea correcto
            return this.Json("{success:true}", JsonRequestBehavior.AllowGet);
        }
    }
}
