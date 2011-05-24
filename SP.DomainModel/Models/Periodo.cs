using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    public partial class Periodo:BaseModel
    {
        public Periodo()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
            this.ProgramaVtaDetalleCuotas = new HashSet<ProgramaVtaDetalleCuota>();
        }
    
        public int id_TipoPeriodo { get; set; }
        public int id_periodo { get; set; }
        public string Descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<System.DateTime> fch_inicio { get; set; }
        public Nullable<System.DateTime> fch_fin { get; set; }
    
        public virtual ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
        public virtual Tipo_Periodos Tipo_Periodos { get; set; }
        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
    }
}
