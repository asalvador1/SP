using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel.Base
{
    public interface IUnitOfWork
    {
        void SaveAllChanges();
    }

    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseFactory databaseFactory;
        private SPContext dataContext;

        public UnitOfWork(IDatabaseFactory databaseFactory)
        {
            this.databaseFactory = databaseFactory;
        }

        protected SPContext DataContext
        {
            get { return dataContext ?? (dataContext = databaseFactory.Get()); }
        }

        public void SaveAllChanges()
        {
            DataContext.SaveAllChanges();
        }
    }
}
