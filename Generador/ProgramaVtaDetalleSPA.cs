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
    
    public partial class ProgramaVtaDetalleSPA
    {
        public int idProgramaVta { get; set; }
        public int id_Gfx { get; set; }
        public Nullable<int> id_clascorp { get; set; }
        public Nullable<int> id_modelo { get; set; }
        public Nullable<int> id_serie { get; set; }
        public Nullable<double> SPA_base { get; set; }
        public Nullable<double> SPA_Prog { get; set; }
        public int id_PlazoComercial { get; set; }
    
        public virtual PlazoComercial PlazoComercial { get; set; }
        public virtual ProgramaVta ProgramaVta { get; set; }
    }
}
