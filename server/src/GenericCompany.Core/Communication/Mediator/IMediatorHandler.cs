using GenericCompany.Core.Messages;
using GenericCompany.Core.Messages.CommonMessages.DomainEvents;
using GenericCompany.Core.Messages.CommonMessages.Notifications;

namespace GenericCompany.Core.Communication.Mediator
{
    public interface IMediatorHandler
    {
        Task PublishEvent<T>(T eventModel) where T : Event;
        Task<bool> SendCommand<T>(T command) where T : Command;
        Task PublishNotification<T>(T notification) where T : DomainNotification;
        Task PublishDomainEvent<T>(T notificacao) where T : DomainEvent;
    }
}
