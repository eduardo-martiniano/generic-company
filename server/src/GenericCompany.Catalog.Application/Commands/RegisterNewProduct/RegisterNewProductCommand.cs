using GenericCompany.Catalog.Domain;
using GenericCompany.Core.Messages;
using MediatR;

namespace GenericCompany.Catalog.Application.Commands.RegisterNewProduct
{
    public class RegisterNewProductCommand : Command, IRequest<bool>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Picture { get; set; }
        public int Stock { get; set; }
        public Guid CategoryId { get; set; }
        public DateTime RegistrationDate { get; private set; } = DateTime.UtcNow.AddHours(-3);
        public bool Active { get; private set; } = true;

        public override bool IsValid()
        {
            ValidationResult = new RegisterNewProductCommandValidator().Validate(this);
            return ValidationResult.IsValid;
        }

        public Product MapProductEntity()
        {
            return new Product(Name, Description, true, Price, RegistrationDate, Picture, Stock, CategoryId); 
        }
    }
}
