using System;
using System.Collections.Generic;
using System.Text;

namespace AIQuizMate.Domain
{
    public class Question
    {
        public Guid Id { get; set; }

        public Guid QuizId { get; set; }

        public string Text { get; set; } = string.Empty;

        public List<string> Options { get; set; } = new();

        public string CorrectAnswer { get; set; } = string.Empty;

        public string Explanation { get; set; } = string.Empty;
    }
}
