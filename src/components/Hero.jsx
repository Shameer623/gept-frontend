import company from "../data/company-temp";
import plant1 from "../assets/images/plant1.jpg";

function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${plant1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <div className="container">
        <h1 className="fw-bold" style={{ fontSize: "4rem" }}>
          {company.name}
        </h1>

        <h3 className="mt-4">
          {company.heroTitle}
        </h3>

        <p className="mt-3" style={{ opacity: 0.9 }}>
          {company.heroSubtitle}
        </p>

        <a href="#services">
          <button className="btn btn-primary mt-4 px-5 py-2 rounded-pill">
            Explore Our Services
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;