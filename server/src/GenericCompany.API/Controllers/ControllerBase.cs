using GenericCompany.Core.Communication.Mediator;
using GenericCompany.Core.Messages.CommonMessages.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GenericCompany.API.Controllers
{
    public abstract class ControllerBase : Controller
    {
        private readonly DomainNotificationHandler _notifications;
        private readonly IMediatorHandler _mediatorHandler;

        protected ControllerBase(INotificationHandler<DomainNotification> notifications,
                                 IMediatorHandler mediatorHandler)
        {
            _notifications = (DomainNotificationHandler)notifications;
            _mediatorHandler = mediatorHandler;
        }

        protected bool OperacaoValida()
        {
            return !_notifications.HasNotifications();
        }

        protected IEnumerable<string> ObterMensagensErro()
        {
            return _notifications.GetNotifications().Select(c => c.Value).ToList();
        }

        protected void NotificarErro(string codigo, string mensagem)
        {
            _mediatorHandler.PublishNotification(new DomainNotification(codigo, mensagem));
        }
    }
}