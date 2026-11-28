using System;
using System.Collections.Generic;
using System.Text;

namespace AIQuizMate.Domain
{
    public class QuizAttempt
    {
        public Guid Id { get; set; }

        public Guid QuizId { get; set; }

        public int TotalQuestions { get; set; }

        public int CorrectAnswers { get; set; }

        public int WrongAnswers { get; set; }

        public double Score { get; set; }

        public DateTime StartedAt { get; set; }

        public DateTime CompletedAt { get; set; }
    }
}
