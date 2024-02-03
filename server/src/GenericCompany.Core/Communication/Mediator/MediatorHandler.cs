using GenericCompany.Core.Messages;
using GenericCompany.Core.Messages.CommonMessages.DomainEvents;
using GenericCompany.Core.Messages.CommonMessages.Notifications;
using MediatR;

namespace GenericCompany.Core.Communication.Mediator
{
    public class MediatorHandler : IMediatorHandler
    {
        private readonly IMediator _mediator;

        public MediatorHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<bool> SendCommand<T>(T command) where T : Command
        {
            return await _mediator.Send(command);
        }

        public async Task PublishEvent<T>(T eventModel) where T : Event
        {
            await _mediator.Publish(eventModel);
        }

        public async Task PublishNotification<T>(T notification) where T : DomainNotification
        {
            await _mediator.Publish(notification);
        }

        public async Task PublishDomainEvent<T>(T notification) where T : DomainEvent
        {
            await _mediator.Publish(notification);
        }
    }
}
