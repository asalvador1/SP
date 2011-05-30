using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityVwPedidosCierreProVtaRepository : BaseRepository<Vw_PedidosCierreProVta>, IVwPedidosCierreProVtaRepository
    {
        public EntityVwPedidosCierreProVtaRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        public EntityVwPedidosCierreProVtaRepository()
            :base(new DataBaseFactory())
        {
        }

        //public IList<Vw_PedidosCierreProVta> GetOtherInfo()
        //{
        //    throw new NotImplementedException();
        //}

    }
}
