using GenericCompany.Catalog.Domain;
using GenericCompany.Catalog.Domain.Repositories;
using GenericCompany.Core.Data;
using Microsoft.EntityFrameworkCore;

namespace GenericCompany.Catalog.Data.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly CatalogContext _context;

        public ProductRepository(CatalogContext context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public void Add(Product product)
        {
            _context.Products.Add(product);
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public async Task<List<Product>> GetAllProducts()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Category> GetCategoryById(Guid categoryId)
        {
            return await _context.Categories.FirstOrDefaultAsync(c => c.Id == categoryId);
        }
    }
}
