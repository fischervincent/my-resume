import { ISkill, Skill } from "components/skills";
import { EurosportDescription, EurosportFacts } from "../Eurosport";
import { GeodisDescription, GeodisFacts } from "../Geodis";

export interface Fact {
  title: string;
  content: JSX.Element;
}

interface IProject {
  companyName: string;
  role: string;
  dates: string;
  skills: ISkill[];
  facts: Fact[];
  Description: React.FC;
}

export const projects: IProject[] = [
  {
    companyName: "Geodis SCO",
    role: "Tech lead",
    dates: "2022 sept. - today",
    skills: [
      Skill.REACT,
      Skill.TYPESCRIPT,
      Skill.NODE,
      Skill.EXPRESS,
      Skill.MICRO_SERVICES,
      Skill.TURBOREPO,
      Skill.AZURE,
    ],
    facts: GeodisFacts,
    Description: GeodisDescription,
  },
  {
    companyName: "Eurosport",
    role: "Tech lead",
    dates: "2019 oct. - 2021 jul.",
    skills: [
      Skill.JAVASCRIPT,
      Skill.NODE,
      Skill.GRAPHQL,
      Skill.AWS,
      Skill.SQS_SNS,
      Skill.AURORA_SERVERLESS,
      Skill.POSTGRESQL,
      Skill.SERVERLESS_FRAMEWORK,
      Skill.GCP,
      Skill.CLOUD_FUNCTION,
      Skill.TERRAFORM,
      Skill.CIRCLECI,
      Skill.CUCUMBER,
      Skill.TDD,
      Skill.SENTRY,
      Skill.NEW_RELIC,
    ],
    facts: EurosportFacts,
    Description: EurosportDescription,
  },
];
