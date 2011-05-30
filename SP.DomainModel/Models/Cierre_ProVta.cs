using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
   
    public partial class Cierre_ProVta:BaseModel
    {
        public int id_CierrexProVta { get; set; }
        public int id_GFX { get; set; }
        public int id_ProgramaVta { get; set; }
        public int id_tipoperiodo { get; set; }
        public int id_Periodo { get; set; }
        public int id_Status_ProVta { get; set; }
        public Nullable<System.DateTime> fch_Modif { get; set; }
        public Nullable<System.DateTime> fch_Cierre { get; set; }

        public  ICollection<Cierre_ProgramaVta_Detalle> Cierre_ProgramaVta_Detalle { get; set; }
        public  Estatus_ProVta Estatus_ProVta { get; set; }
        public  Periodos Periodos { get; set; }
        public  ProgramaVta ProgramaVta { get; set; }
    }
}
