using GenericCompany.Catalog.Application.Commands.RegisterNewProduct;
using GenericCompany.Catalog.Application.Queries;
using GenericCompany.Core.Communication.Mediator;
using GenericCompany.Core.Messages.CommonMessages.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GenericCompany.API.Controllers.Admin
{
    [ApiController]
    [Route("api/admin")]
    public class AdminController : ControllerBase
    {
        private readonly IMediatorHandler _mediator;
        private readonly ICatalogQueries _catalogQueries;
        public AdminController(INotificationHandler<DomainNotification> notifications, 
            IMediatorHandler mediatorHandler,
            ICatalogQueries catalogQueries) : base(notifications, mediatorHandler)
        {
            _mediator = mediatorHandler;
            _catalogQueries = catalogQueries;
        }

        [HttpPost("products")]
        public async Task<IActionResult> RegisterNewProduct([FromBody] RegisterNewProductCommand command)
        {
            await _mediator.SendCommand(command);

            if (OperacaoValida())
                return Ok();

            return BadRequest(ObterMensagensErro()); 
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetCatalog()
        {
            return Ok(await _catalogQueries.GetCatalog());
        }
    }
}
