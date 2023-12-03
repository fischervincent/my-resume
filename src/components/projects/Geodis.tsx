import type { Recommendation } from "./Recommendations";

export const GeodisDescription = () => (
  <p>
    We worked on a webapp to request, monitor and track shipping.
    <br /> The team was composed of 5 to 8 developers, with most of them in
    Mexico, 1 scrum master, 1 PO and 1 PM.
    <br />
    <br />
    One of the first thing I did was making the delivery process safer, and
    integrated automatic release notes sent to our stakeholders.
    <br />
    <br />
    In this project DX was terrible, it was taking so much time to deliver the
    smallest feature, and we constantly had bugs. The data moving from backend
    to front end and front end to backend was becoming more and more complex.
    <br />
    The architecture was micro services, with about 25 services.
    <br />
    Since we were only 1 dev team and it would stay that way, I decided with the
    support of the team to slowly migrate to only 1 service instead of 6 for the
    API that serves the frontend, migrate the frontend to typescript and use
    <b>TRPC</b> to be <b>typesafe</b> from the backend to the frontend by
    inference. <b>Safer and much simpler code</b>. <b>Typesafe</b> and
    <b>straight forward</b>. In average 7 new files for a new feature, instead
    of 20 before.
  </p>
);

export const GeodisFacts = [
  {
    title: "Delivery",
    content: (
      <p>
        During my two first weeks, we did two moves to prod that went really
        wrong and caused a lot of stress to the team. The git history was so
        broken in the production branch that we deleted it... So I reworked the
        delivery process. We had <b>no more issues</b> since, and we were able
        to move to prod up to <b>2 times a day</b> without any stress.
      </p>
    ),
  },
  {
    title: "Refacto",
    content: (
      <p>
        I did a refacto in 2 day that made the code so much simpler that one
        simple and clear function could have replaced 130+ exising functions. 1
        simple generic function and 8 tests instead of 130+ functions and 400+
        tests.
      </p>
    ),
  },
  {
    title: "Recruting",
    content: (
      <p>
        I did a refacto in 2 day that made the code so much simpler that one
        simple and clear function could have replaced 130+ exising functions. 1
        simple generic function and 8 tests instead of 130+ functions and 400+
        tests.
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        I did a refacto in 2 day that made the code so much simpler that one
        simple and clear function could have replaced 130+ exising functions. 1
        simple generic function and 8 tests instead of 130+ functions and 400+
        tests.
      </p>
    ),
  },
];

export const GeodisRecommendations = [
  {
    author: "Laurent",
    authorTitle: "Client and Manager",
    date: "18/01/2023",
    content:
      "Merci à Vincent qui a contribué à notre produit en portant " +
      "un regard sans concession sur l'état du code et qui nous a " +
      "accompagné en proposant et en mettant en oeuvre une véritable" +
      " roadmap technique (revue de l'architecture, du tooling, des " +
      "patterns...) Vincent quitte sa mission en laissant place nette," +
      " nous dotant de fondations solides pour bâtir la suite. Profil " +
      "senior, que je recommande sans réserve à tout porteur de " +
      "mission susceptible de lui offrir sujet à sa mesure.",
  },
  {
    author: "Lucas",
    authorTitle: "Developer",
    date: "10/01/2023",
    content:
      "Un tech lead qui tire toute l'équipe vers le haut. " +
      "Vincent à su trouver l'équilibre pour guider l'équipe " +
      "dans ses décisions techniques tout en laissant chaque " +
      "développeur y prendre pleinement sa place, libre de " +
      " proposer et d'implémenter des solutions." +
      "Vincent a de l'expérience sur des applications à fort traffic " +
      "et une large culture tech. C'est très enrichissant de " +
      "travailler et de discuter avec lui.",
  },
] satisfies Recommendation[];
