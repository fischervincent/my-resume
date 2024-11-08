import { Recommendation } from "./Recommendations";

export const NetatmoDescription = () => (
  <p>
    Netatmo is a leading smart home technology company. I joined motivated to
    deliver significant value to a vast number of users while tackling complex
    technical challenges.
    <br />
    <br /> I worked as a backend developer, in the Power Lighting and Weather
    team composed of 4 developers.
    <br />
    In addition to fixing bugs and adding features, I contributed to the code
    refactoring for clean architecture and best practices. I also did the
    technical analysis for a significant new feature in the Netatmo's business
    strategy: offline installation for professional installers.
    <br />
  </p>
);

export const NetatmoRecommendation = [
  {
    author: "Florian Le Vern",
    authorTitle: "Enineering Manager",
    date: "29/10/24",
    recommendationWebsite: "LinkedIn",
    content:
      "I had the opportunity to work with Vincent " +
      "over the past year on a freelance basis at " +
      "Netatmo. He brought a wealth of knowledge in " +
      "coding best practices and demonstrated a meticulous " +
      "attention to detail that greatly benefited our team’s " +
      " output and project quality. " +
      "Vincent has a solid grasp of Typescript, which " +
      "helped reinforce our team’s adherence to high standards. " +
      "His structured approach to code and commitment to clean " +
      "architecture ensured our projects were reliable and " +
      "easier to maintain. He always made insightful contributions " +
      "to our team, especially around process improvements and organization. " +
      "I recommend Vincent as a highly skilled developer who values " +
      "quality and consistency. I appreciate his contributions " +
      "and look forward to seeing where his career path leads.",
  },
] satisfies Recommendation[];
