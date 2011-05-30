using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    public partial class Estatus_ProVta:BaseModel
    {
        public Estatus_ProVta()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
        }
    
        public int idStatus { get; set; }
        public string Descripcion { get; set; }
        public Nullable<System.DateTime> fhc_modif { get; set; }
        public string usermodif { get; set; }
    
        public  ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
    }
}
