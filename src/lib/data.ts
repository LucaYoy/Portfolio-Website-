import { Github, Linkedin, Mail, GraduationCap, ExternalLink, FileText, Code } from 'lucide-react';

export const profile = {
  name: 'Luca Ion',
  position: 'PhD researcher in quantum computing, focused on quantum algorithms and resource-efficient simulations.',
  bio: [
    "I am a dedicated PhD researcher at the forefront of quantum computing, with a specialized focus on the development and analysis of quantum algorithms. My work is driven by a passion for solving complex computational problems that are currently intractable for classical computers. I am particularly interested in creating resource-efficient quantum simulations, which have the potential to revolutionize materials science and drug discovery.",
    "Throughout my academic journey, I have cultivated a deep understanding of quantum mechanics, information theory, and advanced computational techniques. My research involves both theoretical exploration and practical implementation, often utilizing frameworks like PyTorch for quantum-inspired machine learning models. I thrive in collaborative environments and am always eager to engage with fellow researchers to push the boundaries of scientific discovery.",
    "Beyond my core research, I am a strong advocate for open-source science and enjoy developing tools that can be used by the wider community. This portfolio is a snapshot of my work, from academic publications to personal projects that showcase my skills and interests. I am constantly exploring new ideas and am excited about the future of quantum technology and its impact on the world."
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
