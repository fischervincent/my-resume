import type { Recommendation } from "./Recommendations";

export const GeodisDescription = () => (
  <p>
    We worked on a webapp for clients to request, monitor and track shipping.
    <br /> The team was composed of 5 to 8 developers, with most of them in
    Mexico. 1 scrum master, 1 PO and 1 PM.
    <br />
    <br />
    During my time there we greatly improved the delivery process, the code
    quality and the security while successfully delivering great features.
    <br />
  </p>
);

export const GeodisFacts = [
  {
    title: "Delivery",
    content: (
      <p>
        During my three first weeks at Geodis we did two problematic moves to
        production that caused a lot of stress to the team and to the
        management. So I shifted the responsibility of deliveries from the
        DevOps team to the development team, and we reworked the delivery
        process. We fixed the git flow. And we added automatic release notes and
        tags on our jira tickets to know exactly what was and what was going to
        production. We went from disastrous deliveries in production every two
        weeks to stress-free deliveries every few days.
      </p>
    ),
  },
  {
    title: "Refactoring",
    content: (
      <p>
        I noticed early that there were a lot of redundancy un our code, because
        developers where used to copy-paste code. So we did some mob programming
        during two days to make to code so much simpler. We replaced 130+
        exising functions and 400+ tests by a few simple functions and 10 tests.
      </p>
    ),
  },
  {
    title: "Recruting",
    content: (
      <p>
        Before departing from Geodis, I facilitated a seamless transition by
        leading the recruitment process. Rather than presenting an overly
        attractive picture, I conducted the interviews candidly, addressing the
        project's challenges. Through pragmatic questioning and a focus on the
        essential skills needed for the role, we successfully identified three
        developers who were an excellent fit for the job, ensuring a smooth and
        secure handover upon my departure.
      </p>
    ),
  },
  {
    title: "Developer Experience",
    content: (
      <p>
        The developer experience was really low when I arrived, delivering the
        smallest feature took days and the number of bugs were increasing.
        Developers were frustrated and tired. So I convinced the management to
        invest in technical dept and developer experience. We took 15% of our
        time to work on topics like:
        <ul className="list-disc list-inside">
          <li>
            Targeted refactoring to resolve painpoints and make the coding
            experience smoother
          </li>
          <li>Using Turborepo</li>
          <li>Testing</li>
          <li>Pairing and mob programming</li>
          <li>...</li>
        </ul>
      </p>
    ),
  },
  {
    title: "Security",
    content: (
      <p>
        After three years of development, we underwent a security audit that
        uncovered numerous issues. I lead the team to resolve all these issues,
        and we investigated over 450 security alerts within our codebase. It was
        a challenging yet essential endeavor that required balancing the urgent
        need for security improvements with our commitment to delivering new
        features on schedule
      </p>
    ),
  },
];

export const GeodisRecommendations = [
  {
    author: "Laurent",
    authorTitle: "Client and Manager",
    date: "18/01/2023",
    recommendationWebsite: "Malt",
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
    recommendationWebsite: "Malt",
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
