import useReveal from "../hooks/useReveal";

function WhyChooseUs() {

  useReveal();

  const reasons = [
    {
      icon: "bi-award-fill",
      title: "Industry Experience",
      description:
        "Strong expertise in water and wastewater treatment solutions with proven domain experience across industrial and municipal projects."
    },
    {
      icon: "bi-lightning-fill",
      title: "Reliable Execution",
      description:
        "Structured project delivery approach ensuring technical precision, regulatory compliance and long-term plant stability."
    },
    {
      icon: "bi-shield-check",
      title: "Quality & Compliance",
      description:
        "Focused on sustainable engineering practices, environmental standards and lifecycle-based performance optimization."
    }
  ];

  return (
    <section id="why" className="why-section fade-section">
      <div className="container">

        <div className="mb-5">
          <h2>Why Choose Us</h2>
        </div>

        <div className="row g-5">

          {reasons.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="why-feature">

                <div className="why-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;