using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityPeriodoRepository : BaseRepository<Periodos>, IPeriodoRepository
    {
        public EntityPeriodoRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }
    }
}
