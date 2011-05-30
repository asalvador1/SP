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
        IQueryable<T> GetMany2(Expression<Func<T, bool>> where);
        void SaveAllChanges();
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
        IList<GetAllWithSP_Result> GetWithSp();
        int? UpdateWithSP(int? id);
    }
    #endregion

    #region CierreProgramaVta
    public interface ICierreProgramaVtaRepository : IGeneralRepository<Cierre_ProVta>
    {
        IList<Cierre_ProVta> GetOtherInfo();
        IList<VCDMC_Distribuidor> GetDealers();
    }
    #endregion

    #region VistaDistribuidores
    public interface IVCDMCDistribuidorRepository : IGeneralReadOnlyRepository<VCDMC_Distribuidor>
    {
        IList<VCDMC_Distribuidor> GetOtherInfo();
    }
    #endregion

    #region ProgramaVtaDetalleCuota
    public interface IProgramaVtaDetalleCuota : IGeneralRepository<ProgramaVtaDetalleCuota>
    {
        
    }
    #endregion

    #region Periodo
    public interface IPeriodoRepository : IGeneralRepository<Periodos>
    {
    }
    #endregion

    #region VistaProgramadeventaxDealer
    public interface Ivw_ProVtaDealerRepository : IGeneralReadOnlyRepository<vw_ProVtaDealer>
    {
    }
    #endregion

    #region TipoPeriodos
    public interface ITipoPeriodosRepository : IGeneralRepository<Tipo_Periodos>
    {
    }
    #endregion

    #region VistaPedidosCierreProVta
    public interface IVwPedidosCierreProVtaRepository : IGeneralReadOnlyRepository<Vw_PedidosCierreProVta>
    {
    }
    #endregion
}
