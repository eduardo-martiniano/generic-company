using GenericCompany.Catalog.Application.Queries.ViewModels;
using GenericCompany.Catalog.Domain.Repositories;

namespace GenericCompany.Catalog.Application.Queries
{
    public class CatalogQueries : ICatalogQueries
    {
        private readonly IProductRepository _productRepository;

        public CatalogQueries(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<CatalogViewModel> GetCatalog()
        {
            var products = await _productRepository.GetAllProducts();

            if (products == null)
                return null;

            return new CatalogViewModel(products);
        }
    }
}
