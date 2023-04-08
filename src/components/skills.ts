export const Skill = {
  AWS: 'AWS',
  AZURE: 'Azure',
  CIRCLECI: 'CircleCI',
  CUCUMBER: 'Cucumber',
  DOCKER: 'Docker',
  GCP: 'GCP',
  CLOUD_FUNCTION: 'Cloud Function',
  GIT: 'git',
  GITHUB_ACTIONS: 'Github Actions',
  GRAPHQL: 'GraphQL',
  EXPRESS: 'Express',
  MICRO_SERVICES: 'Microservices',
  TURBOREPO: 'TurboRepo',
  JAVASCRIPT: 'Javascript',
  JEST: 'Jest',
  LAMBDA: 'Lambda',
  STEP_FUNCTION: 'Step Function',
  SQS_SNS: 'SQS/SNS',
  AURORA_SERVERLESS: 'Aurora Serverless',
  WAF: 'WAF',
  MONGODB: 'MongoDB',
  MYSQL: 'MySQL',
  NESTJS: 'NestJS',
  NEXTJS: 'NextJS',
  NODE: 'Node',
  POSTGRESQL: 'PostgreSQL',
  REACT: 'React',
  REACT_NATIVE: 'React Native',
  REDIS: 'Redis',
  REDUX: 'Redux',
  SERVERLESS_FRAMEWORK: 'Serverless Framework',
  TERRAFORM: 'Terraform',
  TYPESCRIPT: 'Typescript',
  SENTRY: 'Sentry',
  NEW_RELIC: 'New Relic',
  // METHODOLOGIES
  TDD: 'TDD',
  // ROLES
  BACKEND: 'BackEnd',
  FRONTEND: 'FrontEnd',
  FULLSTACK: 'Fullstack',
  TECHLEAD: 'Tech lead',
} as const;

export type ISkill = typeof Skill[keyof typeof Skill]