import { Recommendation } from "./Recommendations";

export const EurosportDescription = () => (
  <p>
    We built from scratch a platform to ingest sports data, and a GraphQL API to
    serve it to the Eurosport native apps and websites.
    <br />
    We were a team of 7 senior developers and 2 to 3 PO.
    <br />
    <br />
    All of it was serverless, with continuous delivery, and close to 100% test
    coverage. We practiced TDD and pair programming.
    <br />
    <br />
    This job experience played a pivotal role in shaping the developer that I've
    become. I take immense pride in the work we've made.
    <br />
    <br />
    <h5 className="text-sm font-extralight">
      A few interesting things we did:
    </h5>
    By redesigning our caching strategy, we were able to improve our P95 from
    250ms to 45ms, and reduce the cost of our database by half.
    <br />
    <br />
    I changed the way we were writing gherkin tests that made it so much easier
    that each developper saved up to 2 hours a day.
    <br />
    <br />
    After noticing that terraform was not up to date with some GCP features we
    wanted to use, and because the other teams were using AWS, we decided to
    move from GCP to AWS, and from Terraform to Serverless Framework. It took 2
    devs less than 4 weeks to do this migration, and we immediatly noticed a
    better developper experience and better performances overall.
  </p>
);

export const EurosportRecommendations = [
  {
    author: "Benoît d'Oncieu",
    authorTitle: "Software Enineering Manager",
    date: "07/12/2023",
    recommendationWebsite: "LinkedIn",
    content:
      "J'ai eu le plaisir de travailler avec Vincent en tant que  " +
      "son manager technique chez Eurosport (WBD Sports). En tant  " +
      "que développeur JavaScript, Vincent a brillé par son esprit  " +
      "d'initiative, notamment en optimisant notre API GraphQL et  " +
      "en organisant des workshops techniques. Son approche  " +
      "analytique et sa capacité à aller au bout des choses ont  " +
      "grandement bénéficié à notre équipe. Vincent se distingue  " +
      "également par son écoute, son respect des autres et sa  " +
      "constance, contribuant à une atmosphère de travail positive.  " +
      "Bien qu'il ait quitté l'équipe pour voir plus de temps  " +
      "pour ses passions, son impact reste tangible. Vincent  " +
      "est sans aucun doute un atout précieux pour toute équipe !",
  },
] satisfies Recommendation[];

export const EurosportFacts = [
  {
    title: "Key API metrics",
    content: (
      <div>
        <ul className="list-disc list-inside">
          <li>
            <b>7000+</b> requests per minutes
          </li>
          <li>
            Average response time <b>22ms</b>
          </li>
          <li>
            P95 &lt; <b>45ms</b>
          </li>
          <li>Less than 0.01% of errors</li>
        </ul>
      </div>
    ),
  },
];
