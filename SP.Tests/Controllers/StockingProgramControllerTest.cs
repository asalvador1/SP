using SP.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting.Web;
using SP.DomainModel;
using SP.DomainModel.Base;
using System.Web.Mvc;
using MvcContrib.TestHelper;
using System.Web.Script.Serialization;
using System.Collections.Generic;
using System.Collections;
namespace SP.Tests
{
    [TestClass()]
    public class StockingProgramControllerTest
    {
        TestControllerBuilder builder;
        StockingProgramController target;
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        [TestInitialize]
        public void StartUp()
        {
            builder = new TestControllerBuilder();
            target = new StockingProgramController();
            builder.InitializeController(target);

        }
        [TestMethod]
        public void Buscar_Activos()
        {
            var result = target.ListVigentes();
            Assert.IsNotNull(result, "Resultado no debe ser nulo, puede ser vacio");
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            //  string rawResult = result.Data.ToString();
            List<ProgramaVta> actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);
            actual.ShouldNotBeNull("no debe nulo");
            var expected = 1;
            Assert.AreEqual(expected, actual.Count, "Debe haber " + expected.ToString());
        }

        [TestMethod]
        public void ProbarGuardarMasterDEtails()
        {
            var actual = this.target.Guardar();
            var expected = 1;
            Assert.AreEqual(expected, actual, "Debe guardar");
        }

        [TestMethod]
        public void Guardar_StockingProgDetalleCuota()
        {
            //itmes
            List<ProgramaVtaDetalleCuota> Cuotas = new List<ProgramaVtaDetalleCuota>();
            for (int i = 1; i <= 10; i++)
            {
                ProgramaVtaDetalleCuota details = new ProgramaVtaDetalleCuota();
                details.id_Gfx = 1;
                details.id_clascorp = 1;
                details.id_TipoPeriodo = 1;
                details.id_Periodo = i;
                details.Tipo_cuota = "tipo";
                details.cuota = 110;
                details.id_PlazoComercial = 1;
                Cuotas.Add(details);
            }

            var actual = this.target.SaveStockingProgramDetalleCuota(Cuotas.ToArray(), 1);
            string rawResult = serializer.Serialize(actual.Data);
            var expected = "true";
            Assert.AreEqual(expected, rawResult, "Debe guardar");
        }

        [TestMethod]
        public void Buscar_con_filtros()
        {
            
            int id =0;
            string nombre = "";
            DateTime? fechaInicio = null;
            DateTime? fechaFin = null;

            var result = target.SearchByFilters(id, nombre, fechaInicio, fechaFin);
            Assert.IsNotNull(result, "Resultado no debe ser nulo, puede ser vacio");
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);            
            List<ProgramaVta> actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);

            var expected = 2;
            Assert.AreEqual(expected, actual.Count, "Busqueda sin filtros debe traer todos");

            id = 1;
            result = target.SearchByFilters(id, nombre, fechaInicio, fechaFin);
            rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);
            expected = 1;
            Assert.AreEqual(expected, actual.Count, "solo debe ser un elemento");

            nombre =  "Uno";
             id = 2;
            result = target.SearchByFilters(id, nombre, fechaInicio, fechaFin);
            rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);
            expected = 1;
            Assert.AreEqual(expected, actual.Count, "solo debe ser un elemento");

            fechaInicio = new DateTime(2011, 05, 25); //MAYOR A ESTE DIA
            nombre = "";
            id = 0;
            result = target.SearchByFilters(id, nombre, fechaInicio, fechaFin);
            rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);
            expected = 2;
            Assert.AreEqual(expected, actual.Count, "solo debe ser DOS elementoS");


            fechaInicio = new DateTime(2011, 05, 25); //MAYOR A ESTE DIA
            fechaFin = new DateTime(2011, 05, 26); // a este dia           
            result = target.SearchByFilters(id, nombre, fechaInicio, fechaFin);
            rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            actual = serializer.Deserialize<List<ProgramaVta>>(rawResult);
            expected = 1;
            Assert.AreEqual(expected, actual.Count, "solo debe ser DOS elementoS");
        }

    }
}
