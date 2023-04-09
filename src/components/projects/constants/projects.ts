import { ISkill, Skill } from "components/skills";
import { EurosportDescription, EurosportFacts } from "../Eurosport";
import { GeodisDescription, GeodisFacts } from "../Geodis";
import { GraneetDescription } from "../Graneet";
import { LegalStartDescription } from "../LegalStart";
import { PasscultureDescription } from "../Passculture";

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
    dates: "2022 sept. - 2022 dec. (8 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.REACT,
      Skill.NODE,
      Skill.EXPRESS,
      Skill.MONGODB,
      Skill.MICRO_SERVICES,
      Skill.TURBOREPO,
      Skill.AZURE,
      Skill.JEST,
    ],
    facts: GeodisFacts,
    Description: GeodisDescription,
  },
  {
    companyName: "Legalstart",
    role: "Node/AWS Developer",
    dates: "2022 march - 2022 may (2 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.NODE,
      Skill.AWS,
      Skill.LAMBDA,
      Skill.STEP_FUNCTION,
      Skill.SERVERLESS_FRAMEWORK,
      Skill.JEST,
      Skill.CUCUMBER,
    ],
    facts: [],
    Description: LegalStartDescription,
  },
  {
    companyName: "Graneet",
    role: "Node/React Developer",
    dates: "2021 nov. - 2022 feb. (3 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.REACT,
      Skill.NODE,
      Skill.NESTJS,
      Skill.POSTGRESQL,
      Skill.JEST,
    ],
    facts: [],
    Description: GraneetDescription,
  },
  {
    companyName: "Pass Culture / Polyconseil",
    role: "React-Native Developer",
    dates: "2021 jul. - 2021 september. (2 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.REACT_NATIVE,
      Skill.REACT,
      Skill.JEST,
    ],
    facts: [],
    Description: PasscultureDescription,
  },
  {
    companyName: "Eurosport",
    role: "Tech lead",
    dates: "2019 oct. - 2021 jul. (1 year 10 months)",
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
      Skill.JEST,
      Skill.CUCUMBER,
      Skill.TDD,
      Skill.SENTRY,
      Skill.NEW_RELIC,
    ],
    facts: EurosportFacts,
    Description: EurosportDescription,
  },
];
