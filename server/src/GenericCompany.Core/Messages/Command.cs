using MediatR;
using FluentValidation.Results;
using System.Text.Json.Serialization;

namespace GenericCompany.Core.Messages
{
    public abstract class Command : Message, IRequest<bool>
    {
        [JsonIgnore]
        public DateTime Timestamp { get; private set; }
        [JsonIgnore]
        public ValidationResult ValidationResult { get; set; }

        protected Command()
        {
            Timestamp = DateTime.Now;
        }

        public virtual bool IsValid()
        {
            throw new NotImplementedException();
        }
    }
}
