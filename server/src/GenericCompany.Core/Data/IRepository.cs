﻿using GenericCompany.Core.DomainObjects;

namespace GenericCompany.Core.Data
{
    public interface IRepository<T> : IDisposable where T : IAggregateRoot
    {
        IUnitOfWork UnitOfWork { get; }
    }
}
