using GenericCompany.Catalog.Domain.Repositories;
using GenericCompany.Core.Communication.Mediator;
using GenericCompany.Core.Messages;
using GenericCompany.Core.Messages.CommonMessages.Notifications;
using MediatR;

namespace GenericCompany.Catalog.Application.Commands.RegisterNewProduct
{
    public class RegisterNewProductCommandHandle : IRequestHandler<RegisterNewProductCommand, bool>
    {
        private readonly IMediatorHandler _mediatorHandler;
        private readonly IProductRepository _productRepository;

        public RegisterNewProductCommandHandle(IMediatorHandler mediatorHandler, IProductRepository productRepository)
        {
            _mediatorHandler = mediatorHandler;
            _productRepository = productRepository;
        }

        public async Task<bool> Handle(RegisterNewProductCommand request, CancellationToken cancellationToken)
        {
            if (!ValidateCommand(request)) return false;

            var category = await _productRepository.GetCategoryById(request.CategoryId);

            if (category is null)
            {
                await _mediatorHandler.PublishNotification(new DomainNotification("Error", "A categoria não existe"));
                return false;
            }

            _productRepository.Add(request.MapProductEntity());
            return await _productRepository.UnitOfWork.Commit();
        }

        private bool ValidateCommand(Command message)
        {
            if (message.IsValid()) return true;

            foreach (var error in message.ValidationResult.Errors)
            {
                _mediatorHandler.PublishNotification(new DomainNotification(message.MessageType, error.ErrorMessage));
            }

            return false;
        }
    }
}
