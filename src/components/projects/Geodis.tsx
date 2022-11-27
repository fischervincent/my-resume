export const GeodisDescription = () => (
  <p>
    We worked on a webapp to request, monitor and track shipping. The team was
    composed of 5 to 8 developers, with most of them in Mexico, 1 scrum master,
    1 PO and 1 PM.
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

export const GeodisFacts = () => (
  <>
    <p>
      During my two first weeks, we did two moves to prod that went really wrong
      and caused a lot of stress to the team. The git history was so broken in
      the production branch that we deleted it... So I reworked the delivery
      process. We had <b>no more issues</b> since, and we were able to move to
      prod up to <b>2 times a day</b> without any stress.
    </p>
    <br />
    <p>
      I did a refacto in 2 day that made the code so much simpler that one
      simple and clear function could have replaced 130+ exising functions. 1
      simple generic function and 8 tests instead of 130+ functions and 400+
      tests.
    </p>
  </>
);
