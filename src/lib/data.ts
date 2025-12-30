import { Github, Linkedin, Mail, GraduationCap, ExternalLink, FileText, Code } from 'lucide-react';

export const profile = {
  name: "Hi, i'm Luca 👋",
  position: 'Marie Skłodowska-Curie PhD Fellow in quantum computing, working on quantum algorithms and resource-efficient simulation, with interests in AI/ML and real-world industry applications.',
  bio: [
    'I am a <strong>PhD student</strong> at <a href="https://www.uv.es/uvweb/physics/en/faculty-physics-1285850062061.html" class="text-primary font-bold hover:no-underline">Universitat de Valencia</a>, working on <strong>quantum algorithms</strong> and <strong>quantum machine learning</strong>. My focus is on translating theoretical ideas into practical implementations and benchmarking them under realistic constraints. Previously, I worked as a <strong>data scientist</strong> at <a href="https://www.brd.ro/" class="text-primary font-bold hover:no-underline">BRD</a>, where I focused on building various ML pipelines for different needs by the bank.',
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
    links: [
      { name: 'arXiv', url: 'https://arxiv.org/abs/2510.02015', icon: FileText },
    ]
  },
  {
    title: 'Variational quantum eigensolver for chemical molecules',
    authors: 'Luca Ion, Adam Smith',
    links: [
      { name: 'arXiv', url: 'https://arxiv.org/abs/2512.22572', icon: FileText },
    ]
  },
];

export const projects = [
  {
    title: 'NER for product names',
    description: 'A short project where I fine tuned a NER huggingface model for furniture products detection. The goal of the model was to return the products on a furniture website. ',
    tags: ['PyTorch', 'HuggingFace', 'NER'],
    links: [
      { name: 'GitHub', url: 'https://github.com/LucaYoy/NER-for-product-names', icon: Github },
    ]
  },
  {
    title: 'RAG for Q&A on bank documentation',
    description: 'Primary developer for this internal tool to be used by BRD bank employees. The main goal was to develop a Q&A tool specialized on internal bank documentation',
    tags: ['Python', 'Scikit-learn', 'HuggingFace','Numpy','Pandas','RAG'],
    links: [
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'This very website, built with Next.js, Tailwind CSS, and shadcn/ui plus a bit of ai help for the web development 😄. Designed to be a clean, modern, and responsive showcase of my work.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    links: [
      { name: 'GitHub', url: 'https://github.com/LucaYoy/Portfolio-Website-', icon: Github },
    ]
  },
];

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
];
