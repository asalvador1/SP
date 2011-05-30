using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityTipoPeriodoRepository : BaseRepository<Tipo_Periodos>, ITipoPeriodosRepository
    {
        public EntityTipoPeriodoRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        public EntityTipoPeriodoRepository()
            :base(new DataBaseFactory())
        {
        }
    }
}
