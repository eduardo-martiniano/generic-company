using FluentValidation;

namespace GenericCompany.Catalog.Application.Commands.RegisterNewProduct
{
    public class RegisterNewProductCommandValidator : AbstractValidator<RegisterNewProductCommand>
    {
        public RegisterNewProductCommandValidator()
        {
            RuleFor(c => c.Name)
                .NotEmpty()
                .NotNull()
                .Must((name) => !string.IsNullOrWhiteSpace(name))
                .WithMessage("O nome do produto é invalido");

            RuleFor(c => c.Description)
                .NotEmpty()
                .NotNull()
                .Must((text) => !string.IsNullOrWhiteSpace(text))
                .WithMessage("A descrição é invalida.");

            RuleFor(c => c.Price)
                .GreaterThan(0)
                .WithMessage("O preço do item precisa ser maior que 0");

            RuleFor(c => c.CategoryId)
                .NotEmpty()
                .NotNull()
                .WithMessage("A categoria é invalida.");

        }
    }
}
