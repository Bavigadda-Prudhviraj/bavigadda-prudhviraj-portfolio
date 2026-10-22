import {
  siApachekafka,
  siDatabricks,
  siDocker,
  siGithub,
  siGooglebigquery,
  siGooglecloud,
  siGooglepubsub,
  siGrafana,
  siHibernate,
  siKibana,
  siKubernetes,
  siMongodb,
  siMysql,
  siOpenid,
  siPostgresql,
  siPostman,
  siPrometheus,
  siRabbitmq,
  siRedis,
  siSpinnaker,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSwagger,
  type SimpleIcon,
} from 'simple-icons';

/**
 * Brand marks for skills, keyed by skill name. Skills without a recognisable logo
 * (Java, SQL, DSA, Code Reviews…) use an icon from skillGlyphs instead, which takes priority.
 */
export const skillIcons: Record<string, SimpleIcon> = {
  'Git / GitHub': siGithub,
  'Spring Boot': siSpringboot,
  'Spring Cloud': siSpring,
  'Spring Cloud Stream': siSpring,
  'Spring Security': siSpringsecurity,
  JPA: siHibernate,
  'OAuth2 / OpenID Connect': siOpenid,
  'OpenAPI / Swagger': siSwagger,
  'Apache Kafka': siApachekafka,
  RabbitMQ: siRabbitmq,
  Redis: siRedis,
  'Google Cloud Pub/Sub': siGooglepubsub,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  BigQuery: siGooglebigquery,
  Databricks: siDatabricks,
  GCP: siGooglecloud,
  'GKE / Kubernetes': siKubernetes,
  Docker: siDocker,
  'Docker Compose': siDocker,
  Spinnaker: siSpinnaker,
  Prometheus: siPrometheus,
  Grafana: siGrafana,
  'Loki / Promtail': siGrafana,
  Tempo: siGrafana,
  Kibana: siKibana,
  Postman: siPostman,
};

/** Brand colour, unless it's too dark to read on the ink background. */
export function brandColor(icon: SimpleIcon, fallback: string) {
  const n = parseInt(icon.hex, 16);
  const luminance = 0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  return luminance < 70 ? fallback : `#${icon.hex}`;
}
