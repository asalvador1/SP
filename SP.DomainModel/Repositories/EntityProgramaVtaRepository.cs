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
        
        public EntityProgramaVtaRepository()
            : base(new DataBaseFactory())
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

        public IList<GetAllWithSP_Result>  GetWithSp()
        {
            return base.DataContext.GetAllWithSP().ToList();
        }

        public int? UpdateWithSP(int? id)
        {
            var execute = base.DataContext.SP_UpdateNada(id);
            return execute.FirstOrDefault();
        }

        
}
}
