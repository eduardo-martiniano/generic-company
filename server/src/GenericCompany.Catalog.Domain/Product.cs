using GenericCompany.Core.DomainObjects;

namespace GenericCompany.Catalog.Domain
{
    public class Product : Entity, IAggregateRoot
    {
        public string Name { get; private set; }
        public string Description { get; private set; }
        public bool Active { get; private set; }
        public decimal Price { get; private set; }
        public DateTime RegistrationDate { get; private set; }
        public string Picture { get; private set; }
        public int Stock { get; private set; }

        public Guid CategoryId { get; private set; }
        public Category Category { get; private set; }

        protected Product() { }

        public Product(string name, string description, bool active, decimal price, DateTime registrationDate, string picture, int stock, Guid categoryId)
        {
            Name = name;
            Description = description;
            Active = active;
            Price = price;
            RegistrationDate = registrationDate;
            Picture = picture;
            Stock = stock;
            CategoryId = categoryId;
        }
    }
}
