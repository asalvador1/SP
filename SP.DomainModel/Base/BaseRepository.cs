using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;
using System.Data.Entity;
using System.Data;
using SP.DomainModel.Base;


namespace SP.DomainModel
{
    public class BaseRepository<T> where T: BaseModel
    {
        #region contexto
        private SPContext _context;
        private readonly IDbSet<T> dbset;
        public BaseRepository(IDatabaseFactory databaseFactory)
        {
            DatabaseFactory = databaseFactory;
            dbset = DataContext.Set<T>();           
        }
        protected IDatabaseFactory DatabaseFactory
        {
            get;
            private set;
        }

        protected SPContext DataContext
        {
            get { return _context ?? (_context = DatabaseFactory.Get()); }
        }

        #endregion

        #region funcionalidad compartida
        public  void Add(T entity)
        {
            dbset.Add(entity);
        }
        public  void Update(T entity)
        {
            dbset.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }
        public  void Delete(T entity)
        {
            dbset.Remove(entity);
        }
        public  void Delete(Expression<Func<T, bool>> where)
        {
            IEnumerable<T> objects = dbset.Where<T>(where).AsEnumerable();
            foreach (T obj in objects)
                dbset.Remove(obj);
        }
        public  T GetById(long id)
        {
            return dbset.Find(id);
        }
        public  T GetById(string id)
        {
            return dbset.Find(id);
        }
        public  IEnumerable<T> GetAll()
        {
           return dbset.ToList();
        }
        public IQueryable<T> GetMany2(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where);
        }
        public  IEnumerable<T> GetMany(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where).ToList();
        }
        public T Get(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where).FirstOrDefault<T>();
        }

        /// <summary>
        /// Persistir en BD
        /// </summary>
        public void SaveAllChanges()
        {
            this._context.SaveAllChanges();
        }
        #endregion
    }


}
