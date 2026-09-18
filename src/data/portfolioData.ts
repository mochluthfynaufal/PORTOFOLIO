import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Moch Luthfy Naufal',
  tagline: 'Frontend Web Developer',
  education: 'SMK Wikrama Bogor | Software Developer',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Informatics engineering undergraduate focused on building modern, responsive, and performant web interfaces with clean component architecture and reactive design.',
  experienceStart: 'Active Developer',
  avatarUrl: '/avatar.svg',
  interests: [
    'Frontend Architecture',
    'Modern Web Ecosystem',
    'Component Engineering',
    'Reactive Interfaces',
    'Web Performance'
  ],
  contact: {
    email: 'naufalfii74@gmail.com',
    github: 'https://github.com/mochluthfynaufal',
    linkedin: 'https://linkedin.com/in/mochluthfynaufal',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'HTML5',
    category: 'frontend',
    layer: 'client',
    iconKey: 'html5',
    color: '#E34F26',
    roleTag: 'Markup Structure',
    usageContext: 'Struktur semantik dokumen web, aksesibilitas modern, dan fondasi halaman web',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'CSS3',
    category: 'frontend',
    layer: 'client',
    iconKey: 'css3',
    color: '#1572B6',
    roleTag: 'Styling & Layouts',
    usageContext: 'Tata letak modern Flexbox & Grid, responsivitas multi-device, dan animasi CSS',
    projectLinks: ['cimart', 'villanakey']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, interaktivitas DOM, async event loop, dan ES6+ modern',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Type Contracts',
    usageContext: 'Type-safe contracts across frontend applications, component props, and robust interfaces',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Utility Styling',
    usageContext: 'Modern utility-first styling, desain sistem konsisten, dan rapid UI prototyping',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    layer: 'client',
    iconKey: 'bootstrap',
    color: '#7952B3',
    roleTag: 'Component Framework',
    usageContext: 'Grid sistem responsif cepat, komponen UI siap pakai, dan styling utilitas',
    projectLinks: ['cimart']
  },
  {
    name: 'React',
    category: 'frontend',
    layer: 'client',
    iconKey: 'react',
    color: '#0284c7',
    roleTag: 'Component UI',
    usageContext: 'Komponen UI modular, reaktivitas state, custom hooks, dan alur interaktif SPA',
    projectLinks: ['cimart', 'kalorin-ai']
  },

  // backend engine layer
  {
    name: 'PHP',
    category: 'backend',
    layer: 'backend',
    iconKey: 'php',
    color: '#777BB4',
    roleTag: 'Server Scripting',
    usageContext: 'Pengembangan logika server-side, integrasi backend dinamis, dan pengolahan REST API',
    projectLinks: ['cimart']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Server Runtime',
    usageContext: 'Runtime JavaScript server-side, tooling automasi, dan servis backend modern',
    projectLinks: ['kalorin-ai']
  },

  // database and cloud persistence layer
  {
    name: 'Supabase',
    category: 'backend',
    layer: 'database',
    iconKey: 'supabase',
    color: '#10b981',
    roleTag: 'Cloud Postgres & Auth',
    usageContext: 'Managed Postgres backend, row-level security policies, real-time subscriptions, dan auth',
    projectLinks: ['kalorin-ai']
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Transactional DB',
    usageContext: 'Penyimpanan data relasional terstruktur, skema transaksi ACID, dan optimasi query',
    projectLinks: ['cimart']
  },

  // tools and workflow layer
  {
    name: 'Figma',
    category: 'creative',
    layer: 'devops',
    iconKey: 'figma',
    color: '#F24E1E',
    roleTag: 'UI/UX Design',
    usageContext: 'Wireframing, perancangan prototipe antarmuka UI/UX modern, dan desain sistem kolaboratif',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'Canva',
    category: 'creative',
    layer: 'devops',
    iconKey: 'canva',
    color: '#00C4CC',
    roleTag: 'Graphic Design',
    usageContext: 'Desain grafis kreatif, aset visual media sosial, banner promosi, dan materi branding digital',
    projectLinks: ['cimart', 'villanakey']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Pelacakan revisi kode sumber, branching workflows terstruktur, dan manajemen commit',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'GitHub',
    category: 'tools',
    layer: 'devops',
    iconKey: 'github',
    color: '#181717',
    roleTag: 'Repository & Collab',
    usageContext: 'Hosting repository cloud, kolaborasi open source, tracking issues, dan sinkronisasi tim',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'VS Code',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vscode',
    color: '#007acc',
    roleTag: 'Code Editor',
    usageContext: 'Code editor utama dengan tooling ekstensi modern, debugging, dan integrasi terminal',
    projectLinks: ['cimart', 'villanakey', 'kalorin-ai']
  },
  {
    name: 'npm',
    category: 'tools',
    layer: 'devops',
    iconKey: 'npm',
    color: '#cb3837',
    roleTag: 'Package Manager',
    usageContext: 'Pengelolaan paket dependensi JavaScript, eksekusi build scripts, dan ekosistem open-source',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'Netlify',
    category: 'tools',
    layer: 'devops',
    iconKey: 'netlify',
    color: '#00c7b7',
    roleTag: 'Edge Deployment',
    usageContext: 'Continuous deployment dari Git, edge CDN global, serverless redirect, dan pratinjau cepat',
    projectLinks: ['kalorin-ai', 'villanakey']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Edge Deployment',
    usageContext: 'Deployment otomatis web modern, edge functions, DNS management, dan serverless global CDN',
    projectLinks: ['cimart', 'kalorin-ai']
  },
  {
    name: 'CapCut',
    category: 'creative',
    layer: 'devops',
    iconKey: 'capcut',
    color: '#0f172a',
    roleTag: 'Video Production',
    usageContext: 'Produksi dan editing video kreatif, transisi dinamis, serta konten visual media sosial',
    projectLinks: ['cimart', 'villanakey']
  },
  {
    name: 'Alight Motion',
    category: 'creative',
    layer: 'devops',
    iconKey: 'alightmotion',
    color: '#05faa8',
    roleTag: 'Motion Graphics',
    usageContext: 'Pembuatan animasi motion grafik halus, efek visual, keyframing, dan tipografi dinamis',
    projectLinks: ['cimart']
  }
];

export const projectsData: Project[] = [
  {
    id: 'cimart',
    title: 'CiMart (CibendaMart)',
    subtitle: 'Rural E-Commerce Platform for Desa Cibenda, Pangandaran',
    category: 'fullstack',
    summary: 'Platform e-commerce desa yang dibangun atas permintaan Wakil Rektor & Prodi untuk memberdayakan transaksi komoditas sembako, hasil tani, ternak, ikan, dan UMKM warga Desa Cibenda.',
    description: 'Proyek inisiatif digitalisasi desa yang dimandatkan langsung oleh pimpinan kampus bekerjasama dengan perangkat Desa Cibenda. Platform ini menjembatani produsen desa langsung dengan pembeli regional melalui integrasi peta dan pembayaran terotomatisasi.',
    architecture: [
      'Backend monolitik Laravel dengan routing frontend React TypeScript via Inertia.js',
      'WebSockets untuk sinkronisasi pesanan dan status transaksi real-time',
      'Firebase Cloud Messaging (FCM) untuk push notification otomatis',
      'Integrasi Leaflet / OpenStreetMap untuk pemetaan titik pengantaran desa',
      'Payment gateway Midtrans otomatis dengan otentikasi Google OAuth',
      'Containerisasi Docker untuk memastikan reliabilitas deployment antar server'
    ],
    stack: [
      'Laravel',
      'Inertia.js',
      'React',
      'TypeScript',
      'MySQL',
      'Tailwind CSS',
      'Docker',
      'FCM',
      'WebSockets',
      'Leaflet / OSM',
      'Midtrans',
      'Google OAuth'
    ],
    highlights: [
      'Inisiatif resmi atas penugasan Warek & Prodi Teknik Informatika',
      'Mendukung komoditas sembako, pertanian, peternakan, perikanan, dan kerajinan',
      'Sistem pembayaran digital instan dan pemetaan akurat level desa'
    ],
    challenges: 'Dikerjakan dan diarsiteki secara mandiri dari nol hingga tahap produksi karena keterbatasan anggota tim.',
    role: 'Full-Stack Engineer',
    demoUrl: 'https://cimart.desa.id',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat karena hak cipta institusi & kerahasiaan data',
    imageUrl: '/projects/CibendaMart.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Engineering', value: 'Full-Stack Developer' },
      { label: 'Architecture', value: 'Laravel Inertia' },
      { label: 'Payment API', value: 'Midtrans Iris' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-widyatama',
    period: '2023 - Sekarang',
    role: 'S1 Teknik Informatika',
    organization: 'Universitas Widyatama (Angkatan 2023)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi sarjana Teknik Informatika dengan pendalaman fundamental ilmu komputer, struktur data, algoritma, rekayasa perangkat lunak, dan mengambil penjurusan spesialisasi Database / Data Analyst.',
    highlights: [
      'Penjurusan Database & Data Analyst',
      'Pemodelan Data Relasional & Optimasi Query SQL',
      'Fundamental Rekayasa Perangkat Lunak & Algoritma'
    ],
    tech: ['Database Systems', 'Data Analysis', 'SQL', 'Algorithms', 'Software Engineering', 'System Design']
  },
  {
    id: 'exp-dicoding-dbs',
    period: 'Feb 2026 - Jul 2026',
    role: 'Fullstack Developer (Learning Path)',
    organization: 'Dicoding CodingCamp 2026 Powered by DBS Foundation',
    badge: 'Intensive Bootcamp',
    category: 'bootcamp',
    description:
      'Program beasiswa pelatihan intensif Fullstack Developer dari Dicoding dan DBS Foundation. Membangun arsitektur frontend web modern (React & Vite), integrasi API backend type-safe, otentikasi data, dan berkolaborasi dalam Capstone Project kalorinAI.',
    highlights: [
      'Lulusan Jalur Fullstack Developer',
      'Integrasi REST API, State Management & Cloud DB',
      'Kolaborasi Tim Capstone Project kalorinAI'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'REST API']
  },
  {
    id: 'exp-cimart-mbkm',
    period: 'Jul 2026 - Sekarang',
    role: 'Full-Stack Developer',
    organization: 'Inisiatif MBKM / KKN Tematik & Capstone Kampus Desa Cibenda',
    badge: 'MBKM / Capstone Kampus',
    category: 'project',
    description:
      'Inisiatif MBKM / KKN Tematik resmi dari kampus yang menjadi Capstone Project untuk digitalisasi komoditas ekonomi warga Desa Cibenda, Pangandaran. Dikerjakan secara mandiri dari perancangan arsitektur sistem, integrasi payment gateway Midtrans, notifikasi FCM, hingga deployment produksi.',
    highlights: [
      'Mandat Resmi Pimpinan Kampus & Perangkat Desa',
      'Development Arsitektur End-to-End',
      'Integrasi Payment Gateway Midtrans & WebSockets'
    ],
    tech: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Docker', 'WebSockets', 'Midtrans', 'Leaflet']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];
