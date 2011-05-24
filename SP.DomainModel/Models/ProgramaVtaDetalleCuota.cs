using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
  
    public partial class ProgramaVtaDetalleCuota:BaseModel
    {
        public int idProgramaVta { get; set; }
        public int id_Gfx { get; set; }
        public Nullable<int> id_clascorp { get; set; }
        public int id_TipoPeriodo { get; set; }
        public int id_Periodo { get; set; }
        public string Tipo_cuota { get; set; }
        public Nullable<int> cuota { get; set; }
        public int id_PlazoComercial { get; set; }
    
        public virtual Periodo Periodo { get; set; }
        public virtual PlazoComercial PlazoComercial { get; set; }
        public virtual ProgramaVta ProgramaVta { get; set; }
    }
}
