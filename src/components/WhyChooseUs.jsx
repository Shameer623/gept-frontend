import useReveal from "../hooks/useReveal";

function WhyChooseUs() {

  useReveal();

  const reasons = [
  {
    icon: "bi-sliders",
    title: "Customized Treatment Solutions",
    description:
      "Tailor-made wastewater and water treatment systems designed based on industry-specific process requirements and discharge standards."
  },
  {
    icon: "bi-people-fill",
    title: "Experienced Technical Team",
    description:
      "Strong engineering and execution team with hands-on expertise in ETP, STP, RO, ZLD and industrial wastewater technologies."
  },
  {
    icon: "bi-shield-check",
    title: "Pollution Compliance Support",
    description:
      "Complete support for environmental compliance, pollution control norms, documentation and sustainable operational practices."
  },
  {
    icon: "bi-lightning-charge-fill",
    title: "Energy Efficient Systems",
    description:
      "Focused on optimized treatment performance with reduced operational costs and energy-efficient process integration."
  },
  {
    icon: "bi-wrench-adjustable-circle-fill",
    title: "Quality Installation & Support",
    description:
      "Professional installation, commissioning and reliable after-sales support ensuring long-term operational stability."
  },
  {
    icon: "bi-clock-history",
    title: "On-Time Project Execution",
    description:
      "Structured planning and execution methodology ensuring timely delivery with technical precision and project reliability."
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
            <div className="col-lg-4 col-md-6" key={index}>
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