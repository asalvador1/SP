using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
    
namespace SP.DomainModel.Base
{
    public class SPContext: DbContext
    {
        public DbSet<ProgramaVta> ProgramaVtas { get; set; }
        public DbSet<vwProgramaVta> vwProgramaVtas { get; set; }

        public virtual void SaveAllChanges()
        {
            base.SaveChanges();
        }

          protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
           modelBuilder.Entity<ProgramaVta>().HasKey(k => k.idProgramaVta);
              
        }    
    }
}
