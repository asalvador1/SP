using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace SP.DomainModel
{
    public partial class PlazoComercial:BaseModel
    {
        public PlazoComercial()
        {
            this.ProgramaVtaDetalleCuota = new HashSet<ProgramaVtaDetalleCuota>();
            this.ProgramaVtaDetalleSPA = new HashSet<ProgramaVtaDetalleSPA>();
        }

        public int id_PlazoComercial { get; set; }
        public string descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_USD { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_NMX { get; set; }

        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuota { get; set; }
        public virtual ICollection<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPA { get; set; }
    }
}
