using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    
    public partial class ProgramaVta:BaseModel
    {
        public ProgramaVta()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
            this.ProgramaVtaDetalleCuota = new HashSet<ProgramaVtaDetalleCuota>();
            this.ProgramaVtaDetalleSPA = new HashSet<ProgramaVtaDetalleSPA>();
        }

        public int idProgramaVta { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<System.DateTime> fch_publicacion { get; set; }
        public string cd_usuarioalta { get; set; }
        public Nullable<System.DateTime> fch_alta { get; set; }
        public string cd_usuariomodif { get; set; }
        public Nullable<System.DateTime> fch_modif { get; set; }
        public Nullable<System.DateTime> fch_caducidad { get; set; }

        public virtual ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuota { get; set; }
        public virtual ICollection<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPA { get; set; }
    }
}
