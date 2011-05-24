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
            this.ProgramaVtaDetalleCuotas = new HashSet<ProgramaVtaDetalleCuota>();
            this.ProgramaVtaDetalleSPAs = new HashSet<ProgramaVtaDetalleSPA>();
        }
    
        public int id_PlazoComercial { get; set; }
        public string descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_USD { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_NMX { get; set; }
    
        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
        public virtual ICollection<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPAs { get; set; }
    }
}
