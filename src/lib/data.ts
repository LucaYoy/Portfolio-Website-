import { Github, Linkedin, Mail, GraduationCap, ExternalLink, FileText, Code } from 'lucide-react';

export const profile = {
  name: 'Luca Ion',
  position: 'PhD researcher in quantum computing, focused on quantum algorithms and resource-efficient simulations.',
  bio: [
    "I am a PhD researcher in quantum computing based in Valencia, working on quantum algorithms and quantum machine learning. My focus is on translating theoretical ideas into practical implementations and benchmarking them under realistic constraints. I primarily work in Python with an emphasis on clean, reproducible research code.",
  ],
  skills: ["Python", "NumPy",'Matplotlib', "Qiskit",'PennyLane'],
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
    title: 'Adaptive time Compressed QITE (ACQ) and its geometrical interpretation',
    authors: 'Alberto Acevedo Meléndez, Carmen G. Almudéver, Miguel Angel Garcia-March, Rafael Gómez-Lurbe, Luca Ion, Mohit Lal Bera, Rodrigo M. Sanz, Somayeh Mehrabankar, Tanmoy Pandit, Armando Pérez, Andreu Anglés-Castillo',
    links: [
      { name: 'arXiv', url: 'https://arxiv.org/abs/2510.15781', icon: FileText },
    ]
  },
  {
    title: 'Understanding Quantum Imaginary Time Evolution and its Variational form',
    authors: 'Andreu Anglés-Castillo, Luca Ion, Tanmoy Pandit, Rafael Gomez-Lurbe, Rodrigo Martínez, Miguel Angel Garcia-March',
    venue: 'Journal of Chemical Information and Modeling, 2022',
    links: [
      { name: 'PDF', url: 'https://arxiv.org/abs/2510.02015', icon: FileText },
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
    description: 'This very website, built with Next.js, Tailwind CSS, and shadcn/ui plus a bit of ai help for the web development :). Designed to be a clean, modern, and responsive showcase of my work.',
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