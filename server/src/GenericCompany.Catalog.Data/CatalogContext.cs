using GenericCompany.Catalog.Domain;
using GenericCompany.Core.Data;
using GenericCompany.Core.Messages;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;

namespace GenericCompany.Catalog.Data
{
    public class CatalogContext : DbContext, IUnitOfWork
    {
        public CatalogContext(DbContextOptions<CatalogContext> options) : base(options) 
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<Event>();

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CatalogContext).Assembly);
        }

        public async Task<bool> Commit()
        {
            foreach (var entry in ChangeTracker.Entries().Where(entry => entry.Entity.GetType().GetProperty("RegistrationDate") != null))
            {
                if (entry.State == EntityState.Added)
                {
                    entry.Property("RegistrationDate").CurrentValue = DateTime.Now;
                }

                if (entry.State == EntityState.Modified)
                {
                    entry.Property("RegistrationDate").IsModified = false;
                }
            }

            return await base.SaveChangesAsync() > 0;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            //options.UseNpgsql(_configuration.GetConnectionString(""));
            options.UseNpgsql("Host=localhost;Port=5432;Database=GenericDB;Username=postgres;Password=postgres;");
        }
    }
}
