//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Generador
{
    using System;
    using System.Collections.Generic;
    
    public partial class Vw_PedidosCierreProVta
    {
        public int CD_DISTRIBUIDOR { get; set; }
        public int idProgramaVta { get; set; }
        public int id_TipoPeriodo { get; set; }
        public int id_Periodo { get; set; }
        public int idClasCorp { get; set; }
        public string cveClasCorp { get; set; }
        public Nullable<decimal> UnidadesPedidas { get; set; }
        public Nullable<int> cuota { get; set; }
        public Nullable<decimal> UnidadesFaltantes { get; set; }
        public string Tipo_cuota { get; set; }
    }
}
