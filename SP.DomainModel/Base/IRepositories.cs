using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;

namespace SP.DomainModel
{
    #region Base
    public interface IGeneralRepository<T>
    {
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Delete(Expression<Func<T, bool>> where);
        T GetById(long Id);
        T GetById(string Id);
        T Get(Expression<Func<T, bool>> where);
        IEnumerable<T> GetAll();
        IEnumerable<T> GetMany(Expression<Func<T, bool>> where);    
    }
    public interface IGeneralReadOnlyRepository<T>
    {
        T GetById(long Id);
        T GetById(string Id);
        T Get(Expression<Func<T, bool>> where);
        IEnumerable<T> GetAll();
        IEnumerable<T> GetMany(Expression<Func<T, bool>> where);    
    }
    #endregion

    #region ProgramaVta
    public interface IProgramaVtaRepository : IGeneralRepository<ProgramaVta>
    {
        IList<ProgramaVta> GetOtherInfo();        
    }
    #endregion
    
}
