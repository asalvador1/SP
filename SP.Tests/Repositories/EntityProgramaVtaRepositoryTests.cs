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
    public class EntityProgramaVtaRepositoryTests
    {
        IProgramaVtaRepository _rep;
        IUnitOfWork _db;
        [TestInitialize()]
        public void Inicializar()
        {
            //Probar con SQL
            DataBaseFactory dbf = new DataBaseFactory();
            _db= new UnitOfWork(dbf);
            _rep = new EntityProgramaVtaRepository(dbf);
        }
        
        [TestMethod]
        public void ConsultarProgramasDeVentas()
        {
            var actual = _rep.GetAll().ToList();
            int expected = 1000;
            Assert.IsNotNull(actual);
            Assert.AreEqual(expected, actual.Count, "Debe ser igual a " + expected.ToString());            
        }

        [TestMethod]
        public void SaveProgramaVentas()
        {
            
            for (int i = 1; i <= 1; i++)
            {
                ProgramaVta vta = new ProgramaVta
                {
                    //idProgramaVta = 1,
                    nombre = "Programa " + i.ToString(),
                    descripcion  = "programa " + i.ToString(),
                   fch_alta = DateTime.Now,
                   fch_caducidad = DateTime.Now.AddDays(30)
                };
                _rep.Add(vta);            
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
        public void DeleteProgramaVentas()
        {
            var actual = _rep.GetAll().ToList();
            bool result = false;
            int count = actual.Count;
            int i = 0;
            foreach (var s in actual)
            {
                _rep.Delete(s);
                i++;
            }
            _db.SaveAllChanges();

            Assert.AreEqual(i, count, "Proceso debe eliminar todos los registros");
        }

        [TestMethod]
        public void EjecutarConsultaAtravesDeStoredProcedure()
        {
            var actual = _rep.GetWithSp();
            Assert.IsNotNull(actual, "No debe ser nulo");
            Assert.AreNotEqual(0, actual.Count, "Debe traer resultados de la bd");
        }

        [TestMethod]
        public void ActualizarMedianteStoredProcedure()
        {
            var result = _rep.UpdateWithSP(1);
            Assert.AreNotEqual(0, result);
        }

        [TestMethod]
        public void VerificarRelacionesLazyloading()
        {
            var resul = _rep.GetById(1);
            Assert.IsNotNull(resul, "No debe ser nulo");

            Assert.IsNotNull(resul.ProgramaVtaDetalleCuota, "Debe ser nulo");
            var actual = 1;
            Assert.AreEqual(resul.ProgramaVtaDetalleCuota.Count, actual, "Hay " + actual);
        }
    }
}
