using GenericCompany.Catalog.Application.Queries.ViewModels;

namespace GenericCompany.Catalog.Application.Queries
{
    public interface ICatalogQueries
    {
        Task<CatalogViewModel> GetCatalog();
    }
}
