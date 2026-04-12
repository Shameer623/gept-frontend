import { useState } from "react";
import company from "../data/company-temp";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://getp-backend-prod.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.text(); // 👈 ADD THIS

    if (response.ok) {
      alert("Message submitted successfully! We will get back to you shortly.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } else {
      console.error("Backend error:", data); // 👈 ADD THIS
      alert("Something went wrong. Please try again.");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Server error. Please try later.");
  } finally {
    setLoading(false); // already correct ✅
  }
};

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2>Contact Us</h2>
        </div>

        <div className="row g-5">

          {/* LEFT SIDE - COMPANY DETAILS */}
          <div className="col-lg-5">
            <div className="contact-info">

              <h5>{company.name}</h5>

              <p className="mt-3">
                <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                {company.address}
              </p>

              <p>
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                {company.email}
              </p>

              <p>
                <i className="bi bi-telephone-fill text-primary me-2"></i>
                {company.phones.join(" | ")}
              </p>

            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="col-lg-7">
            <div className="contact-form">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;