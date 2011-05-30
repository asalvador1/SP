using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace SP.DomainModel
{
    public partial class Vw_PedidosCierreProVta:BaseModel
    {
        public int CD_DISTRIBUIDOR { get; set; }
        public int idProgramaVta { get; set; }
        public int id_TipoPeriodo { get; set; }
        public int id_Periodo { get; set; }
        public int idClasCorp { get; set; }
        public string cveClasCorp { get; set; }
        public Nullable<decimal> UnidadesPedidas { get; set; }
        public Nullable<int> cuota { get; set; }
        public Nullable<decimal> UnidadesFaltantes { get; set; }
        public string Tipo_cuota { get; set; }
    }
}
