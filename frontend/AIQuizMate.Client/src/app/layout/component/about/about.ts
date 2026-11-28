import { Component } from '@angular/core';

interface AboutStep {
  number: string;
  title: string;
  description: string;
  icon: 'topic' | 'settings' | 'practice' | 'results';
}

interface AboutBenefit {
  title: string;
  description: string;
  icon: 'personal' | 'subject' | 'ai' | 'tracking';
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly steps: AboutStep[] = [
    {
      number: '01',
      title: 'Choose or Upload',
      description: 'Choose a custom topic or upload your PDF, DOCX, or TXT study notes.',
      icon: 'topic',
    },
    {
      number: '02',
      title: 'Customize Your Quiz',
      description: 'Select a subject, subtopic, and Easy, Medium, or Hard difficulty.',
      icon: 'settings',
    },
    {
      number: '03',
      title: 'Practice with AI',
      description: 'Answer relevant multiple-choice questions generated from your selections.',
      icon: 'practice',
    },
    {
      number: '04',
      title: 'Analyze & Improve',
      description: 'Review your score, understand mistakes, and focus on weaker concepts.',
      icon: 'results',
    },
  ];

  readonly benefits: AboutBenefit[] = [
    {
      title: 'Personalized Learning',
      description: 'Study exactly what matters to you with quizzes built around your topic.',
      icon: 'personal',
    },
    {
      title: 'Flexible Subject Selection',
      description: 'Explore broad subjects or focus on specific subtopics and concepts.',
      icon: 'subject',
    },
    {
      title: 'Smart Question Generation',
      description: 'Get relevant AI-generated MCQs based on topics and uploaded notes.',
      icon: 'ai',
    },
    {
      title: 'Performance Tracking',
      description: 'Measure progress, identify gaps, and improve through answer review.',
      icon: 'tracking',
    },
  ];
}
