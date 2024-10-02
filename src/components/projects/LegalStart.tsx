import { Recommendation } from "./Recommendations";

export const LegalStartDescription = () => (
  <p>
    With a team consisting of a Product Owner, a Data Engineer, and 3-4
    developers, we created a program to calculate a fraud indicator for a
    company. <br /> We developed the rules in TypeScript on AWS Lambda with step
    functions to orchestrate the entire workflow of rules, and developed the
    infrastructure using the Serverless Framework.
  </p>
);

export const LegalStartRecommendation = [
  {
    author: "Laétitia Richard",
    authorTitle: "Software Enineering Manager",
    date: "07/12/2023",
    recommendationWebsite: "Malt",
    content:
      "Nous avons travaillé avec Vincent sur un projet pour  " +
      "lequel nous avons sollicité ses compétences en  " +
      "développement node js, il s'est de suite intégré à  " +
      "l'équipe déjà en place, il a très vite compris les  " +
      "enjeux du projet et l'environnement technique.  " +
      "Cela a été un vrai plaisir de travailler avec lui.",
  },
] satisfies Recommendation[];
