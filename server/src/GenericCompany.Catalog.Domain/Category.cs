using GenericCompany.Core.DomainObjects;

namespace GenericCompany.Catalog.Domain
{
    public class Category : Entity
    {
        public string Name { get; private set; }

        // EF Relation
        public ICollection<Product> Products { get; set; }

        protected Category() { }

        public Category(string name)
        {
            Name = name;
        }
    }
}
