import { EurosportDescription, EurosportFacts } from "./Eurosport";
import { GeodisDescription, GeodisFacts } from "./Geodis";
import { Project } from "./Project";

// decided to use react on this because I want a search feature
// to filter projects

const projects = [
  {
    companyName: "Geodis SCO",
    role: "Tech lead",
    dates: "2022 sept. - today",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Micro services",
      "Turborepo",
      "Azure",
    ],
    Facts: GeodisFacts,
    Description: GeodisDescription,
  },
  {
    companyName: "Eurosport",
    role: "Tech lead",
    dates: "2019 oct. - 2021 jul.",
    skills: [
      "Javascript",
      "Node.js",
      "graphQL",
      "AWS",
      "postgreSQL",
      "Serverless",
      "GCP",
      "Terraform",
      "CircleCI",
    ],
    Facts: EurosportFacts,
    Description: EurosportDescription,
  },
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-16">
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
};
