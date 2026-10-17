/** Portfolio content transcribed from Bavigadda Prudhviraj's supplied resume. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  "fullName": "Bavigadda Prudhviraj",
  "displayName": "Bavigadda Prudhviraj",
  "firstName": "BAVIGADDA PRUDHVIRAJ",
  "seriesTag": "THE SERIES",
  "originalLabel": "A BAVIGADDA PRUDHVIRAJ ORIGINAL",
  "role": "Backend Software Engineer",
  "tagline": [
    "Java & Spring Boot",
    "Microservices",
    "Cloud-Native Engineering"
  ],
  "intro": "Backend software engineer with nearly four years of experience building scalable enterprise applications. I work with Java, Spring Boot, Kafka and cloud-native technologies, owning pricing optimization platforms for AJIO and Reliance Retail from architecture to production. I am currently building end-to-end pricing automation for Reliance Digital and JioMart Digital.",
  "location": "Bengaluru, Karnataka",
  "email": "prudhviraj729@gmail.com",
  "phone": "6302610681",
  "links": {
    "linkedin": "https://www.linkedin.com/in/bavigadda-prudhviraj-822568210/",
    "github": "https://github.com/Bavigadda-Prudhviraj",
    "hackerrank": "https://www.hackerrank.com/profile/PRUDHVIRAJ729",
    "scaler": "https://www.scaler.com/academy/profile/807d1475b54f/"
  },
  "resumePdf": "/assets/Bavigadda_Prudhviraj_Resume.pdf",
  "resumeFilename": "Bavigadda_Prudhviraj_Resume.pdf",
  "portrait": {
    "src": "/assets/prudhviraj-portrait-1000.webp",
    "srcSet": "/assets/prudhviraj-portrait-360.webp 360w, /assets/prudhviraj-portrait-720.webp 720w, /assets/prudhviraj-portrait-1000.webp 1000w",
    "alt": "Portrait of Bavigadda Prudhviraj"
  },
  "interests": [
    "Cloud-Native Architecture",
    "API Engineering",
    "Distributed Systems"
  ],
  "languages": [
    "English",
    "Telugu",
    "Hindi",
    "Kannada",
    "Tamil"
  ],
  "experienceSummary": "Nearly 4 years",
  "primaryStack": "Java · Spring Boot · Kafka"
};

export const scalerLearning = {
  status: 'Master of Science in Computer Science — In Progress',
  summary: 'Currently pursuing a Master of Science in Computer Science through Scaler, alongside studies in backend engineering, core and advanced DSA, databases, and system design.',
  metrics: [
    { value: '794', label: 'Problems solved' },
    { value: '237', label: 'Best streak' },
    { value: '2 / 20', label: 'Best contest rank' },
  ],
  topics: ['Core & Advanced DSA', 'Java & Spring Boot', 'SQL & Databases', 'LLD & HLD', 'Caching & Redis', 'Kafka & Microservices', 'Sharding & Replication', 'Rate Limiting'],
};

export const education = [
  {
    "school": "Godavari Institute of Engineering and Technology",
    "place": "Andhra Pradesh",
    "degree": "B.Tech in Electrical Engineering",
    "period": "Graduated 2022",
    "score": "CGPA 7.9/10"
  }
];

export const experience = [
  {
    "company": "MobileProgramming.com (Client: AJIO – Reliance Retail)",
    "role": "Software Development Engineer",
    "place": "",
    "period": "November 2025 – Present",
    "points": [
      "Lead architecture, development and delivery across four pricing platforms: Offline Benchmarking, Online F&M (Fashion & Lifestyle), AJIO Pricing, and the new Reliance Digital / JioMart Digital platform, with ownership from product development and team setup through delivery.",
      "Build rule-driven pricing engines for retail pricing, margin guardrails, promotional events and sales data, processing millions of pricing records.",
      "Develop distributed microservices with Java 21, Spring Boot, Kafka, GCP, GKE, Databricks and BigQuery; establish cloud deployments, CI/CD and production monitoring.",
      "Review pull requests, define architecture standards, mentor engineers and integrate AI coding agents into code reviews, performance improvements and design documentation.",
      "Optimize Excel ingestion, validation and transformation workflows; conduct technical interviews and support engineering hiring.",
      "Building an end-to-end pricing automation platform for Reliance Digital and JioMart Digital within the current AJIO / Reliance Retail engagement.",
      "Apply business rules and competitor pricing analysis to recommend optimal prices based on margin targets and deal prices.",
      "Use Java 21, Google Cloud Pub/Sub and Apache Kafka to process pricing workflows and publish prices to downstream services.",
      "Benchmark processing performance and implement autoscaling based on message volume to optimize resource utilization; highly optimized code processes hundreds of thousands of records within minutes."
    ]
  },
  {
    "company": "Virtusa",
    "role": "Associate Engineer",
    "place": "",
    "period": "June 2022 – March 2025",
    "points": [
      "Developed and maintained scalable backend services using Java, Spring Boot, JPA, Redis and REST APIs.",
      "Refactored APIs to improve system performance and efficiency by 10%; functional testing with Postman reduced post-release defects by 10%.",
      "Delivered features across the Agile software development lifecycle, including testing, deployments, debugging and production support.",
      "Deployed to Development and Test environments with Spinnaker and used Kibana for log analysis, tracing and issue resolution."
    ]
  }
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    "id": "digital-pricing-automation",
    "title": "Digital Pricing Automation",
    "year": "In Development",
    "genre": "Professional Work • Reliance Digital / JioMart Digital",
    "logline": "An end-to-end pricing platform for Reliance Digital and JioMart Digital, built within my current AJIO / Reliance Retail engagement.",
    "stack": [
      "Java 21",
      "Spring Boot",
      "Google Cloud Pub/Sub",
      "Apache Kafka",
      "GCP"
    ],
    "build": [
      "Building an end-to-end pricing automation platform for Reliance Digital and JioMart Digital within the current AJIO / Reliance Retail engagement.",
      "Apply business rules and competitor pricing analysis to recommend optimal prices based on margin targets and deal prices.",
      "Use Java 21, Google Cloud Pub/Sub and Apache Kafka to process pricing workflows and publish prices to downstream services.",
      "Benchmark processing performance and implement autoscaling based on message volume to optimize resource utilization; highly optimized code processes hundreds of thousands of records within minutes."
    ],
    "features": [
      "End-to-end pricing workflow automation",
      "Business rules and competitor price analysis",
      "Price recommendations based on margin targets and deal prices",
      "Downstream price publishing with Pub/Sub and Kafka",
      "Performance benchmarking and message-volume-based autoscaling",
      "Optimized processing of hundreds of thousands of records within minutes"
    ],
    "metrics": [
      {
        "value": "100K+",
        "label": "records processed within minutes"
      }
    ],
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    },
    "motif": "flow"
  },
  {
    "id": "retail-pricing-platforms",
    "title": "Retail Pricing Platforms",
    "year": "2025 – Present",
    "genre": "Professional Work • AJIO / Reliance Retail",
    "logline": "Four enterprise pricing platforms: Offline Benchmarking, Online F&M, AJIO Pricing, and the new Reliance Digital / JioMart Digital platform for end-to-end pricing automation.",
    "stack": [
      "Java 21",
      "Spring Boot",
      "Apache Kafka",
      "Google Cloud Pub/Sub",
      "GCP / GKE",
      "BigQuery",
      "Databricks"
    ],
    "build": [
      "Lead architecture, development and delivery across four pricing platforms: Offline Benchmarking, Online F&M (Fashion & Lifestyle), AJIO Pricing, and the new Reliance Digital / JioMart Digital platform, with ownership from product development and team setup through delivery.",
      "Build rule-driven pricing engines for retail pricing, margin guardrails, promotional events and sales data, processing millions of pricing records.",
      "Develop distributed microservices with Java 21, Spring Boot, Kafka, GCP, GKE, Databricks and BigQuery; establish cloud deployments, CI/CD and production monitoring.",
      "Review pull requests, define architecture standards, mentor engineers and integrate AI coding agents into code reviews, performance improvements and design documentation.",
      "Currently building the Reliance Digital / JioMart Digital platform to analyze competitor pricing and recommend prices based on business rules, margin targets and deal prices; use Java 21, Google Cloud Pub/Sub and Apache Kafka for processing and downstream publishing."
    ],
    "features": [
      "Configurable pricing rules and margin guardrails",
      "Promotional event and sales data processing",
      "Large-volume Excel ingestion, validation and transformation",
      "Distributed microservices and cloud-native deployment",
      "Architecture governance, code reviews and team mentoring",
      "Reliance Digital / JioMart Digital end-to-end pricing automation",
      "Competitor price analysis and margin-based recommendations",
      "Performance benchmarking and message-volume-based autoscaling"
    ],
    "metrics": [
      {
        "value": "4",
        "label": "enterprise pricing platforms"
      },
      {
        "value": "Millions",
        "label": "of pricing records processed"
      },
      {
        "value": "0 → 1",
        "label": "product development ownership"
      }
    ],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "tenants"
  },
  {
    "id": "banking-microservices",
    "title": "Banking Microservices",
    "year": "Mar – May 2025",
    "genre": "Personal Project • Banking • Cloud-Native",
    "logline": "A cloud-native banking application with service discovery, secure routing, asynchronous messaging and a complete observability stack.",
    "stack": [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Kafka",
      "Docker",
      "Resilience4j"
    ],
    "build": [
      "Built a banking solution with Spring Cloud Eureka for service discovery and load balancing, Config Server for centralized configuration, and Gateway for request routing.",
      "Integrated OAuth2 and Spring Security for authentication and authorization; added Resilience4j circuit breakers and retries for fault tolerance.",
      "Used Kafka for asynchronous communication and Docker for portable deployments. Added Prometheus, Loki, Promtail, Tempo and Grafana for metrics, logs and tracing."
    ],
    "features": [
      "Eureka service discovery and registration",
      "Centralized Spring Cloud Config Server",
      "API Gateway with OAuth2 security",
      "Circuit breakers and retry logic",
      "Kafka asynchronous messaging",
      "Metrics, logs and distributed tracing"
    ],
    "metrics": [],
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    },
    "motif": "shield"
  },
  {
    "id": "virtusa-backend",
    "title": "Enterprise Backend Services",
    "year": "2022 – 2025",
    "genre": "Professional Work • Virtusa • API Engineering",
    "logline": "Scalable backend modules, RESTful integrations and production support delivered within Agile engineering teams at Virtusa.",
    "stack": [
      "Java",
      "Spring Boot",
      "JPA",
      "Redis",
      "REST APIs",
      "Postman",
      "Spinnaker",
      "Kibana"
    ],
    "build": [
      "Developed and maintained scalable backend services using Java, Spring Boot, JPA, Redis and REST APIs.",
      "Refactored APIs to improve system performance and efficiency by 10%; functional testing with Postman reduced post-release defects by 10%.",
      "Delivered features across the Agile software development lifecycle, including testing, deployments, debugging and production support.",
      "Deployed to Development and Test environments with Spinnaker and used Kibana for log analysis, tracing and issue resolution."
    ],
    "features": [
      "Reusable backend modules and REST API integrations",
      "API refactoring and performance optimization",
      "Functional testing with Postman",
      "Development and Test deployments with Spinnaker",
      "Log analysis and debugging with Kibana"
    ],
    "metrics": [
      {
        "value": "10%",
        "label": "improvement in system performance and efficiency"
      },
      {
        "value": "10%",
        "label": "reduction in post-release defects"
      }
    ],
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    },
    "motif": "flow"
  }
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    "id": "platform-ownership",
    "title": "Four Pricing Platforms",
    "org": "AJIO – Reliance Retail",
    "detail": "Architecture and delivery ownership across four pricing platforms: Offline Benchmarking, Online F&M, AJIO Pricing, and the new Reliance Digital / JioMart Digital platform.",
    "laurel": "Product Ownership"
  },
  {
    "id": "distributed-pricing",
    "title": "Millions of Records",
    "org": "Retail Pricing Engineering",
    "detail": "Distributed services process millions of pricing records using Java 21, Kafka and GCP technologies.",
    "laurel": "Engineering at Scale"
  },
  {
    "id": "api-performance",
    "title": "10% Performance Gain",
    "org": "Virtusa",
    "detail": "API code refactoring improved system performance and efficiency by 10%.",
    "laurel": "Performance"
  },
  {
    "id": "release-quality",
    "title": "10% Fewer Defects",
    "org": "Virtusa",
    "detail": "Functional testing with Postman reduced post-release defects by 10%.",
    "laurel": "Release Quality"
  },
  {
    "id": "technical-leadership",
    "title": "Engineering Leadership",
    "org": "MobileProgramming.com",
    "detail": "Review pull requests, mentor developers, define architecture standards and conduct technical interviews.",
    "laurel": "Team Development"
  },
  {
    "id": "digital-pricing-automation",
    "title": "End-to-End Digital Pricing",
    "org": "Reliance Digital / JioMart Digital",
    "detail": "Building automated pricing recommendations and downstream publishing with Java 21, Pub/Sub and Kafka, including performance benchmarking and message-volume-based autoscaling.",
    "laurel": "Current Development"
  }
];

export type Certification = { issuer: string; name: string; year: string; link?: string; featured?: boolean; note?: string };

export const certifications: Certification[] = [
  {
    "issuer": "Oracle",
    "name": "Oracle Certified Associate, Java SE 8 Programmer",
    "year": "2022",
    "featured": true,
    "link": "/assets/certificates/oracle-java-se8.pdf"
  },
  {
    "issuer": "Scaler",
    "name": "Data Structures & Algorithms",
    "year": "2025",
    "featured": true,
    "link": "/assets/certificates/scaler-dsa.png",
    "note": "Covers core and advanced DSA topics"
  },
  {
    "issuer": "Scaler",
    "name": "Back-end Development – Java Spring/Spring Boot",
    "year": "2025",
    "featured": true,
    "link": "/assets/certificates/scaler-backend.png"
  },
  {
    "issuer": "Scaler",
    "name": "Low Level Design (LLD)",
    "year": "2025",
    "featured": true,
    "link": "/assets/certificates/scaler-lld.png"
  },
  {
    "issuer": "Scaler",
    "name": "High Level Design (HLD)",
    "year": "2025",
    "featured": true,
    "link": "/assets/certificates/scaler-hld.png"
  },
  {
    "issuer": "Scaler",
    "name": "Databases & SQL",
    "year": "2025",
    "featured": true,
    "link": "/assets/certificates/scaler-databases-sql.png"
  },
  {
    "issuer": "Infosys Springboard",
    "name": "Spring REST",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/spring-rest.pdf"
  },
  {
    "issuer": "Infosys Springboard",
    "name": "Learn Spring Boot in 100 Steps – Beginner to Expert",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/spring-boot-100-steps.pdf"
  },
  {
    "issuer": "Infosys Springboard",
    "name": "Learn Spring and Spring Boot 10x Productive Java Development",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/spring-productive-java.pdf"
  },
  {
    "issuer": "Infosys Springboard",
    "name": "Git & GitHub: Working with Git Repositories",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/git-github.pdf"
  },
  {
    "issuer": "Accenture Nordics / Forage",
    "name": "Developer Virtual Experience Program",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/accenture-developer-virtual-experience.pdf",
    "note": "Virtual experience programme"
  },
  {
    "issuer": "Infosys Springboard",
    "name": "Building Web Applications with JSP: Customizing Responses with Servlets",
    "year": "2022",
    "featured": false,
    "link": "/assets/certificates/jsp-servlets.pdf"
  },
  {
    "issuer": "Foursteps Training Solutions",
    "name": "Advanced Python Programming",
    "year": "2021",
    "featured": false,
    "link": "/assets/certificates/advanced-python.pdf"
  },
  {
    "issuer": "Spoken Tutorial Project, IIT Bombay",
    "name": "Python 3.4.3 Training",
    "year": "2021",
    "featured": false,
    "link": "/assets/certificates/python-training.pdf"
  },
  {
    "issuer": "Spoken Tutorial Project, IIT Bombay",
    "name": "C Training",
    "year": "2020",
    "featured": false,
    "link": "/assets/certificates/c-training.pdf"
  },
  {
    "issuer": "Scaler",
    "name": "Java",
    "year": "2025",
    "featured": false,
    "link": "/assets/certificates/scaler-java.png"
  }
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Java backend development",
    "skills": [
      {
        "name": "Java",
        "mono": "Jv"
      },
      {
        "name": "Java 21",
        "mono": "21"
      },
      {
        "name": "SQL",
        "mono": "Sq"
      }
    ]
  },
  {
    "id": "frameworks",
    "title": "Frameworks & APIs",
    "subtitle": "Services, security and integration",
    "skills": [
      {
        "name": "Spring Boot",
        "mono": "Sb"
      },
      {
        "name": "Spring Cloud",
        "mono": "Sc"
      },
      {
        "name": "Spring Security",
        "mono": "Ss"
      },
      {
        "name": "REST APIs",
        "mono": "Ap"
      },
      {
        "name": "JPA",
        "mono": "Jpa"
      }
    ]
  },
  {
    "id": "distributed",
    "title": "Distributed Systems",
    "subtitle": "Event-driven and resilient services",
    "skills": [
      {
        "name": "Microservices",
        "mono": "Ms"
      },
      {
        "name": "Apache Kafka",
        "mono": "Kf"
      },
      {
        "name": "Redis",
        "mono": "Rd"
      },
      {
        "name": "Resilience4j",
        "mono": "R4"
      },
      {
        "name": "Rule Engines",
        "mono": "Ru"
      },
      {
        "name": "Google Cloud Pub/Sub",
        "mono": "Ps"
      }
    ]
  },
  {
    "id": "data",
    "title": "Databases & Data",
    "subtitle": "Persistence and large-volume processing",
    "skills": [
      {
        "name": "PostgreSQL",
        "mono": "Pg"
      },
      {
        "name": "MySQL",
        "mono": "My"
      },
      {
        "name": "MongoDB",
        "mono": "Mg"
      },
      {
        "name": "BigQuery",
        "mono": "Bq"
      },
      {
        "name": "Databricks",
        "mono": "Db"
      }
    ]
  },
  {
    "id": "cloud",
    "title": "Cloud & Delivery",
    "subtitle": "Cloud-native architecture and releases",
    "skills": [
      {
        "name": "GCP",
        "mono": "Gc"
      },
      {
        "name": "GKE / Kubernetes",
        "mono": "K8"
      },
      {
        "name": "Docker",
        "mono": "Dk"
      },
      {
        "name": "CI/CD",
        "mono": "Ci"
      },
      {
        "name": "Git / GitHub",
        "mono": "Gt"
      },
      {
        "name": "Azure Repositories",
        "mono": "Az"
      },
      {
        "name": "Spinnaker",
        "mono": "Sp"
      },
      {
        "name": "Message-Based Autoscaling",
        "mono": "As"
      }
    ]
  },
  {
    "id": "observability",
    "title": "Observability & Quality",
    "subtitle": "Metrics, logs, tracing and testing",
    "skills": [
      {
        "name": "Prometheus",
        "mono": "Pr"
      },
      {
        "name": "Grafana",
        "mono": "Gr"
      },
      {
        "name": "Loki / Promtail",
        "mono": "Lo"
      },
      {
        "name": "Tempo",
        "mono": "Te"
      },
      {
        "name": "Kibana",
        "mono": "Ki"
      },
      {
        "name": "Postman",
        "mono": "Pm"
      }
    ]
  },
  {
    "id": "engineering",
    "title": "Engineering Practices",
    "subtitle": "Design, delivery and collaboration",
    "skills": [
      {
        "name": "DSA",
        "mono": "Ds"
      },
      {
        "name": "System Design",
        "mono": "Sd"
      },
      {
        "name": "LLD / HLD",
        "mono": "Ld"
      },
      {
        "name": "AI Coding Agents",
        "mono": "Ai"
      },
      {
        "name": "Agile",
        "mono": "Ag"
      },
      {
        "name": "Code Reviews",
        "mono": "Cr"
      }
    ]
  }
];

export const skillEvidence: Record<string, string[]> = {
  "Google Cloud Pub/Sub": ["Reliance Digital / JioMart Digital pricing workflows and downstream publishing"],
  "Message-Based Autoscaling": ["Reliance Digital / JioMart Digital: scaling resources based on message volume"],
  "Java": [
    "Oracle Certified Associate, Java SE 8 Programmer",
    "Scaler Java certification"
  ],
  "Java 21": [
    "Reliance Digital / JioMart Digital pricing automation",
    "AJIO retail pricing platforms"
  ],
  "SQL": [
    "Scaler Databases & SQL certification"
  ],
  "Spring Boot": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "Spring Cloud": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "Spring Security": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "REST APIs": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "JPA": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "Microservices": [
    "Banking Microservices",
    "Retail Pricing Platforms"
  ],
  "Apache Kafka": [
    "Banking Microservices",
    "Retail Pricing Platforms"
  ],
  "Redis": [
    "Backend modules at Virtusa"
  ],
  "Resilience4j": [
    "Banking Microservices: circuit breakers and retries"
  ],
  "Rule Engines": [
    "AJIO pricing optimization engines"
  ],
  "PostgreSQL": [
    "Backend engineering profile summary"
  ],
  "BigQuery": [
    "AJIO pricing data processing"
  ],
  "Databricks": [
    "AJIO pricing data processing"
  ],
  "GCP": [
    "Retail Pricing Platforms"
  ],
  "GKE / Kubernetes": [
    "Retail Pricing Platforms"
  ],
  "Docker": [
    "Banking Microservices"
  ],
  "CI/CD": [
    "Cloud-native deployments and delivery workflows"
  ],
  "Git / GitHub": [
    "Cloud-native deployments and delivery workflows"
  ],
  "Azure Repositories": [
    "AJIO deployment workflows"
  ],
  "Spinnaker": [
    "Virtusa Development and Test deployments"
  ],
  "Prometheus": [
    "Banking Microservices: metrics"
  ],
  "Grafana": [
    "Banking Microservices: visualization"
  ],
  "Loki / Promtail": [
    "Banking Microservices: logs"
  ],
  "Tempo": [
    "Banking Microservices: tracing"
  ],
  "Kibana": [
    "Virtusa log analysis and debugging"
  ],
  "Postman": [
    "Virtusa functional testing"
  ],
  "DSA": [
    "Scaler Data Structures & Algorithms certification (core and advanced topics)"
  ],
  "System Design": [
    "Scaler LLD and HLD certifications",
    "AJIO platform architecture"
  ],
  "LLD / HLD": [
    "Scaler LLD and HLD certifications"
  ],
  "AI Coding Agents": [
    "AJIO engineering workflow"
  ],
  "Agile": [
    "Virtusa software development lifecycle"
  ],
  "Code Reviews": [
    "AJIO engineering governance",
    "Virtusa code quality"
  ]
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "2022",
    "synopsis": "An electrical engineering degree and the foundations of a Java engineering career.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Graduate",
        "description": "B.Tech in Electrical Engineering from Godavari Institute of Engineering and Technology, Andhra Pradesh, with CGPA 7.9/10.",
        "tags": [
          "B.Tech",
          "Electrical Engineering"
        ],
        "runtime": "Graduated 2022",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S01 E02",
        "title": "Java Foundations",
        "description": "Oracle Certified Associate, Java SE 8 Programmer, alongside courses in Spring, Spring Boot, REST and Git.",
        "tags": [
          "Java SE 8",
          "Spring",
          "Git"
        ],
        "runtime": "2022",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Engineering at Virtusa",
    "period": "2022 – 2025",
    "synopsis": "Associate Engineer at Virtusa, building backend services and improving application performance and reliability.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "The Backend Engineer",
        "description": "Built Java and Spring Boot services with JPA, Redis and REST APIs.",
        "tags": [
          "Java",
          "Spring Boot",
          "Redis"
        ],
        "runtime": "Jun 2022 – Mar 2025",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S02 E02",
        "title": "The Optimizer",
        "description": "API refactoring improved performance by 10%; Postman functional testing reduced post-release defects by 10%.",
        "tags": [
          "API Optimization",
          "Postman"
        ],
        "runtime": "Virtusa",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S02 E03",
        "title": "The Release",
        "description": "Development and Test deployments through Spinnaker, with Kibana for log analysis and debugging.",
        "tags": [
          "Spinnaker",
          "Kibana",
          "Agile"
        ],
        "runtime": "Virtusa",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Building Cloud-Native",
    "period": "2025",
    "synopsis": "A banking microservices project and advanced study in backend engineering and system design.",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "The Banking Application",
        "description": "Built a cloud-native banking application using Spring Cloud Eureka, Config Server, Gateway and OAuth2 security.",
        "tags": [
          "Spring Cloud",
          "OAuth2",
          "Microservices"
        ],
        "runtime": "Mar – May 2025",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S03 E02",
        "title": "Resilience & Visibility",
        "description": "Added Kafka messaging, Resilience4j fault tolerance, Docker containers and an observability stack for metrics, logs and tracing.",
        "tags": [
          "Kafka",
          "Docker",
          "Grafana"
        ],
        "runtime": "Banking Microservices",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S03 E03",
        "title": "The Design Toolkit",
        "description": "Scaler skill mastery certifications in Java, backend development, core and advanced DSA, LLD, HLD, databases and SQL.",
        "tags": [
          "DSA",
          "LLD",
          "HLD"
        ],
        "runtime": "2025",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Pricing at Scale",
    "period": "November 2025 – Present",
    "synopsis": "Software Development Engineer at MobileProgramming.com for AJIO – Reliance Retail, owning four enterprise pricing platforms. Currently building end-to-end pricing automation for Reliance Digital and JioMart Digital within the same engagement.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Four Platforms",
        "description": "Lead architecture and delivery across Offline Benchmarking, Online F&M, AJIO Pricing, and the new Reliance Digital / JioMart Digital platform, currently in development.",
        "tags": [
          "Product Ownership",
          "Pricing"
        ],
        "runtime": "Nov 2025 – Present",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S04 E02",
        "title": "Millions of Records",
        "description": "Distributed Java 21 and Spring Boot services process retail pricing data with Kafka, GCP, GKE, BigQuery and Databricks.",
        "tags": [
          "Java 21",
          "GCP",
          "Kafka"
        ],
        "runtime": "AJIO – Reliance Retail",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S04 E03",
        "title": "The Engineering Lead",
        "description": "Define architecture standards, review pull requests, mentor developers, integrate AI coding agents and conduct technical interviews.",
        "tags": [
          "Code Reviews",
          "Mentoring",
          "AI Agents"
        ],
        "runtime": "MobileProgramming.com",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S04 E04",
        "title": "Digital Pricing Automation",
        "description": "Building a pricing platform for Reliance Digital and JioMart Digital: business rules, competitor analysis, margin-based recommendations and downstream publishing. Java 21, Pub/Sub and Kafka power optimized processing, performance benchmarking and message-volume-based autoscaling.",
        "tags": [
          "Google Cloud Pub/Sub",
          "Kafka",
          "Autoscaling"
        ],
        "runtime": "In development · Current role",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "The Next Chapter",
    "period": "Now streaming",
    "synopsis": "Pursuing a Master of Science in Computer Science through Scaler while continuing to build backend and cloud-native systems.",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Built to Scale",
        "description": "Master of Science in Computer Science through Scaler — in progress. Continuing to deepen backend engineering, DSA, databases and system design skills.",
        "tags": [
          "Cloud-Native Architecture",
          "API Engineering",
          "Distributed Systems"
        ],
        "runtime": "Current focus",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      }
    ]
  }
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  {
    "label": "Core stack",
    "title": "Java & Spring Boot",
    "detail": "Enterprise backend development",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Current role",
    "title": "AJIO / Reliance Retail",
    "detail": "Software Development Engineer at MobileProgramming.com",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Product ownership",
    "title": "4 Pricing Platforms",
    "detail": "Offline Benchmarking · Online F&M · AJIO Pricing · Reliance Digital / JioMart Digital",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Personal project",
    "title": "Banking Microservices",
    "detail": "Spring Cloud · Kafka · OAuth2 · Docker",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Career foundation",
    "title": "Virtusa",
    "detail": "Associate Engineer · Jun 2022 – Mar 2025",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Performance",
    "title": "10% Faster",
    "detail": "API refactoring improved system performance and efficiency",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Release quality",
    "title": "10% Fewer Defects",
    "detail": "Functional testing with Postman",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Java credential",
    "title": "Oracle Certified",
    "detail": "Java SE 8 Programmer · 2022",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "System design",
    "title": "794 Problems Solved",
    "detail": "Scaler · Best streak 237 · From shared learning dashboard",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Cloud stack",
    "title": "GCP & GKE",
    "detail": "Distributed pricing services with BigQuery and Databricks",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  }
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    "kicker": "Starring",
    "title": "Bavigadda Prudhviraj",
    "lines": [
      "Backend Software Engineer",
      "Bengaluru, Karnataka"
    ],
    "chips": [
      "Java",
      "Spring Boot",
      "Cloud-Native"
    ]
  },
  {
    "kicker": "Experience",
    "title": "The Engineering Arc",
    "lines": [
      "Virtusa · Associate Engineer · June 2022 – March 2025",
      "MobileProgramming.com · Software Development Engineer · November 2025 – Present",
      "Client: AJIO – Reliance Retail"
    ]
  },
  {
    "kicker": "Professional work",
    "title": "Pricing at Scale",
    "lines": [
      "Four platforms: Offline Benchmarking · Online F&M · AJIO Pricing · Reliance Digital / JioMart Digital",
      "Millions of pricing records · Configurable pricing and margin rules",
      "Java 21 · Pub/Sub · Kafka · GCP · GKE · BigQuery · Databricks"
    ]
  },
  {
    "kicker": "Current development",
    "title": "Digital Pricing Automation",
    "lines": [
      "Reliance Digital & JioMart Digital · Current AJIO / Reliance Retail engagement",
      "Business rules · Competitor analysis · Margin targets & deal prices",
      "Java 21 · Google Cloud Pub/Sub · Apache Kafka",
      "Hundreds of thousands of records within minutes · Message-volume-based autoscaling"
    ]
  },
  {
    "kicker": "Personal project",
    "title": "Banking Microservices",
    "lines": [
      "Spring Cloud discovery, configuration and gateway",
      "OAuth2 security · Kafka messaging · Resilience4j",
      "Docker · Prometheus · Loki · Tempo · Grafana"
    ]
  },
  {
    "kicker": "Impact",
    "title": "Engineering That Delivers",
    "lines": [
      "10% improvement in system performance and efficiency at Virtusa",
      "10% reduction in post-release defects",
      "Platform architecture, mentoring and technical interviewing"
    ]
  },
  {
    "kicker": "Credentials",
    "title": "16 Certifications",
    "lines": [
      "Scaler · DSA, Java, backend development, LLD, HLD and SQL · 2025",
      "Oracle Certified Associate, Java SE 8 Programmer · 2022",
      "Infosys Springboard · Spring, Spring Boot, REST, Git and JSP · 2022",
      "Accenture Nordics / Forage · Developer Virtual Experience · 2022"
    ]
  },
  {
    "kicker": "Education",
    "title": "The Foundation",
    "lines": [
      "B.Tech in Electrical Engineering · 2022",
      "Godavari Institute of Engineering and Technology",
      "CGPA 7.9/10",
      "Master of Science in Computer Science · Scaler · In Progress"
    ]
  }
];

export type ProfileId = 'owner' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'owner',
    name: 'Bavigadda Prudhviraj',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Professional & personal`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
