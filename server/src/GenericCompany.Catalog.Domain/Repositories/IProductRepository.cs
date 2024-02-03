using GenericCompany.Core.Data;

namespace GenericCompany.Catalog.Domain.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        void Add(Product product);
        Task<List<Product>> GetAllProducts();
        Task<Category> GetCategoryById(Guid categoryId);  
    }
}
