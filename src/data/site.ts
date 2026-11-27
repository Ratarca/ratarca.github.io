export const profile = {
  name: 'Rafael Targino',
  role: 'Data Engineer & Software Builder',
  location: 'São Paulo, Brazil',
  email: 'ratarca.rtc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/targino-rafael',
  github: 'https://github.com/ratarca',
  youtube: 'https://www.youtube.com/@rafael-targino',
  resume: 'https://drive.google.com/uc?export=download&id=1o-tZESttaidA7Dl1eNf-9pGrZwHpQ4Av'
};

export const skills = [
  'Data platforms',
  'Backend systems',
  'Cloud architecture',
  'Agentic AI',
  'Quantitative methods',
  'DevOps'
];

// The numbered connections and reading key in the engraved skills atlas.
export const capabilities = [
  { id: 'data', number: 'I', name: 'Data', tools: 'Spark · Databricks · Airflow · SQL · Unity Catalog' },
  { id: 'backend', number: 'II', name: 'Backend', tools: 'Python · FastAPI · Go · PostgreSQL · Redis' },
  { id: 'agentic', number: 'III', name: 'Agentic AI', tools: 'LLM agents · RAG · workflow automation' },
  { id: 'quantitative', number: 'IV', name: 'Quantitative', tools: 'econometrics · pricing & risk models · optimization' },
  { id: 'architecture', number: 'V', name: 'Architecture', tools: 'Azure · AWS · Terraform · event-driven systems' }
];

export const workflowTasks = [
  { id: 'problem', title: 'PROBLEM' },
  { id: 'understand', title: 'UNDERSTAND' },
  { id: 'design', title: 'DESIGN' },
  { id: 'build', title: 'BUILD' },
  { id: 'validate', title: 'VALIDATE' },
  { id: 'solution', title: 'SOLUTION' },
  { id: 'value', title: 'VALUE' }
];

export const workflowDependencies: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [4, 5], [5, 6]
];
// Complete the three-edge iteration before delivering the solution.
export const workflowSequence = [0, 1, 2, 3, 4, 2, 3, 4, 5, 6];

// Add future degrees and certifications here; the Skills page carousel updates automatically.
export const education = [
  {
    type: 'Degree',
    period: '2015 — 2020 · São Paulo, Brazil',
    institution: 'University of São Paulo',
    title: 'Bachelor of Economics',
    description: 'The analytical foundation I use to connect business problems, incentives, quantitative evidence, and systems that create measurable outcomes.',
    image: '/assets/img/education/usp.jpg',
    mark: 'USP',
    href: 'https://www5.usp.br/'
  },
  {
    type: 'Academic focus',
    period: 'Quantitative foundation',
    institution: 'University of São Paulo',
    title: 'Econometrics',
    description: 'Using quantitative methods to separate signal from noise, test assumptions, and turn data into evidence for better decisions.',
    mark: '01'
  },
  {
    type: 'Academic focus',
    period: 'Business foundation',
    institution: 'University of São Paulo',
    title: 'Pricing & financial modeling',
    description: 'Understanding how products, markets, incentives, and financial choices combine to create—and sometimes destroy—value.',
    mark: '02'
  },
  {
    type: 'Academic focus',
    period: 'Computational foundation',
    institution: 'University of São Paulo',
    title: 'Algorithms for big data',
    description: 'Applying optimization and computational thinking to data-intensive problems where scale, cost, and reliability matter.',
    mark: '03'
  }
];

type Testimonial = {
  quote: string[];
  lang?: string;
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: [
      'During the three years I worked with Rafael Targino, I witnessed his professional growth, driven by intelligence, resilience, and exceptional commitment. He joined our team as a trainee, earned multiple promotions, and consistently took on greater responsibilities, demonstrating strong competence and delivering outstanding results.',
      'He played a key role in implementing the Retail Liquidity Provider (RLP) project, which enabled the institution to generate US$24 million in annual revenue, demonstrating his ability to translate technical expertise into tangible business value.'
    ],
    lang: 'en',
    name: 'Adone Totti Garcia',
    role: 'Director IT & Risk · Mirae Asset Group',
    linkedin: 'https://es.linkedin.com/in/adonejunior'
  },
  {
    quote: [
      'During a project to modernize the data architecture, Rafael Targino implemented architectural improvements that directly contributed to generating US$2 million in business value.',
      'He is highly collaborative, thinks strategically, and can rethink processes from different perspectives. He continually looks for ways to improve efficiency and amplify the team’s impact.'
    ],
    lang: 'en',
    name: 'Matheus Antunes',
    role: 'Senior Manager · AB InBev',
    photo: '/assets/img/testimonials/matheus-antunes.jpg',
    linkedin: 'https://br.linkedin.com/in/matheus-antunes-a2001b176'
  },
  {
    quote: [
      'Rafael is a highly dedicated and driven professional. I had the opportunity to work with him early in his tech career, when he was transitioning from a different field. What impressed me was how seriously he approached learning and how much effort he put into understanding root problems. What sets Rafael apart is his combination of technical expertise and a strong understanding of stockholders’ demands, developed through his experience in the financial sector. I believe this combination makes him a particularly valuable professional, and I would strongly recommend him.'
    ],
    lang: 'en',
    name: 'Pedro Lima, PhD',
    role: 'AI Scientist · Amazon (USA)',
    photo: '/assets/img/testimonials/pedro-lima.jpg',
    linkedin: 'https://www.linkedin.com/in/pedro-lima-87222815a'
  }
];

export const experience = [
  {
    company: 'XP Inc.',
    url: 'https://www.xpi.com.br',
    period: 'Sep 2024 — Present',
    role: 'Data Engineer III',
    highlights: [
      'Selected as one of two developers of the year from a group of 60.',
      'Reduced wholesale-bank data operations costs by US$2M annually.',
      'Led an agentic AI data squad that streamlined data-engineering and business-analysis work.',
      'Helped modernize credit-card services from a monolith to event-driven systems.'
    ]
  },
  {
    company: 'Serasa Experian',
    url: 'https://www.serasaexperian.com.br/',
    period: 'May 2023 — Sep 2024',
    role: 'Data Engineer III',
    highlights: [
      'Designed and implemented a data-consent platform serving 80M customers.',
      'Built marketing and CRM data products that contributed to US$8M in revenue growth.',
      'Implemented Unity Catalog to improve data governance and cost allocation.'
    ]
  },
  {
    company: 'ModalMais Bank',
    url: 'https://www.modalmais.com.br/',
    period: 'Nov 2021 — May 2023',
    role: 'Data Engineer II · Software Engineer I, Risk',
    highlights: [
      'Built an AWS data lake with Terraform and migrated on-premise workloads to the cloud.',
      'Created FastAPI and PostgreSQL integrations, data pipelines, and platform OKRs.',
      'Supported real-time risk and liquidity systems using WebSockets, Redis, and quantitative analysis.'
    ]
  },
  {
    company: 'Itaú BBA',
    url: 'https://www.itau.com.br/',
    period: 'Apr 2018 — Nov 2019',
    role: 'Economics Intern',
    highlights: [
      'Built partner APIs and a real-estate data warehouse.',
      'Supported credit models and economic analysis for construction companies.'
    ]
  }
];

export const labs = [
  {
    title: 'Azure Data Lake',
    description: 'Infrastructure-as-code foundations for a resilient data platform on Azure.',
    image: '/assets/img/project/azure_dlake/azure_dlake.jpg',
    tags: ['Data platform', 'Azure', 'Terraform'],
    href: '/labs/azure-data-lake',
    type: 'Platform'
  },
  {
    title: 'Card Data Lab',
    description: 'A credit-card data platform that turns operational events into trusted analytics products.',
    image: '/assets/img/project/card_data_lab/card-data-lab.png',
    tags: ['API', 'Data Model', 'DuckDB'],
    href: '/labs/card-data-lab',
    type: 'Data'
  },
  {
    title: 'Gringotts',
    description: 'A banking simulation backend built for reliability and observability.',
    image: '/assets/img/project/gringotts/gringotts.webp',
    tags: ['Backend', 'Go', 'FastAPI'],
    href: '/projects/gringotts.html',
    type: 'Backend'
  },
  {
    title: 'Hyper Personalization',
    description: 'Experiments in making product journeys feel useful and personal.',
    image: '/assets/img/project/personalization/page.png',
    tags: ['Analytics', 'Product', 'ML'],
    href: 'https://github.com/ratarca',
    type: 'AI'
  },
  {
    title: 'Agent Hive',
    description: 'A practical exploration of autonomous agents that build and operate systems as a coordinated hive.',
    image: '/assets/img/project/agent_hive/page.png',
    tags: ['AI', 'Automation', 'Agents'],
    href: '/labs/agent-hive',
    type: 'AI'
  },
  {
    title: 'Arbitrage Bets',
    description: 'A trading-system experiment for finding and operationalizing pricing opportunities.',
    image: '/assets/img/project/arbitrage_bets/arbitrage-bets.jpeg',
    tags: ['Finance', 'Systems', 'Data'],
    href: 'https://github.com/ratarca',
    type: 'Systems'
  }
];
