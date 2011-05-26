using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    public partial class Periodos:BaseModel
    {
        public Periodos()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
            this.ProgramaVtaDetalleCuota = new HashSet<ProgramaVtaDetalleCuota>();
        }

        public int id_TipoPeriodo { get; set; }
        public int id_periodo { get; set; }
        public string Descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<System.DateTime> fch_inicio { get; set; }
        public Nullable<System.DateTime> fch_fin { get; set; }

        public   ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
        public   Tipo_Periodos Tipo_Periodos { get; set; }
        public   ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuota { get; set; }
    }
}
