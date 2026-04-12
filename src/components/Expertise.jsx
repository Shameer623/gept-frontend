import useReveal from "../hooks/useReveal";

function Expertise() {

  useReveal();

 const expertiseData = [
  {
    title: "Dissolved Air Flotation (DAF)",
    description:
      "Design and implementation of DAF systems for effective removal of oil, grease, suspended solids, and colloidal matter using fine air bubble flotation principles."
  },
  {
    title: "Anaerobic Reactors (UASB / CSTR / AHR)",
    description:
      "High-rate anaerobic systems designed for energy recovery through biogas generation, including revamping and performance stabilization."
  },
  {
    title: "MBBR / FAB Technology",
    description:
      "Advanced biological treatment using high-surface-area floating media for efficient upgrading of existing plants without major civil modifications."
  },
  {
    title: "LBS Process® (PVA Gel Technology)",
    description:
      "Application of PVA Gel biocarriers to enhance biomass concentration, improve shock-load resistance and ensure stable process performance."
  },
  {
    title: "RO / UF / ZLD Solutions",
    description:
      "Design and execution of high-recovery membrane systems including UF–RO and Zero Liquid Discharge configurations."
  },
  {
    title: "Process Optimization & Energy Recovery",
    description:
      "Lifecycle-based engineering, troubleshooting, plant stabilization and energy recovery solutions for long-term operational efficiency."
  }
];

  return (
    <section id="expertise" className="expertise-section fade-section">
      <div className="container">

        <div className=" mb-5">
          <h2>Areas of Expertise</h2>
        </div>

        <div className="row g-4">

          {expertiseData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="expertise-card h-100">

                <h5 className="mb-3">
                  {item.title}
                </h5>

                <p className="mb-0">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Expertise;