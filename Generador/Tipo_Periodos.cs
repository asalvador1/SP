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
    
    public partial class Tipo_Periodos
    {
        public Tipo_Periodos()
        {
            this.Periodos = new HashSet<Periodo>();
        }
    
        public int id_TipoPeriodo { get; set; }
        public string descipcion { get; set; }
        public string estatus { get; set; }
    
        public virtual ICollection<Periodo> Periodos { get; set; }
    }
}
