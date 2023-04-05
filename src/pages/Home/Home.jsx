import React from "react";

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="even-columns">
            <div>
              <h1 className="fs-primary-heading fw-bold">
                Hungry for challenges, Hungry for impact
              </h1>
              <p>
                We build advanced Mobile and Web Applications using latest
                technologies.
              </p>
            </div>
            <div>
              <img src="https://i.gifer.com/4E68.gif" alt="background" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="even-columns">
          <div>
              <img src="https://18pixels.com/img/10/869-Converted.png" alt="background" />
            </div>
            <h2 className="fs-secondary-heading fw-bold">
              Crafting technology for social change.
            </h2>
            <p>
              Run by Harvard, IIMs alumnus, we at 18Pixels create innovative
              solutions which involves rigorous research and understanding of
              critical needs of people. Right from its inception we focused on
              important sectors such as health, education, governance which
              helped us understand the complications of these sectors and we
              strive to transform them in and out over a long period of time. Be
              it an innovative consumer app or a next-gen enterprise system – we
              do it all, from product ideation and concept development to system
              rollout and scale-up.
            </p>
            <ul role="list">
              <li>Web & Enterprise Portals</li>
              <li>Augmented Reality</li>
              <li>Data Science & ML</li>
              <li>Performance Engineering</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projects">
        <h1 className="fs-primary-heading fw-bold">Our Latest Projects</h1>
        <h2 className="fs-secondary-heading fw-bold">HOW WE CONTRIBUTE TO THE GREATER GOOD</h2>
        
      </section>
    </>
  );
}

export default Home;
