import { Component } from '@angular/core';

export interface FeatureItem {
  title: string;
  description: string;
  icon: 'topic' | 'upload' | 'subject' | 'sparkles' | 'levels' | 'analysis' | 'timer' | 'review';
  accent: 'purple' | 'violet' | 'blue' | 'pink';
}

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.html',
  styleUrl: './feature.scss',
})
export class Feature {
  readonly features: FeatureItem[] = [
    {
      title: 'Custom Topic Quiz',
      description: 'Enter any topic—from ASP.NET Core and Java to Pharmacy or Engineering—and create a quiz in seconds.',
      icon: 'topic',
      accent: 'purple',
    },
    {
      title: 'Upload Your Notes',
      description: 'Upload PDF, DOCX, or TXT study material and turn your notes into focused practice questions.',
      icon: 'upload',
      accent: 'violet',
    },
    {
      title: 'Subject & Subtopic Selection',
      description: 'Choose a subject and narrow it down to exactly what you want, such as Java arrays or data types.',
      icon: 'subject',
      accent: 'blue',
    },
    {
      title: 'AI-Powered Questions',
      description: 'Generate relevant, well-balanced MCQs that match the topics and material you selected.',
      icon: 'sparkles',
      accent: 'pink',
    },
    {
      title: 'Multiple Difficulty Levels',
      description: 'Build confidence with Easy, challenge yourself with Medium, or master concepts with Hard mode.',
      icon: 'levels',
      accent: 'purple',
    },
    {
      title: 'Smart Results & Analysis',
      description: 'View scores, correct and incorrect answers, and clear performance insights to guide your revision.',
      icon: 'analysis',
      accent: 'violet',
    },
    {
      title: 'Timed Quiz Mode',
      description: 'Practice under time pressure, monitor progress, and develop steady exam-ready pacing.',
      icon: 'timer',
      accent: 'blue',
    },
    {
      title: 'Answer Review',
      description: 'Review every question, understand mistakes, and reinforce the concepts behind the right answer.',
      icon: 'review',
      accent: 'pink',
    },
  ];
}
