namespace AIQuizMate.Domain
{
    public class Quiz
    {
        public Guid Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Topic { get; set; } = string.Empty;

        public string Difficulty { get; set; } = string.Empty;

        public int TotalQuestions { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
