using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace SP.DomainModel
{
     
    public partial class VCDMC_Distribuidor
    {
        public int cd_empresa { get; set; }
        public int cd_marca { get; set; }
        public int cd_distribuidor { get; set; }
        public string nb_razonsocial { get; set; }
        public string nb_alias { get; set; }
        public string tx_rfc { get; set; }
    }
}
