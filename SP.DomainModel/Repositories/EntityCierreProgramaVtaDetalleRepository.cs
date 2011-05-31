using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityCierreProgramaVtaDetalleRepository : BaseRepository<Cierre_ProgramaVta_Detalle>, ICierreProgramaVtaDetalleRepository
    {
        public EntityCierreProgramaVtaDetalleRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }

        public EntityCierreProgramaVtaDetalleRepository()
            :base (new DataBaseFactory())
        {
        }

        /// <summary>
        /// Obtiene otra informacion
        /// </summary>
        /// <returns></returns>
}
}
