import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import design1 from "../assets/images/design1.jpg";
import design2 from "../assets/images/design2.jpg";
import project1 from "../assets/images/plant2.jpg";
import project2 from "../assets/images/plant3.jpg";
import project3 from "../assets/images/plant4.jpg";
import project4 from "../assets/images/hero.jpg";

import useReveal from "../hooks/useReveal";

function Projects() {

  useReveal();

  return (
    <>
      {/* ================= ENGINEERING SECTION ================= */}
      {/* ================= ENGINEERING SECTION ================= */}
<section id="projects" className="engineering-section fade-section">
  <div className="container">

    <div className="row align-items-center g-5">

      {/* LEFT CONTENT */}
      <div className="col-lg-6">

        <h2 className="engineering-title">
          Engineering & Process Design Excellence
        </h2>

        <p className="engineering-text">
          Advanced engineering solutions for high-performance
          water and wastewater treatment systems including
          process optimization, automation integration and
          lifecycle efficiency enhancement.
        </p>

        <div className="engineering-list">
          <div>✔ Detailed Process Engineering</div>
          <div>✔ High-Rate Biological & Membrane Systems</div>
          <div>✔ Energy Recovery & Optimization</div>
          <div>✔ Automation & Control Integration</div>
          <div>✔ Zero Liquid Discharge (ZLD) Concepts</div>
        </div>

      </div>

      {/* RIGHT IMAGES */}
      <div className="col-lg-6">
        <div className="engineering-images">

          <div className="engineering-img-top">
            <img src={design1} alt="Engineering Design 1" />
          </div>

          <div className="engineering-img-bottom">
            <img src={design2} alt="Engineering Design 2" />
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      {/* ================= EXECUTED PROJECTS ================= */}
      <section className="projects-section fade-section">
        <div className="container text-center">

          <h2 className="mb-5">Our Executed Projects</h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {[
              { img: project1, title: "Bio Digester Installation" },
              { img: project2, title: "Reverse Osmosis plant" },
              { img: project3, title: "Duel Gas Burner" },
              { img: project4, title: "Advanced MBBR technology - Mixed Bed Bio reacter" },
            ].map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <img src={project.img} alt={project.title} />
                  <div className="project-overlay">
                    <h6>{project.title}</h6>
                    <p>Executed with precision & compliance.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </>
  );
}

export default Projects;