using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PruebaMvcExt.Models
{
    public class Modelo
    {
        public Modelo()
        {
        }
        public Modelo(Modelo m)
        {
            this.ClasifLocal = m.ClasifLocal;
            this.Familia = m.Familia;
            this.Modelo7 = m.Modelo7;
            this.ModeloDescripcion = m.ModeloDescripcion;
            this.ClasifUsa = m.ClasifUsa;
            this.Incentivos = m.Incentivos;
            this.SPABase = m.SPABase;
            this.SPAProgramacionInventario = m.SPAProgramacionInventario;
        }
        public string ClasifLocal { get; set; }
        public string Familia { get; set; }
        public string Modelo7 { get; set; }
        public string ModeloDescripcion { get; set; }
        public string ClasifUsa { get; set; }
        public ProgramaConceptos Incentivos
        {
            get;
            set;
        }
        public string SPABase { get; set; }
        public string SPAProgramacionInventario { get; set; }

        public Dealer DealerAsociado
        {
            get;
            set;
        }
    }

    public class ProgramaConceptos
    {
        public string DescuentoSobreBase
        { get; set; }
        public string PlazoComercial { get; set; }
    }


    public class Dealer
    {
        public string GFX
        { get; set; }
        public string Descripcion
        { get; set; }
        //public List<Modelo> ModelosAsociados
        //{ get; set; }
    }

    public class ClasificacionCorp : Modelo
    {
        public ClasificacionCorp()
        {
        }
        public  ClasificacionCorp(ClasificacionCorp c)
        {
            this.Incentivos = c.Incentivos;
            this.SPABase = c.SPABase;
            this.SPAProgramacionInventario = c.SPAProgramacionInventario;
            this.Text = c.Text;
        }
        
        public string Text
        {
            get;
            set;
        }
    }
}
