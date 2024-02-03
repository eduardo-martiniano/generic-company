using GenericCompany.Catalog.Domain;

namespace GenericCompany.Catalog.Application.Queries.ViewModels
{
    public class CatalogViewModel
    {
        public List<ProductViewModel> Products { get; private set; } = new List<ProductViewModel>();

        public CatalogViewModel(List<Product> products)
        {
            Products = products.Select(c => new ProductViewModel(c)).ToList();
        }

        public CatalogViewModel(List<ProductViewModel> products)
        {
            Products = products;
        }
    }
}
