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
        public void ListPeriodos()
        {
            var result = target.ListPeriodosPrueba();
            Assert.IsNotNull(result, "Resultado no debe ser nulo, puede ser vacio");
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["Rows"]);
            //  string rawResult = result.Data.ToString();
            List<Periodos> actual = serializer.Deserialize<List<Periodos>>(rawResult);
            actual.ShouldNotBeNull("no debe nulo");
            var expected = 1;
            Assert.AreEqual(expected, actual.Count, "Debe haber " + expected.ToString());

            Assert.AreEqual(1, actual[0].ProgramaVtaDetalleCuota.Count, "no debe haber cuotas");
        }
    
    }
}
