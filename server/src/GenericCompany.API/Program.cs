using GenericCompany.Catalog.Application.Commands.RegisterNewProduct;
using GenericCompany.Catalog.Application.Queries;
using GenericCompany.Catalog.Data;
using GenericCompany.Catalog.Data.Repository;
using GenericCompany.Catalog.Domain.Repositories;
using GenericCompany.Core.Communication.Mediator;
using GenericCompany.Core.Messages.CommonMessages.Notifications;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Mediator
//builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
{
    builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(assembly));
}

builder.Services.AddScoped<IMediatorHandler, MediatorHandler>();

builder.Services.AddScoped<IRequestHandler<RegisterNewProductCommand, bool>, RegisterNewProductCommandHandle>();

// Notifications
builder.Services.AddScoped<INotificationHandler<DomainNotification>, DomainNotificationHandler>();
builder.Services.AddDbContext<CatalogContext>();

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<ICatalogQueries, CatalogQueries>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<ApiBehaviorOptions>(op => 
{
    op.SuppressModelStateInvalidFilter = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

namespace GenericCompany.API.ProgramPartial
{
    public partial class Program { }
}