import company from "../data/company-temp";
import useReveal from "../hooks/useReveal";

function Services() {

  useReveal();

  return (
    <section id="services" className="services-section py-5">
      <div className="container py-5">

        <h2 className="text-center fw-bold mb-3 fade-section">
  Our Services
</h2>

<p className="text-center text-light mb-5 fade-section">
  Delivering reliable and sustainable environmental solutions
</p>

        <div className="row g-4">

          {company.services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 fade-section"
              key={index}
            >
              <div className="service-card h-100">

                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>

                <h5 className="mb-3">
                  {service.title}
                </h5>

                <p className="service-description">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;