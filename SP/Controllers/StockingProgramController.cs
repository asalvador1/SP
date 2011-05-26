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

namespace SP.Controllers
{
    public class StockingProgramController : BaseController
    {
        #region fields
        IProgramaVtaRepository _repProgVta;
        IProgramaVtaDetalleCuota _repDetCouta;
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
            var query = /*this._repProgVta.GetMany(f => f.estatus == "1" &&
                current <= f.fch_caducidad);*/ this._repProgVta.GetAll();
            
            Hashtable result = new Hashtable();
            result["Rows"] = query.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }



        /// <summary>
        /// Crea o actualiza un registro header de programa de ventas
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        public JsonResult SaveStockingProgram(ProgramaVta info)
        {
            //string error = "{success:false,error:'El origen y el destino no puede ser el mismo,corrija la informacion'}";
            // RenderText("{success:true, id_traslado:" + restraslado.ToString() +
            //1.- Validar
            if (String.IsNullOrEmpty(info.nombre))
            {
                return 
                    this.Json("{success:false,error:'Incluir nombre'}", JsonRequestBehavior.AllowGet);
            }

            if (info.fch_caducidad == null)
            {
                return
                   this.Json("{success:false,error:'Debe seleccionar uan fecha de vigencia'}", JsonRequestBehavior.AllowGet);
            }

            string usuarioActual = this.CurrentUser;
            if (info.idProgramaVta == 0)
            {
                //insert
                info.estatus = "0"; //tentativo para nuevos registros
                info.cd_usuarioalta = usuarioActual;
                info.fch_alta = DateTime.Now;
                this._repProgVta.Add(info);
            }
            else
            {
                //update
                info.cd_usuariomodif = usuarioActual;
                info.fch_modif = DateTime.Now;
                this._repProgVta.Update(info);
            }
            this._db.SaveAllChanges();
            return
                  this.Json("{success:true,id:" + info.idProgramaVta.ToString() + "}", JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// Obtener un registro de programa de venta nuevo, o existente para ser mostrado en vista
        /// </summary>
        /// <param name="id_ProgramaVta"></param>
        /// <returns></returns>
        public ViewResult panelProgramaVtaHeader(int id_ProgramaVta = 0)
        {
            ProgramaVta vta;
            if (id_ProgramaVta > 0)            
                vta = _repProgVta.GetById(id_ProgramaVta);            
            else
                vta = new ProgramaVta();
            //ViewData["model"] = vta;
            vta.nombre = "adan";
            string data = this.Json(vta, JsonRequestBehavior.AllowGet).Data.ToString();
            ViewData["model"] = data;
            return this.View(vta);
        }

        /// <summary>
        /// Crea los registros de Programa de ventas para la configuracion de cuotas a nivel clasif corp
        /// </summary>
        /// <param name="items"></param>
        /// <param name="id_progVta"></param>
        /// <returns></returns>
        public JsonResult SaveStockingProgramDetalleCuota(ProgramaVtaDetalleCuota[] items, int id_progVta)
        {
            //Validar...
            
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {

                    //Borrar posible informacion existente para fines practicos
                    var actual = _repDetCouta.GetMany(prog => prog.idProgramaVta == id_progVta).ToList();
                    if (actual != null && actual.Count > 0)
                    {
                        _repDetCouta.Delete(prog => prog.idProgramaVta == id_progVta);
                    }
                    //guardar la informacion
                    foreach (var item in items)
                    {
                        item.idProgramaVta = id_progVta;
                        _repDetCouta.Add(item);
                    }
                    this._db.SaveAllChanges();
                    scope.Complete();
                }
                return this.Json("{success:true}");
            }
            catch (ApplicationException ex)
            {
                return
                  this.Json("{success:false,error:'Error al guardar la información'}", JsonRequestBehavior.AllowGet);
            }
        }



        public JsonResult ListPeriodosPrueba()
        {
            DataBaseFactory dbf = new DataBaseFactory();
            EntityPeriodoRepository per = new EntityPeriodoRepository(dbf);
            var query = per.GetAll();
            Hashtable result = new Hashtable();
            result["Rows"] = query.ToList();
            return this.Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}
