import useReveal from "../hooks/useReveal";

function Industries() {

  useReveal();

  const industries = [
    "Pharmaceutical (Pharma)",
    "Hospitals & Healthcare",
    "Chemical Industries",
    "Distilleries & Breweries",
    "Textile & Dyeing",
    "Food Processing",
    "Dairy & Milk Processing",
    "Beverage & Soft Drink Industries",
    "Automobile Industries",
    "Hotels & Resorts",
    "Paper & Pulp Industries",
    "Engineering & Fabrication Units",
    "Commercial & Residential Projects",
    "Municipal Sewage Treatment Projects"
  ];

  return (
    <section id="industries" className="industries-section fade-section">

      <div className="container">

        <div className="mb-5">
          <h2>Industries We Serve</h2>

          <p className="industries-subtitle">
            Delivering customized water and wastewater treatment solutions
            across diverse industrial and commercial sectors.
          </p>
        </div>

        <div className="row g-4">

  {industries.map((industry, index) => (
    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>

      <div className="industry-item">
        <span className="industry-check">✓</span>
        {industry}
      </div>

    </div>
  ))}

</div>

      </div>

    </section>
  );
}

export default Industries;