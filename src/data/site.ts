export const profile = {
  name: 'Rafael Targino',
  role: 'Data Engineer & Software Builder',
  location: 'São Paulo, Brazil',
  email: 'ratarca.rtc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/targino-rafael',
  github: 'https://github.com/ratarca',
  youtube: 'https://www.youtube.com/@rafael-emergente',
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

// Replace these placeholders with real recommendations when they are available.
export const testimonials = [
  {
    quote: 'Add a short recommendation here about the problem we solved together, the way I worked, and the outcome we achieved.',
    name: 'Name of colleague',
    role: 'Role · Company',
    context: 'Placeholder recommendation'
  },
  {
    quote: 'Use this space for a client, leader, or teammate to describe how I brought clarity to a complex data or product challenge.',
    name: 'Name of collaborator',
    role: 'Role · Company',
    context: 'Placeholder recommendation'
  },
  {
    quote: 'Add a quote that speaks to execution: how we turned an ambiguous opportunity into a system that created measurable value.',
    name: 'Name of stakeholder',
    role: 'Role · Company',
    context: 'Placeholder recommendation'
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
    title: 'AI Agents',
    description: 'A practical exploration of autonomous agents that build and operate systems.',
    image: '/assets/img/project/ai_agents/page.webp',
    tags: ['AI', 'Automation', 'Agents'],
    href: 'https://github.com/ratarca',
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
