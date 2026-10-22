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
  "intro": "Backend software engineer with nearly four years of experience building scalable enterprise applications. I work with Java, Spring Boot, Kafka and cloud-native technologies, building four retail pricing platforms for AJIO and Reliance Retail: online fashion & lifestyle discounts for AJIO, competitor price matching for Reliance Digital and JioMart, markdown approvals for Trends stores, and in-store competitor price benchmarking.",
  "location": "Bengaluru, Karnataka",
  "email": "prudhviraj729@gmail.com",
  "phone": "6302610681",
  "links": {
    "linkedin": "https://www.linkedin.com/in/bavigadda-prudhviraj-822568210/",
    "github": "https://github.com/Bavigadda-Prudhviraj",
    "hackerrank": "https://www.hackerrank.com/profile/PRUDHVIRAJ729",
    "scaler": "https://www.scaler.com/academy/profile/807d1475b54f/",
    // Empty links are hidden on the site.
    "leetcode": "https://leetcode.com/u/Bavigadda_Prudhviraj/",
    "geeksforgeeks": "https://www.geeksforgeeks.org/profile/bavigadda852prudhviraj?tab=overview"
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
      "Core engineer — roughly half of all commits — across four pricing platforms: Online F&L Pricing (AJIO), Electronics Price Match (Reliance Digital & JioMart), Offline F&L Markdown (Trends) and Offline Price Benchmarking.",
      "Build rule-driven pricing engines with margin guardrails, simulations and multi-level approval workflows.",
      "Develop event-driven microservices with Java 21, Spring Boot, MongoDB, Kafka, Google Cloud Pub/Sub, Cloud Storage and BigQuery, delivered as Docker images through Azure DevOps pipelines.",
      "Apply reliability patterns — transactional outbox, idempotent processing, lease-based job claiming and run audits — so repeated or redelivered events are handled safely.",
      "Build a competitor price-match engine that rates articles Red / Amber / Green per channel and matches prices only within margin guardrails.",
      "Tune throughput with batched message pulls, parallel processing, bulk database writes and streaming Excel ingestion.",
      "Review pull requests, define architecture standards, write design documents, mentor engineers and integrate AI coding agents into the engineering workflow.",
      "Conduct technical interviews and support engineering hiring."
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
  /** Plain-language business problem the project solves. */
  problem?: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** How a request or event moves through the system — rendered as an animated pipeline. */
  flow?: { step: string; detail: string }[];
  /** Architecture and design patterns visible in the code. */
  patterns?: string[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'tag' | 'radar' | 'markdown' | 'survey';
};

export const projects: Project[] = [
  {
    "id": "online-fnl-pricing",
    "title": "Online F&L Pricing",
    "year": "2026 – Present",
    "genre": "Professional Work • AJIO • Fashion & Lifestyle",
    "logline": "A trade-discount pricing platform for AJIO's online fashion and lifestyle catalogue: configure rules, simulate the outcome, approve, and publish discounts to AJIO.",
    "problem": "Pricing teams needed a controlled way to set discounts across business units, brands and events, preview the impact before going live, and send approved discounts to AJIO reliably.",
    "stack": [
      "Java 21",
      "Spring Boot 3",
      "MongoDB",
      "Apache Kafka",
      "Google Cloud Pub/Sub",
      "Cloud Storage",
      "Apache POI",
      "Docker",
      "Azure DevOps"
    ],
    "build": [
      "Built core features of a rule-driven pricing engine that computes trade discounts through a chain of calculators — bucket resolution, base discount, event booster, manual override and price rounding.",
      "Extended simulation to price every business unit and sub-business unit in one run, with strict per-unit configuration resolution and concurrency-safe execution.",
      "Delivered multi-vendor funding, rule-code validation against the business hierarchy, file-driven discount deactivation and rule-level AJIO results.",
      "Built the Business Unit → Sub-Business Unit → Brand hierarchy API with access control scoped to each user's units.",
      "Made result writes idempotent so redelivered events never create duplicates, and authored high-level design documents for new features."
    ],
    "features": [
      "Rule creation → simulation → approval workflow",
      "Automatic discount recomputation (Auto TD)",
      "Pricing matrix, brand caps, event boosters and vendor funding",
      "Bulk Excel upload with streaming parsing",
      "Discounts published to AJIO over Kafka with acknowledgement tracking",
      "Scheduled jobs for publishing, reconciliation and cleanup"
    ],
    "metrics": [
      { "value": "6", "label": "stage pricing calculator chain" },
      { "value": "80+", "label": "unit test classes in the codebase" },
      { "value": "Java 21", "label": "Spring Boot 3 multi-module services" }
    ],
    "flow": [
      { "step": "Configure", "detail": "Rules, pricing matrix, brand caps and event boosters" },
      { "step": "Simulate", "detail": "Pricing engine runs the calculator chain per product" },
      { "step": "Approve", "detail": "Pricing team reviews and approves the results" },
      { "step": "Outbox", "detail": "Events stored with the data, then relayed reliably" },
      { "step": "Publish", "detail": "Discounts sent to AJIO over Kafka" },
      { "step": "Acknowledge", "detail": "AJIO confirms, results are reconciled" }
    ],
    "patterns": [
      "Transactional outbox for reliable event delivery",
      "Event-driven pipeline with Pub/Sub and Kafka",
      "Pipeline of pricing calculators",
      "Strategy / registry for bulk-upload types",
      "Lease-based job claiming and optimistic locking",
      "Keyset pagination and bounded parallel batch writes"
    ],
    "palette": { "from": "#24060b", "via": "#6e0d1d", "to": "#09070a", "accent": "#ff3d5a" },
    "motif": "tag"
  },
  {
    "id": "electronics-price-match",
    "title": "Electronics Price Match",
    "year": "2026 – In Development",
    "genre": "Professional Work • Reliance Digital & JioMart • Electronics",
    "logline": "An automated price-matching engine for online electronics that compares key articles against live competitor prices for Reliance Digital and JioMart, while protecting margins.",
    "problem": "Electronics prices change constantly across marketplaces. The business needed to know, per channel, where a competitor is cheaper and respond quickly — without selling below margin.",
    "stack": [
      "Java 21",
      "Spring Boot 3",
      "MongoDB",
      "Google Cloud Pub/Sub",
      "Cloud Storage",
      "Apache POI",
      "OpenAPI",
      "Docker",
      "Azure DevOps"
    ],
    "build": [
      "Set up the multi-module project and built both Pub/Sub listeners that turn a competitor-price refresh into per-article pricing work.",
      "Built the per-channel price-match engine: rate each article Red / Amber / Green against the lowest competitor price, check the margin guardrail, then match through a deal price or route to a bank offer.",
      "Built the price-match dashboard APIs, the competitor-prices API and deal-price management that feeds price re-evaluation.",
      "Tuned throughput with batched, overlapping message pulls, background acknowledgements, parallel processing and bulk database writes.",
      "Made runs duplicate-safe with a no-change gate and per-run audit records."
    ],
    "features": [
      "Red / Amber / Green competitive status per article and channel",
      "Margin guardrails that block below-floor matches",
      "Deal-price matching or bank-offer routing",
      "Key-article (KVI) tagging with bulk upload",
      "Price-match dashboard and Excel exports",
      "Run audits and idempotent re-processing"
    ],
    "metrics": [
      { "value": "2", "label": "channels: Reliance Digital & JioMart" },
      { "value": "4", "label": "competitor price sources compared" },
      { "value": "8", "label": "parallel worker threads per batch" }
    ],
    "flow": [
      { "step": "Refresh", "detail": "Competitor prices updated upstream" },
      { "step": "Fan out", "detail": "One message per key article via Pub/Sub" },
      { "step": "Compare", "detail": "Lowest competitor price vs. our price, per channel" },
      { "step": "Rate", "detail": "Red, Amber or Green status" },
      { "step": "Guardrail", "detail": "Margin floor check on Red articles" },
      { "step": "Decide", "detail": "Match via deal price, or route to bank offer" }
    ],
    "patterns": [
      "Event-driven fan-out pipeline",
      "Ordered rule chain for each pricing decision",
      "Ports and adapters at the storefront boundary",
      "Strategy / registry for message types",
      "Job queue claimed with atomic updates",
      "Config-driven Excel export framework"
    ],
    "palette": { "from": "#03150f", "via": "#0d5a40", "to": "#050a08", "accent": "#46e3a8" },
    "motif": "radar"
  },
  {
    "id": "offline-fnl-markdown",
    "title": "Offline F&L Markdown",
    "year": "2026",
    "genre": "Professional Work • Trends Stores • Fashion & Lifestyle",
    "logline": "A markdown approval platform for Trends stores: model-recommended price reductions, reviewed by planners and managers against sell-through and margin rules.",
    "problem": "Store markdowns need to clear slow-moving stock without eroding margin. Planners needed one place to review recommendations, see sell-through data and approve changes with guardrails in place.",
    "stack": [
      "Java 17",
      "Spring Boot 3",
      "MongoDB",
      "Apache Kafka",
      "Google Cloud Pub/Sub",
      "BigQuery",
      "Email (SMTP)",
      "Docker",
      "Azure DevOps"
    ],
    "build": [
      "Scaffolded the five-module platform — API, worker, notification, scheduler and shared library — and delivered the fashion & lifestyle flow end to end.",
      "Built the two-level approval workflow (planner, then manager) with bulk upload and a guard that makes repeated submissions safe.",
      "Built sell-through-rate (STR) data consumption and dashboard APIs, and aligned article and store master data.",
      "Added secure Kafka publishing for configuration changes such as margin guardrails, STR rules and triggers.",
      "Simplified the pricing model from three tiers to a single suggested markdown price."
    ],
    "features": [
      "Model-recommended markdown suggestions",
      "Planner and manager approval with bulk upload",
      "Margin guardrails checked before approval",
      "Sell-through rate at store, state, warehouse and national level",
      "Dashboards and markdown performance views",
      "Email notifications"
    ],
    "metrics": [
      { "value": "2", "label": "level approval workflow" },
      { "value": "4", "label": "sell-through levels: store to national" },
      { "value": "5", "label": "independently deployable modules" }
    ],
    "flow": [
      { "step": "Recommend", "detail": "Model suggests markdown prices" },
      { "step": "Import", "detail": "Recommendations and sell-through data loaded in bulk" },
      { "step": "Review", "detail": "Planner approves or rejects each suggestion" },
      { "step": "Guardrail", "detail": "Margin rules checked before approval" },
      { "step": "Approve", "detail": "Manager gives final approval" },
      { "step": "Notify", "detail": "Config events published, teams notified" }
    ],
    "patterns": [
      "Separate runtimes for API, worker and notifications",
      "Outbox-based event publishing",
      "Streaming-cursor batch imports with bulk writes",
      "Idempotent per-row approval processing",
      "Read routing to a read-only master-data database"
    ],
    "palette": { "from": "#1c1003", "via": "#6b3c06", "to": "#0a0806", "accent": "#ffb547" },
    "motif": "markdown"
  },
  {
    "id": "offline-price-benchmarking",
    "title": "Offline Price Benchmarking",
    "year": "2026",
    "genre": "Professional Work • Reliance Retail Stores • Price Intelligence",
    "logline": "A competitor price survey and benchmarking platform for physical stores, with a weekly price-position report for pricing and category teams.",
    "problem": "Pricing teams needed trustworthy competitor shelf prices from stores — collected, validated and approved — and a weekly view of where our prices stand against the market.",
    "stack": [
      "Java 17",
      "Spring Boot 3",
      "MongoDB",
      "Redis",
      "Google Cloud Pub/Sub",
      "Cloud Storage",
      "BigQuery",
      "Apache POI",
      "Docker"
    ],
    "build": [
      "Was the lead contributor on the benchmarking, survey and survey-validation services.",
      "Built the suggested benchmark price feature and its publishing flow with status callbacks.",
      "Built per-category computation of the weekly price-position report.",
      "Reworked price guardrails and added role-based store access checks.",
      "Converted message consumption to scheduled batch pulls and focused bulk approve/reject on items that need action."
    ],
    "features": [
      "Survey capture, submission and auto-submit",
      "Validation workflow with corrections and approvals",
      "Price guardrails with image-backed overrides",
      "Benchmark price publishing",
      "Weekly price index with regional and Red / Amber / Green views",
      "Asynchronous Excel exports with secure download links"
    ],
    "metrics": [
      { "value": "4", "label": "tab weekly price-position dashboard" },
      { "value": "3", "label": "role workflow: surveyor, analyst, manager" },
      { "value": "2", "label": "scheduled jobs: auto-submit & expiry" }
    ],
    "flow": [
      { "step": "Survey", "detail": "Competitor shelf prices captured in stores" },
      { "step": "Validate", "detail": "Analysts check, correct and upload in bulk" },
      { "step": "Guardrail", "detail": "Outliers need evidence to override" },
      { "step": "Approve", "detail": "Category managers approve or reject" },
      { "step": "Publish", "detail": "Benchmark prices sent downstream" },
      { "step": "Report", "detail": "Weekly price index and dashboards" }
    ],
    "patterns": [
      "Layered architecture with central error handling",
      "AOP-based routing of reads to a read-only database",
      "Strategy / registry for message handling",
      "Command-style scheduled batch jobs",
      "Storage adapter and schema-driven Excel exports",
      "Dedicated thread pools for async work"
    ],
    "palette": { "from": "#04121f", "via": "#0f4c6e", "to": "#05080d", "accent": "#4cc9ff" },
    "motif": "survey"
  },
  {
    "id": "banking-microservices",
    "title": "Banking Microservices",
    "year": "Mar – May 2025",
    "genre": "Personal Project • Banking • Cloud-Native",
    "logline": "A cloud-native banking application built as independent Spring Boot microservices — with service discovery, a secure API gateway, event-driven messaging, full observability and container orchestration on Kubernetes.",
    "problem": "A banking platform needs services that can be built, deployed and scaled independently, stay available when one part fails, and remain secure and observable in production.",
    "stack": [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "OAuth2 / OpenID Connect",
      "Apache Kafka",
      "RabbitMQ",
      "Spring Cloud Stream",
      "Resilience4j",
      "MySQL",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Grafana Stack"
    ],
    "build": [
      "Identified service boundaries and right-sized the banking domain into independently deployable Spring Boot microservices, documented with OpenAPI / Swagger.",
      "Followed cloud-native, 15-factor principles: externalized configuration through Spring Cloud Config Server and service discovery with Eureka.",
      "Routed all traffic through Spring Cloud Gateway, handling cross-cutting concerns such as security, logging and request tracing in one place.",
      "Secured the APIs with OAuth2, OpenID Connect and Spring Security.",
      "Added fault tolerance with Resilience4j — circuit breakers, retries, rate limiting and fallbacks.",
      "Built event-driven communication with Kafka and RabbitMQ using Spring Cloud Stream and Spring Cloud Functions.",
      "Containerized every service with Docker, ran the full system with Docker Compose, and deployed to Kubernetes for orchestration and scaling.",
      "Implemented observability with Spring Boot Actuator, Prometheus, Loki, Promtail, Tempo and Grafana for metrics, logs and distributed tracing."
    ],
    "features": [
      "Eureka service discovery and client-side load balancing",
      "Centralized configuration with Spring Cloud Config Server",
      "API gateway with OAuth2 / OpenID Connect security",
      "Circuit breakers, retries, rate limiting and fallbacks",
      "Event-driven messaging with Kafka and RabbitMQ",
      "Per-service MySQL databases",
      "OpenAPI / Swagger documentation",
      "Docker Compose and Kubernetes deployments",
      "Metrics, logs and distributed tracing in Grafana"
    ],
    "metrics": [
      { "value": "15", "label": "factor cloud-native methodology" },
      { "value": "2", "label": "message brokers: Kafka & RabbitMQ" },
      { "value": "5", "label": "tool observability stack" }
    ],
    "flow": [
      { "step": "Client", "detail": "Request arrives with an OAuth2 / OIDC token" },
      { "step": "Gateway", "detail": "Spring Cloud Gateway authenticates and routes" },
      { "step": "Discover", "detail": "Eureka locates a healthy service instance" },
      { "step": "Process", "detail": "Microservice handles it, protected by Resilience4j" },
      { "step": "Events", "detail": "Kafka / RabbitMQ notify other services" },
      { "step": "Observe", "detail": "Metrics, logs and traces flow into Grafana" }
    ],
    "patterns": [
      "Microservices with database-per-service",
      "API gateway and service discovery",
      "Externalized configuration (15-factor)",
      "Circuit breaker, retry and rate limiter",
      "Event-driven messaging with Spring Cloud Stream",
      "Containerization and Kubernetes orchestration",
      "Centralized observability: metrics, logs, traces"
    ],
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
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
  /** One short line — the card stays scannable. */
  detail: string;
  laurel: string;
  /** Headline number, counted up when the card enters view. */
  stat: { value: number; prefix?: string; suffix?: string; label: string };
  link?: string;
};

export const achievements: Achievement[] = [
  {
    "id": "platform-ownership",
    "title": "Four Pricing Platforms",
    "org": "AJIO – Reliance Retail",
    "detail": "Online F&L, Electronics Price Match, Offline Markdown and Offline Benchmarking.",
    "laurel": "Platform Delivery",
    "stat": { "value": 4, "label": "platforms" }
  },
  {
    "id": "core-contributor",
    "title": "Core Contributor",
    "org": "Retail Pricing Engineering",
    "detail": "Roughly half of all commits on each of the four pricing codebases.",
    "laurel": "Ownership",
    "stat": { "value": 50, "prefix": "~", "suffix": "%", "label": "of commits" }
  },
  {
    "id": "electronics-price-match",
    "title": "Competitor Price Matching",
    "org": "Reliance Digital / JioMart",
    "detail": "Red / Amber / Green pricing against live competitor prices, within margin guardrails.",
    "laurel": "Current Development",
    "stat": { "value": 4, "label": "competitors tracked" }
  },
  {
    "id": "banking-microservices",
    "title": "Cloud-Native Banking",
    "org": "Personal Project",
    "detail": "Spring Cloud microservices on Docker and Kubernetes, with Kafka, RabbitMQ and Grafana.",
    "laurel": "Cloud-Native",
    "stat": { "value": 15, "label": "factor methodology" }
  },
  {
    "id": "api-performance",
    "title": "Performance Gain",
    "org": "Virtusa",
    "detail": "API refactoring improved system performance and efficiency.",
    "laurel": "Performance",
    "stat": { "value": 10, "suffix": "%", "label": "faster" }
  },
  {
    "id": "release-quality",
    "title": "Fewer Defects",
    "org": "Virtusa",
    "detail": "Functional testing with Postman reduced post-release defects.",
    "laurel": "Release Quality",
    "stat": { "value": 10, "suffix": "%", "label": "fewer defects" }
  },
  {
    "id": "scaler-dsa",
    "title": "Problem Solver",
    "org": "Scaler",
    "detail": "Best streak of 237 days and a best contest rank of 2 / 20.",
    "laurel": "DSA",
    "stat": { "value": 794, "label": "problems solved" }
  },
  {
    "id": "oracle-java",
    "title": "Oracle Certified Java",
    "org": "Oracle · 2022",
    "detail": "Oracle Certified Associate, Java SE 8 Programmer.",
    "laurel": "Certification",
    "stat": { "value": 8, "prefix": "SE ", "label": "Java programmer" },
    "link": "/assets/certificates/oracle-java-se8.pdf"
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
      },
      {
        "name": "OAuth2 / OpenID Connect",
        "mono": "Oi"
      },
      {
        "name": "OpenAPI / Swagger",
        "mono": "Oa"
      },
      {
        "name": "Spring Cloud Stream",
        "mono": "St"
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
        "name": "RabbitMQ",
        "mono": "Rb"
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
        "name": "Docker Compose",
        "mono": "Dc"
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
  "Google Cloud Pub/Sub": ["Electronics Price Match: per-article fan-out and batched pulls", "Online F&L Pricing: pricing runs and bulk uploads", "Offline Price Benchmarking: benchmark publishing"],
  "MongoDB": ["Primary datastore across all four pricing platforms"],
  "Java": [
    "Oracle Certified Associate, Java SE 8 Programmer",
    "Scaler Java certification"
  ],
  "Java 21": [
    "Online F&L Pricing for AJIO",
    "Electronics Price Match for Reliance Digital & JioMart"
  ],
  "SQL": [
    "Scaler Databases & SQL certification"
  ],
  "Spring Boot": [
    "Banking Microservices",
    "Enterprise Backend Services"
  ],
  "Spring Cloud": [
    "Banking Microservices: Eureka, Config Server, Gateway, Stream and Functions"
  ],
  "Spring Security": [
    "Banking Microservices: OAuth2 / OpenID Connect"
  ],
  "OAuth2 / OpenID Connect": [
    "Banking Microservices: securing the API gateway and services"
  ],
  "OpenAPI / Swagger": [
    "Banking Microservices: API documentation",
    "Electronics Price Match: springdoc OpenAPI"
  ],
  "Spring Cloud Stream": [
    "Banking Microservices: event-driven messaging with Spring Cloud Functions"
  ],
  "RabbitMQ": [
    "Banking Microservices: event-driven communication"
  ],
  "Docker Compose": [
    "Banking Microservices: running the full system locally"
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
    "Four retail pricing platforms"
  ],
  "Apache Kafka": [
    "Online F&L Pricing: discounts published to AJIO",
    "Offline F&L Markdown: configuration events",
    "Banking Microservices"
  ],
  "Redis": [
    "Backend modules at Virtusa",
    "Offline Price Benchmarking: scheduler caching"
  ],
  "Resilience4j": [
    "Banking Microservices: circuit breakers, retries, rate limiting and fallbacks"
  ],
  "MySQL": [
    "Banking Microservices: database per service"
  ],
  "Rule Engines": [
    "Online F&L Pricing: calculator-chain discount engine",
    "Electronics Price Match: guardrail-based match rules"
  ],
  "PostgreSQL": [
    "Backend engineering profile summary"
  ],
  "BigQuery": [
    "Offline F&L Markdown: staging data imports",
    "Offline Price Benchmarking: weekly sales quantities"
  ],
  "Databricks": [
    "Offline F&L Markdown: model-recommended markdown prices"
  ],
  "GCP": [
    "Pub/Sub, Cloud Storage and BigQuery across the pricing platforms"
  ],
  "GKE / Kubernetes": [
    "Banking Microservices: container orchestration and scaling",
    "Container deployment target for the pricing services"
  ],
  "Docker": [
    "All four pricing platforms",
    "Banking Microservices"
  ],
  "CI/CD": [
    "Cloud-native deployments and delivery workflows"
  ],
  "Git / GitHub": [
    "Cloud-native deployments and delivery workflows"
  ],
  "Azure Repositories": [
    "Azure DevOps build pipelines for the pricing platforms"
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
        "description": "Designed a cloud-native banking application as right-sized Spring Boot microservices, with Eureka discovery, Config Server, Spring Cloud Gateway and OAuth2 / OpenID Connect security.",
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
        "description": "Added event-driven messaging with Kafka and RabbitMQ, Resilience4j fault tolerance, Docker and Kubernetes deployments, and a Grafana observability stack for metrics, logs and tracing.",
        "tags": [
          "Kafka",
          "RabbitMQ",
          "Kubernetes"
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
    "synopsis": "Software Development Engineer at MobileProgramming.com for AJIO – Reliance Retail, building four retail pricing platforms across online and offline channels.",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Four Platforms",
        "description": "Core engineer on four pricing platforms: Online F&L Pricing (AJIO), Electronics Price Match (Reliance Digital & JioMart), Offline F&L Markdown (Trends) and Offline Price Benchmarking.",
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
        "title": "Built to Be Reliable",
        "description": "Event-driven Java 21 and Spring Boot services with MongoDB, Kafka and Pub/Sub, using a transactional outbox, idempotent writes and run audits.",
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
        "title": "The Price Match",
        "description": "Building a competitor price-match engine for Reliance Digital and JioMart: Red / Amber / Green status per channel, margin guardrails, and deal-price or bank-offer decisions.",
        "tags": [
          "Google Cloud Pub/Sub",
          "Price Matching",
          "Guardrails"
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
    "detail": "Online F&L · Electronics Price Match · Offline F&L Markdown · Offline Benchmarking",
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
    "detail": "Spring Cloud · Kafka & RabbitMQ · OAuth2 · Docker · Kubernetes",
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
    "title": "GCP & MongoDB",
    "detail": "Pub/Sub, Cloud Storage and BigQuery with MongoDB-backed pricing services",
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
      "Online F&L Pricing · Electronics Price Match · Offline F&L Markdown · Offline Benchmarking",
      "Rule-driven pricing · Margin guardrails · Approval workflows",
      "Java 21 · Spring Boot · MongoDB · Kafka · Pub/Sub · BigQuery"
    ]
  },
  {
    "kicker": "Current development",
    "title": "Electronics Price Match",
    "lines": [
      "Reliance Digital & JioMart · Four competitor price sources",
      "Red / Amber / Green status · Margin guardrails",
      "Deal-price match or bank-offer routing",
      "Java 21 · Google Cloud Pub/Sub · MongoDB"
    ]
  },
  {
    "kicker": "Personal project",
    "title": "Banking Microservices",
    "lines": [
      "Spring Cloud discovery, configuration and gateway",
      "OAuth2 / OpenID Connect · Kafka & RabbitMQ · Resilience4j",
      "Docker · Docker Compose · Kubernetes · MySQL",
      "Prometheus · Loki · Tempo · Grafana"
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
