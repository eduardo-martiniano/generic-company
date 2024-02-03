namespace GenericCompany.Core.Data
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}
