using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel
{
    public partial class vwProgramaVta:BaseModel
    {
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
    }
}
