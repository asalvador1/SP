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
    
        public virtual Cierre_ProVta Cierre_ProVta { get; set; }
    }
}
