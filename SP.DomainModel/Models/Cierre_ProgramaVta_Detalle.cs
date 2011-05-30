using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{

    public partial class Cierre_ProgramaVta_Detalle:BaseModel
    {
        public int id_cierreProVta { get; set; }
        public int id_ClasCorp { get; set; }
        public Nullable<int> Cuota_ProVta { get; set; }
        public Nullable<int> UnidadesPedidas { get; set; }
        public string NumPedido_comp { get; set; }
        public string userModif { get; set; }
        public int Cierre_ProVta_id_GFX { get; set; }
        public int Cierre_ProVta_id_ProgramaVta { get; set; }
        public int Cierre_ProVta_id_tipoperiodo { get; set; }
        public int Cierre_ProVta_id_Periodo { get; set; }

        public  Cierre_ProVta Cierre_ProVta { get; set; }
    }
}
