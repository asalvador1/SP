﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Objects;
    
namespace SP.DomainModel.Base
{
    public class SPContext: DbContext
    {
        public DbSet<Cierre_ProgramaVta_Detalle> Cierre_ProgramaVta_Detalle { get; set; }
        public DbSet<Cierre_ProVta> Cierre_ProVta { get; set; }
        public DbSet<Estatus_ProVta> Estatus_ProVta { get; set; }
        public DbSet<Periodos> Periodos { get; set; }
        public DbSet<PlazoComercial> PlazoComercial { get; set; }
        public DbSet<ProgramaVta> ProgramaVta { get; set; }
        public DbSet<ProgramaVtaDetalleCuota> ProgramaVtaDetalleCuota { get; set; }
        public DbSet<ProgramaVtaDetalleSPA> ProgramaVtaDetalleSPA { get; set; }
        public DbSet<Tipo_Periodos> Tipo_Periodos { get; set; }
        public DbSet<vwProgramaVta> vwProgramaVta { get; set; }
        public DbSet<VCDMC_Distribuidor> VCDMC_Distribuidor { get; set; }
        public DbSet<vw_ProVtaDealer> vw_ProVtaDealer { get; set; }
        public DbSet<Vw_PedidosCierreProVta> Vw_PedidosCierreProVta { get; set; }

        public virtual void SaveAllChanges()
        {
            base.SaveChanges();
        }

        public SPContext()
        {
            
            base.Configuration.LazyLoadingEnabled = false;                        
        }
          protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
           modelBuilder.Entity<ProgramaVta>().HasKey(k => k.idProgramaVta);
           //this.ContextOptions.LazyLoadingEnabled = false;
          
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

          public virtual ObjectResult<sp_GetProVtaxDealer_Result> sp_GetProVtaxDealer(Nullable<int> idDealer)
          {
              ((IObjectContextAdapter)this).ObjectContext.MetadataWorkspace.LoadFromAssembly(typeof(sp_GetProVtaxDealer_Result).Assembly);

              var idDealerParameter = idDealer.HasValue ?
                  new ObjectParameter("idDealer", idDealer) :
                  new ObjectParameter("idDealer", typeof(int));

              return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_GetProVtaxDealer_Result>("sp_GetProVtaxDealer", idDealerParameter);
          }
    }
}
