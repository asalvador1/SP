using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    public partial class Tipo_Periodos:BaseModel
    {
        public Tipo_Periodos()
        {
            this.Periodos = new HashSet<Periodos>();
        }

        public int id_TipoPeriodo { get; set; }
        public string descipcion { get; set; }
        public string estatus { get; set; }

        public ICollection<Periodos> Periodos { get; set; }
    }
}
