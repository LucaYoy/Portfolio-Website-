import { Github, Linkedin, Mail, GraduationCap, ExternalLink, FileText, Code } from 'lucide-react';

export const profile = {
  name: 'Luca Rossi',
  position: 'AI Researcher & PhD Candidate',
  bio: 'A passionate researcher at the intersection of machine learning and computational science. My work focuses on developing novel deep learning models for complex data analysis, with a strong background in both academic research and industry application. I thrive on solving challenging problems and pushing the boundaries of what AI can achieve.',
  email: 'luca.rossi@example.com',
  socials: [
    { name: 'Email', url: 'mailto:luca.rossi@example.com', icon: Mail },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Google Scholar', url: '#', icon: GraduationCap },
    { name: 'GitHub', url: '#', icon: Github },
  ]
};

export const publications = [
  {
    title: 'Generative Adversarial Networks for Scientific Data Augmentation',
    authors: 'L. Rossi, J. Doe, A. Smith',
    venue: 'Proceedings of the International Conference on Machine Learning (ICML), 2023',
    links: [
      { name: 'arXiv', url: '#', icon: FileText },
      { name: 'Journal', url: '#', icon: ExternalLink },
    ]
  },
  {
    title: 'Self-Supervised Learning for Molecular Property Prediction',
    authors: 'L. Rossi, B. C. Jones',
    venue: 'Journal of Chemical Information and Modeling, 2022',
    links: [
      { name: 'PDF', url: '#', icon: FileText },
      { name: 'Journal', url: '#', icon: ExternalLink },
    ]
  },
  {
    title: 'Interpretable AI for High-Stakes Decision Making in Physics',
    authors: 'S. Lee, L. Rossi, M. Williams',
    venue: 'NeurIPS 2021 Workshop on Machine Learning and the Physical Sciences',
    links: [
      { name: 'arXiv', url: '#', icon: FileText },
    ]
  },
];

export const projects = [
  {
    title: 'Quantum-Inspired Neural Networks',
    description: 'An exploration into neural network architectures inspired by principles of quantum mechanics. This project implements novel activation functions and entanglement-based layers in PyTorch.',
    tags: ['PyTorch', 'Deep Learning', 'Research'],
    links: [
      { name: 'GitHub', url: '#', icon: Github },
      { name: 'Demo', url: '#', icon: ExternalLink },
    ]
  },
  {
    title: 'Real-time Anomaly Detection in Sensor Networks',
    description: 'A personal project to build a lightweight, deployable system for detecting anomalies in streaming sensor data using unsupervised learning techniques.',
    tags: ['Python', 'Scikit-learn', 'IoT'],
    links: [
      { name: 'GitHub', url: '#', icon: Github },
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'This very website, built with Next.js, Tailwind CSS, and shadcn/ui. Designed to be a clean, modern, and responsive showcase of my work.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    links: [
      { name: 'Source', url: '#', icon: Code },
    ]
  },
];

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
];
