using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Generador
{
    public partial class ProgramaVta: BaseModel
    {
       // [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public ProgramaVta()
        {
            this.ProgramaVtaDetalleCuotas = new HashSet<ProgramaVtaDetalleCuota>();
            this.ProgramaVtaDetalleSPAs = new HashSet<ProgramaVtaDetalleSPA>();
        }

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
        //No virtual, se deshabilita el lazy loading => facil de serializar en json
        public  ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
        public  ICollection<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPAs { get; set; }
    }

    
    public partial class vwProgramaVta: BaseModel
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


    public partial class ProgramaVtaDetalleSPA
    {
        public int idProgramaVta { get; set; }
        public int id_Gfx { get; set; }
        public Nullable<int> id_clascorp { get; set; }
        public Nullable<int> id_modelo { get; set; }
        public Nullable<int> id_serie { get; set; }
        public Nullable<double> SPA_base { get; set; }
        public Nullable<double> SPA_Prog { get; set; }
        public int id_PlazoComercial { get; set; }

        public virtual PlazoComercial PlazoComercial { get; set; }
        public virtual ProgramaVta ProgramaVta { get; set; }
    }

    public partial class ProgramaVtaDetalleCuota
    {
        public int idProgramaVta { get; set; }
        public int id_Gfx { get; set; }
        public Nullable<int> id_clascorp { get; set; }
        public int id_TipoPeriodo { get; set; }
        public int id_Periodo { get; set; }
        public string Tipo_cuota { get; set; }
        public Nullable<int> cuota { get; set; }
        public int id_PlazoComercial { get; set; }

        public virtual Periodo Periodo { get; set; }
        public virtual PlazoComercial PlazoComercial { get; set; }
        public virtual ProgramaVta ProgramaVta { get; set; }
    }

    public partial class PlazoComercial
    {
        public PlazoComercial()
        {
            this.ProgramaVtaDetalleCuotas = new HashSet<ProgramaVtaDetalleCuota>();
            this.ProgramaVtaDetalleSPAs = new HashSet<ProgramaVtaDetalleSPA>();
        }

        public int id_PlazoComercial { get; set; }
        public string descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_USD { get; set; }
        public Nullable<double> Porcentaje_Sustitucion_NMX { get; set; }

        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
        public virtual ICollection<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPAs { get; set; }
    }

    public partial class Periodo
    {
        public Periodo()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
            this.ProgramaVtaDetalleCuotas = new HashSet<ProgramaVtaDetalleCuota>();
        }

        public int id_TipoPeriodo { get; set; }
        public int id_periodo { get; set; }
        public string Descripcion { get; set; }
        public string estatus { get; set; }
        public Nullable<System.DateTime> fch_inicio { get; set; }
        public Nullable<System.DateTime> fch_fin { get; set; }

        public virtual ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
        public virtual Tipo_Periodos Tipo_Periodos { get; set; }
        public virtual ICollection<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
    }

    public partial class Cierre_ProVta
    {
        public int id_CierrexProVta { get; set; }
        public Nullable<int> id_GFX { get; set; }
        public Nullable<int> id_ProgramaVta { get; set; }
        public int id_tipoperiodo { get; set; }
        public int id_Periodo { get; set; }
        public int id_Status_ProVta { get; set; }
        public Nullable<System.DateTime> fch_Modif { get; set; }
        public Nullable<System.DateTime> fch_Cierre { get; set; }

        public virtual Cierre_ProgramaVta_Detalle Cierre_ProgramaVta_Detalle { get; set; }
        public virtual Estatus_ProVta Estatus_ProVta { get; set; }
        public virtual Periodo Periodo { get; set; }
    }

    public partial class Estatus_ProVta
    {
        public Estatus_ProVta()
        {
            this.Cierre_ProVta = new HashSet<Cierre_ProVta>();
        }

        public int idStatus { get; set; }
        public string Descripcion { get; set; }
        public Nullable<System.DateTime> fhc_modif { get; set; }
        public string usermodif { get; set; }

        public virtual ICollection<Cierre_ProVta> Cierre_ProVta { get; set; }
    }

    public partial class Tipo_Periodos
    {
        public Tipo_Periodos()
        {
            this.Periodos = new HashSet<Periodo>();
        }

        public int id_TipoPeriodo { get; set; }
        public string descipcion { get; set; }
        public string estatus { get; set; }

        public virtual ICollection<Periodo> Periodos { get; set; }
    }

    public partial class Cierre_ProgramaVta_Detalle
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
