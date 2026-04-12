import plantImage from "../assets/images/logo.jpg";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-6">

            <h2 className="fw-bold mb-4 text-white">
              About Global Enviro Powertech 
            </h2>

            <p className="text-light mb-4">
              Global Enviro Power Tech (GEPT) is an Indian environmental engineering and wastewater management enterprise dedicated to delivering sustainable, energy-efficient, and regulatory-compliant solutions. Founded by professionals with nearly two decades of hands-on industry experience, GEPT specializes in the design, execution, commissioning, and operation of advanced treatment technologies.

            </p>

            <p className="text-light mb-4">
              With expertise spanning effluent treatment plants (ETP), sewage treatment plants (STP), anaerobic systems, zero liquid discharge (ZLD), RO/UF systems, and O&M practices, GEPT is committed to providing technically sound and commercially viable solutions. Our mission is to help industries meet stringent environmental norms while ensuring long-term sustainability.

            </p>

            <div className="row mt-4">
              <div className="col-6 mb-3">
                <div className="about-highlight-dark">
                  ✔ Experienced Technical Team
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="about-highlight-dark">
                  ✔ End-to-End Solutions
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="about-highlight-dark">
                  ✔ Industrial & Municipal Expertise
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="about-highlight-dark">
                  ✔ Compliance & Sustainability Focus
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 text-center">
            <div className="about-image-wrapper">
              <img
                src={plantImage}
                alt="Bio Digester Plant"
                className="img-fluid about-image"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;