using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace SP.DomainModel
{
    public partial class ProgramaVtaDetalleSPA:BaseModel
    {
        public int idProgramaVta { get; set; }
        public int id_Gfx { get; set; }
        public int id_clascorp { get; set; }
        public int id_modelo { get; set; }
        public Nullable<int> id_serie { get; set; }
        public Nullable<double> SPA_base { get; set; }
        public Nullable<double> SPA_Prog { get; set; }
        public int id_PlazoComercial { get; set; }

        public  PlazoComercial PlazoComercial { get; set; }
        public  ProgramaVta ProgramaVta { get; set; }
    }
}
