﻿using SP.Controllers;
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
    
    
    /// <summary>
    ///This is a test class for CierreProVtaControllerTest and is intended
    ///to contain all CierreProVtaControllerTest Unit Tests
    ///</summary>
    [TestClass()]
    public class CierreProVtaControllerTest
    {


        private TestContext testContextInstance;
        JavaScriptSerializer serializer = new JavaScriptSerializer();

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion


        /// <summary>
        ///A test for GetPerxProVtaxDist
        ///</summary>
        // TODO: Ensure that the UrlToTest attribute specifies a URL to an ASP.NET page (for example,
        // http://.../Default.aspx). This is necessary for the unit test to be executed on the web server,
        // whether you are testing a page, web service, or a WCF service.
        [TestMethod()]
        public void GetPerxProVtaxDistTest()
        {
            CierreProVtaController target = new CierreProVtaController(); // TODO: Initialize to an appropriate value
            //int idProVta = 1; // TODO: Initialize to an appropriate value
            //int idGfx = 936153; // TODO: Initialize to an appropriate value
            int idTipoPeriodo = 1;
            var result = target.GetPerxProVtaxDist(idTipoPeriodo);
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["Periodos"]);
            //  string rawResult = result.Data.ToString();
            List<Periodos> actual = serializer.Deserialize<List<Periodos>>(rawResult);
            actual.ShouldNotBeNull("no debe nulo");
            var expected = 1;
            Assert.AreEqual(expected, actual.Count, "Debe haber " + expected.ToString());
            
        }

        [TestMethod()]
        public void GetCuotasCumplidas()
        {
            CierreProVtaController target = new CierreProVtaController(); // TODO: Initialize to an appropriate value
            int idProVta = 1; // TODO: Initialize to an appropriate value
            int idGfx = 936153; // TODO: Initialize to an appropriate value
            var result = target.GetCuotasCumplidas(idGfx, idProVta, 1, 1);
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["CuotaCumplida"]);
            //  string rawResult = result.Data.ToString();
            List<Vw_PedidosCierreProVta> actual = serializer.Deserialize<List<Vw_PedidosCierreProVta>>(rawResult);
            actual.ShouldNotBeNull("no debe nulo");
            var expected = 1;
            Assert.AreEqual(expected, actual.Count, "Debe haber " + expected.ToString());

        }

        [TestMethod()]
        public void GetCuotasNOCumplidas()
        {
            CierreProVtaController target = new CierreProVtaController(); // TODO: Initialize to an appropriate value
            int idProVta = 1; // TODO: Initialize to an appropriate value
            int idGfx = 936153; // TODO: Initialize to an appropriate value
            var result = target.GetCuotasNOCumplidas(idGfx, idProVta, 1, 1);
            string rawResult = serializer.Serialize(((Hashtable)result.Data)["CuotaNOCumplida"]);
            //  string rawResult = result.Data.ToString();
            List<Vw_PedidosCierreProVta> actual = serializer.Deserialize<List<Vw_PedidosCierreProVta>>(rawResult);
            actual.ShouldNotBeNull("no debe nulo");
            var expected = 4;
            Assert.AreEqual(expected, actual.Count, "Debe haber " + expected.ToString());

        }

        [TestMethod()]
        public void Guardar_CierreVta()
        {
            CierreProVtaController target = new CierreProVtaController();
            Cierre_ProVta cpv = new Cierre_ProVta();
            cpv.id_CierrexProVta = 4;
            cpv.id_GFX = 936153;
            cpv.id_ProgramaVta= 1;
            cpv.id_tipoperiodo= 1;
            cpv.id_Periodo= 1;
            var actual = target.SaveCierreProVta(cpv);
            string rawResult = serializer.Serialize(actual.Data);
            var expected = "true";
            Assert.AreEqual(expected, rawResult, "Debe guardar");


        }
    }
}
