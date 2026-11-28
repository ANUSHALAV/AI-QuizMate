using Microsoft.EntityFrameworkCore;
using AIQuizMate.Domain;

namespace AIQuizMate.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }

        public DbSet<Quiz> Quizzes { get; set; }

        public DbSet<Question> Questions { get; set; }

        public DbSet<QuizAttempt> QuizAttempts { get; set; }
    }
}
