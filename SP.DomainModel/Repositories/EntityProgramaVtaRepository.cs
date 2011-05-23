using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityProgramaVtaRepository : BaseRepository<ProgramaVta>, IProgramaVtaRepository
    {
        public EntityProgramaVtaRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        /// <summary>
        /// Obtiene otra informacion
        /// </summary>
        /// <returns></returns>
        public IList<ProgramaVta> GetOtherInfo()
        {
            throw new NotImplementedException();
        }
    }
}
