using GenericCompany.Catalog.Domain;

namespace GenericCompany.Catalog.Application.Queries.ViewModels
{
    public class ProductViewModel
    {
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public decimal Price { get; private set; }
        public string Picture { get; private set; }

        public ProductViewModel(Product product)
        {
            Id = product.Id;
            Name = product.Name;
            Description = product.Description;
            Price = product.Price;
            Picture = product.Picture;
        }
    }
}
