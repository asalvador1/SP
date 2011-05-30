using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityCierreProgramaVtaRepository : BaseRepository<Cierre_ProVta>, ICierreProgramaVtaRepository
    {
        public EntityCierreProgramaVtaRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        public EntityCierreProgramaVtaRepository()
            :base (new DataBaseFactory())
        {
        }

        /// <summary>
        /// Obtiene otra informacion
        /// </summary>
        /// <returns></returns>
        public IList<Cierre_ProVta> GetOtherInfo()
        {
            throw new NotImplementedException();
        }

        public IList<VCDMC_Distribuidor> GetDealers()
        {
            return base.DataContext.VCDMC_Distribuidor.ToList();
        }


}
}
