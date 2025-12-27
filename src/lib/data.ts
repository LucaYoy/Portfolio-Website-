import { Github, Linkedin, Mail, GraduationCap, ExternalLink, FileText, Code } from 'lucide-react';

export const profile = {
  name: 'Luca Ion',
  position: 'PhD researcher in quantum computing, focused on quantum algorithms and resource-efficient simulations.',
  bio: [
    "I am a PhD researcher in quantum computing and quantum information, currently based in Valencia, Spain. My research focuses on quantum algorithms, with particular interest in ground-state preparation, variational and imaginary-time methods, and resource-efficient quantum simulations for near-term devices.",
    "A key part of my work is connecting theory with practice—turning algorithmic ideas into concrete implementations and carefully analyzing their performance, scaling, and practical limitations. I regularly work with both classical simulations and quantum software frameworks to study circuit depth, noise effects, and measurement costs.",
    "I primarily work in Python and use tools such as NumPy, SciPy, and Qiskit, with a strong emphasis on clean code, reproducibility, and transparent benchmarking. I actively maintain modular codebases and version-controlled research projects as part of my workflow."
  ],
  email: 'lucaion781@gmail.com',
  socials: [
    { name: 'Email', url: 'lucaion781@gmail.com', icon: Mail },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luca-petru-ion/', icon: Linkedin },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=-zQ-4YwAAAAJ&hl=en', icon: GraduationCap },
    { name: 'GitHub', url: 'https://github.com/LucaYoy', icon: Github },
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
