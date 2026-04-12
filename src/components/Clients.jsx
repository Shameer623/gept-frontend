import useReveal from "../hooks/useReveal";
import dabur from "../assets/clients/dabur.png";
import carlsberg from "../assets/clients/carlsberg.png";
import waves from "../assets/clients/waves.png";
import spectrum from "../assets/clients/spectrum.png";
import dhanushree from "../assets/clients/dabur.png";

function Clients() {

  useReveal();

  const clients = [
    { name: "Dabur India Limited", logo: dabur },
    { name: "Carlsberg India Limited", logo: carlsberg },
    { name: "Waves Breweries India Ltd", logo: waves },
    { name: "Spectrum Electricals Pvt. Ltd", logo: spectrum },
    { name: "Dhanushree Metals Pvt. Ltd", logo: dhanushree },
  ];

  return (
    <section id="clients" className="clients-section fade-section">
      <div className="container">

        <div className="mb-5">
          <h2>Our Clients</h2>
          <p className="clients-subtitle">
            Trusted by leading industrial and manufacturing organizations across India.
          </p>
        </div>

        <div className="clients-slider">
          <div className="clients-track">

            {clients.concat(clients).map((client, index) => (
              <div className="client-card" key={index}>
                <img src={client.logo} alt={client.name} />
                <p>{client.name}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;