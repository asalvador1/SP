using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class Entityvw_ProVtaDealerRepository : BaseRepository<vw_ProVtaDealer>, Ivw_ProVtaDealerRepository
    {
        public Entityvw_ProVtaDealerRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        public Entityvw_ProVtaDealerRepository()
            :base(new DataBaseFactory())
        {
        }
    }
}
