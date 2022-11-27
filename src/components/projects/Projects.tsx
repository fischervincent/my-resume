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
];

export const Projects = () => {
  return (
    <>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </>
  );
};
