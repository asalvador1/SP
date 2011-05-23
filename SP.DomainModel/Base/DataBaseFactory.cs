using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SP.DomainModel.Base
{
    public class Disposable : IDisposable
    {
        private bool isDisposed;

        ~Disposable()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        private void Dispose(bool disposing)
        {
            if (!isDisposed && disposing)
            {
                DisposeCore();
            }

            isDisposed = true;
        }

        protected virtual void DisposeCore()
        {
        }
    }

    public interface IDatabaseFactory : IDisposable
    {
        SPContext Get();
    }
    
    public class DataBaseFactory: Disposable, IDatabaseFactory
    {
        protected SPContext _context;
        public SPContext Get()
        {
            return _context ?? (_context = new SPContext());
        }
        protected override void DisposeCore()
        {
            if (_context != null)
                _context.Dispose();
        }
    }
}
