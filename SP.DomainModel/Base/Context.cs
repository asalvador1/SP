using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Objects;
    
namespace SP.DomainModel.Base
{
    public class SPContext: DbContext
    {
        public DbSet<ProgramaVta> ProgramaVtas { get; set; }
        public DbSet<vwProgramaVta> vwProgramaVtas { get; set; }
        public DbSet<Cierre_ProgramaVta_Detalle> Cierre_ProgramaVta_Detalle { get; set; }
        public DbSet<Cierre_ProVta> Cierre_ProVta { get; set; }
        public DbSet<Estatus_ProVta> Estatus_ProVta { get; set; }
        public DbSet<Periodo> Periodos { get; set; }
        public DbSet<PlazoComercial> PlazoComercials { get; set; }
        public DbSet<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuotas { get; set; }
        public DbSet<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPAs { get; set; }
        public DbSet<Tipo_Periodos> Tipo_Periodos { get; set; }

        public virtual void SaveAllChanges()
        {
            base.SaveChanges();
        }

          protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
           modelBuilder.Entity<ProgramaVta>().HasKey(k => k.idProgramaVta);
              
        }
          public virtual ObjectResult<GetAllWithSP_Result> GetAllWithSP()
          {
              ((IObjectContextAdapter)this).ObjectContext.MetadataWorkspace.LoadFromAssembly(typeof(GetAllWithSP_Result).Assembly);

              return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<GetAllWithSP_Result>("GetAllWithSP");
          }

          public virtual ObjectResult<Nullable<int>> SP_UpdateNada(Nullable<int> id)
          {
              var idParameter = id.HasValue ?
                  new ObjectParameter("id", id) :
                  new ObjectParameter("id", typeof(int));

              return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("SP_UpdateNada", idParameter);
          }
    }
}
