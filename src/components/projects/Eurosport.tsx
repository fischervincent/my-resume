export const EurosportDescription = () => (
  <p>
    We built from scratch a platform to ingest sports data, and a GraphQL API to
    serve it to the Eurosport native apps and websites.
    <br />
    We were a team of 7 senior developers and 2 to 3 PO.
    <br />
    <br />
    All of it was serverless, with continuous delivery, and close to 100% test
    coverage.
    <br />
    <br />
    We were working in TDD and with a lot of pair programming. This job
    experience was by far the best I had, with a lot of learning, fun challenges
    and a great team, and I cannot be more proud of the work we made.
    <br />
    <br />
    <h2 className="font-extralight">A few interesting things we did:</h2>
    By redesigning our caching strategy, we were able to improve our P95 from
    250ms to 45ms, and reduce the cost of our database by half.
    <br />
    <br />
    I changed the way we were writing gherkin tests that made it so much easier
    that each developper saved up to 2 hours a day.
    <br />
    <br />
    After noticing that terraform was not up to date with some GCP features we
    wanted to use, we decided to move from GCP to AWS, and from Terraform to
    Serverless Framework. It took 2 devs less than 4 weeks to do this migration,
    and we immediatly noticed a better developper experience and better
    performances overall.
  </p>
);

export const EurosportFacts = () => (
  <>
    <h2>About the graphql API:</h2>
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
    <br />
  </>
);
