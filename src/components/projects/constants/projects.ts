import { ISkill, Skill } from "components/skills";
import { SncfConnectAndTechDescription } from "../SncfConnectAndTech";
import { EurosportDescription, EurosportFacts, EurosportRecommendations } from "../Eurosport";
import { GeodisDescription, GeodisFacts, GeodisRecommendations } from "../Geodis";
import { GraneetDescription } from "../Graneet";
import { LegalStartDescription, LegalStartRecommendation } from "../LegalStart";
import { PasscultureDescription } from "../Passculture";
import { NetatmoDescription } from "../Netatmo";
import type { Recommendation } from "../Recommendations";
import { DatapoleDescription } from "../Datapole";
import { JadeIDescription } from "../JadeI";
import { AlstomIntershipDescription } from "../Alstom";

export interface Fact {
  title: string;
  content: JSX.Element;
}

export interface IProject {
  companyName: string;
  role: string;
  dates: string;
  skills: ISkill[];
  facts: Fact[];
  Description: React.FC;
  recommendations?: Recommendation[];
}

export const projects: IProject[] = [
  {
    companyName: "Netatmo",
    role: "Backend developer",
    dates: "2023 Aug. - 2024 June (11 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.JAVASCRIPT,
      Skill.PHP,
      Skill.NODEJS,
      Skill.MONGODB,
      Skill.KAFKA,
      Skill.MICRO_SERVICES,
      Skill.CLEAN_ARCHITECTURE,
      Skill.DDD,
      Skill.JEST,
    ],
    facts: [],
    Description: NetatmoDescription
  },
  {
    companyName: "SNCF Connect & Tech",
    role: "Backend developer",
    dates: "2023 Feb. - 2023 July (6 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.JAVASCRIPT,
      Skill.KOTLIN,
      Skill.NODEJS,
      Skill.EXPRESS,
      Skill.MONGODB,
      Skill.AWS,
      Skill.LAMBDA,
      Skill.DYNAMODB,
      Skill.JEST,

    ],
    facts: [],
    Description: SncfConnectAndTechDescription
  },
  {
    companyName: "Geodis SCO",
    role: "Tech lead fullstack NodeJS/ReactJS",
    dates: "2022 sept. - 2022 dec. (8 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.JAVASCRIPT,
      Skill.REACTJS,
      Skill.NODEJS,
      Skill.EXPRESS,
      Skill.MONGODB,
      Skill.MICRO_SERVICES,
      Skill.TURBOREPO,
      Skill.AZURE,
      Skill.JEST,
    ],
    facts: GeodisFacts,
    Description: GeodisDescription,
    recommendations: GeodisRecommendations,
  },
  {
    companyName: "Legalstart",
    role: "NodeJS/AWS developer",
    dates: "2022 march - 2022 may (2 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.NODEJS,
      Skill.AWS,
      Skill.LAMBDA,
      Skill.STEP_FUNCTION,
      Skill.SERVERLESS_FRAMEWORK,
      Skill.JEST,
      Skill.CUCUMBER,
    ],
    facts: [],
    Description: LegalStartDescription,
    recommendations: LegalStartRecommendation
  },
  {
    companyName: "Graneet",
    role: "NodeJS/ReactJS developer",
    dates: "2021 nov. - 2022 feb. (3 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.REACTJS,
      Skill.NODEJS,
      Skill.NESTJS,
      Skill.POSTGRESQL,
      Skill.JEST,
    ],
    facts: [],
    Description: GraneetDescription,
  },
  {
    companyName: "Pass Culture / Polyconseil",
    role: "React-Native developer",
    dates: "2021 jul. - 2021 september. (2 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.REACT_NATIVE,
      Skill.REACTJS,
      Skill.JEST,
    ],
    facts: [],
    Description: PasscultureDescription,
  },
  {
    companyName: "Eurosport",
    role: "Tech lead NodeJS/AWS",
    dates: "2019 oct. - 2021 jul. (1 year 10 months)",
    skills: [
      Skill.JAVASCRIPT,
      Skill.NODEJS,
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
    recommendations: EurosportRecommendations,
  },
  {
    companyName: "Datapole",
    role: "JS fullstack developer",
    dates: "2018 Sept. - 2019 Sept. (13 months)",
    skills: [
      Skill.TYPESCRIPT,
      Skill.JAVASCRIPT,
      Skill.NODEJS,
      Skill.MONGODB,
      Skill.POSTGRESQL,
    ],
    facts: [],
    Description: DatapoleDescription
  },
  {
    companyName: "Jade-i",
    role: "Fullstack developer",
    dates: "2014 Sept. - 2018 July (3 years and 10 months)",
    skills: [
      Skill.JAVA,
      Skill.JEE,
      Skill.JAVASCRIPT,
      Skill.NODEJS,
      Skill.BACKBONEJS,
      Skill.MYSQL,
      Skill.ANDROID,
    ],
    facts: [],
    Description: JadeIDescription
  },
  {
    companyName: "Alstom",
    role: "Software engineer intern",
    dates: "2012 Sept. - 2013 Feb (6 months)",
    skills: [
      Skill.PYTHON,
      Skill.DJANGO,
      Skill.JAVASCRIPT,
    ],
    facts: [],
    Description: AlstomIntershipDescription
  },

];
