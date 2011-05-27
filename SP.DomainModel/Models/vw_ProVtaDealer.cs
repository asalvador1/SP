using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace SP.DomainModel
{
    public partial class vw_ProVtaDealer:BaseModel
    {
        public int idProgramaVta { get; set; }
        public string nombre { get; set; }
        public int id_Gfx { get; set; }
    }
}
