using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using SP.DomainModel.Base;

namespace SP.DomainModel.Repositories
{
    public class EntityProgramaVtaDetalleCuotaRepository: BaseRepository<ProgramaVtaDetalleCuota>, IProgramaVtaDetalleCuota
    {
        public EntityProgramaVtaDetalleCuotaRepository(IDatabaseFactory databaseFactory)
            : base(databaseFactory)
        {
        }
    }
}
