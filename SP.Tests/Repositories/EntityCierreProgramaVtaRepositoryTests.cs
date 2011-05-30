using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SP.DomainModel;
using SP.DomainModel.Repositories;
using SP.DomainModel.Base;
using System.Data.Entity.Validation;


namespace SP.Tests
{
    [TestClass]
    public class EntityCierreProgramaVtaRepositoryTests
    {
        ICierreProgramaVtaRepository _repcierre;
        Ivw_ProVtaDealerRepository _repPrVtaxDeal;
        IProgramaVtaDetalleCuota _repPrVtaDetxDeal;
        IPeriodoRepository _repPeriodos;
        ITipoPeriodosRepository _repTipoPeriodos;
        IUnitOfWork _db;
        [TestInitialize()]
        public void Inicializar()
        {
            //Probar con SQL
            DataBaseFactory dbf = new DataBaseFactory();
            _db= new UnitOfWork(dbf);
            _repcierre = new EntityCierreProgramaVtaRepository();
            _repPrVtaxDeal = new Entityvw_ProVtaDealerRepository();
            _repPrVtaDetxDeal = new EntityProgramaVtaDetalleCuotaRepository();
            _repPeriodos = new EntityPeriodoRepository();
            _repTipoPeriodos = new EntityTipoPeriodoRepository();
        }

        [TestMethod]
        public void ObtenerDistribuidores()
        {
            var actual = _repcierre.GetDealers().ToList();
            int expected = 21;
            Assert.IsNotNull(actual);
            Assert.AreEqual(expected, actual.Count, "Debe ser igual a " + expected.ToString());
        }

        [TestMethod]
        public void ObtenerProgramasdeventaxDistribuidor()
        {
            var actual = _repPrVtaxDeal.GetMany(f => f.id_Gfx == 000900);
            int expected = 0;
            Assert.IsNotNull(actual);
            Assert.AreEqual(expected, actual.Count(), "Debe ser igual a " + expected.ToString());
        }

         [TestMethod]
        public void ObtenerPeriodosxProgramasdeventaxDistribuidor()
        {
             int idProVta = 1;
             int idgfx = 9000001;
             
             var TipoPeriodo = _repPrVtaDetxDeal.Get(f => f.idProgramaVta == idProVta && f.id_Gfx == idgfx);
             var Periodos = _repPeriodos.GetMany(f => f.id_TipoPeriodo == TipoPeriodo.id_TipoPeriodo);
            int expected = 5;
            Assert.IsNotNull(Periodos);
            Assert.AreEqual(expected, Periodos.Count(), "Debe ser igual a " + expected.ToString());
        }
        
        [TestMethod]
        public void LlenarTiposdePeriodo()
        {
            for (int i = 1; i <= 5; i++)
            {
                Tipo_Periodos Tper = new Tipo_Periodos
                {
                    //idProgramaVta = 1,
                    descipcion = "Tipo " + i.ToString(),
                    estatus = "Activo"
                };
                _repTipoPeriodos.Add(Tper);
            }
            var succes = false;
            try
            {
                _db.SaveAllChanges();
                succes = true;
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        //Trace.TraceInformation("Property: {0} Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }

            }

            Assert.AreEqual(true, succes, "Proceso debe guardar informacion");
        }

        [TestMethod]
        public void LlenarPeriodos()
        {
            for (int i = 1; i <= 5; i++)
            {
                Periodos per = new Periodos
                {
                    //idProgramaVta = 1,
                    id_TipoPeriodo=1,
                    Descripcion = "Periodo " + i.ToString(),
                    estatus = "Activo",
                    fch_inicio = DateTime.Now,
                    fch_fin = DateTime.Now.AddMonths(3)
                };
                _repPeriodos.Add(per);
            }
            var succes = false;
            try
            {
                _db.SaveAllChanges();
                succes = true;
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        //Trace.TraceInformation("Property: {0} Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                    }
                }

            }

            Assert.AreEqual(true, succes, "Proceso debe guardar informacion");
        }
        
        
       

    }
}
