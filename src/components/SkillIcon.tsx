import type { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa6';
import {
  SiApachekafka, SiDatabricks, SiDocker, SiGithub, SiGooglebigquery,
  SiGooglecloud, SiGooglepubsub, SiGrafana, SiKibana, SiKubernetes,
  SiMongodb, SiMysql, SiPostgresql, SiPostman, SiPrometheus, SiRedis,
  SiSpinnaker, SiSpring, SiSpringboot, SiSpringsecurity,
} from 'react-icons/si';
import {
  LuActivity, LuBinary, LuBot, LuBoxes, LuCode, LuDatabase,
  LuGitBranch, LuGitPullRequest, LuLayers, LuListChecks, LuNetwork,
  LuScale, LuSearch, LuShieldCheck, LuWorkflow,
} from 'react-icons/lu';

// Product marks for technologies; simple symbols for engineering concepts.
// SVGs use currentColor so each category keeps its existing accent colour.
const skillIcons: Record<string, IconType> = {
  'Java': FaJava,
  'Java 21': FaJava,
  'SQL': LuDatabase,
  'Spring Boot': SiSpringboot,
  'Spring Cloud': SiSpring,
  'Spring Security': SiSpringsecurity,
  'REST APIs': LuNetwork,
  'JPA': LuDatabase,
  'Microservices': LuBoxes,
  'Apache Kafka': SiApachekafka,
  'Redis': SiRedis,
  'Resilience4j': LuShieldCheck,
  'Rule Engines': LuWorkflow,
  'Google Cloud Pub/Sub': SiGooglepubsub,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'BigQuery': SiGooglebigquery,
  'Databricks': SiDatabricks,
  'GCP': SiGooglecloud,
  'GKE / Kubernetes': SiKubernetes,
  'Docker': SiDocker,
  'CI/CD': LuWorkflow,
  'Git / GitHub': SiGithub,
  'Azure Repositories': LuGitBranch,
  'Spinnaker': SiSpinnaker,
  'Message-Based Autoscaling': LuScale,
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'Loki / Promtail': LuSearch,
  'Tempo': LuActivity,
  'Kibana': SiKibana,
  'Postman': SiPostman,
  'DSA': LuBinary,
  'System Design': LuNetwork,
  'LLD / HLD': LuLayers,
  'AI Coding Agents': LuBot,
  'Agile': LuListChecks,
  'Code Reviews': LuGitPullRequest,
};

export default function SkillIcon({ name }: { name: string }) {
  const Icon = skillIcons[name] ?? LuCode;
  return <Icon size={26} aria-hidden="true" focusable="false" className="shrink-0" />;
}
