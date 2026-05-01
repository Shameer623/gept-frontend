import { useState } from "react";
import company from "../data/company-temp";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.text();

      if (response.ok) {
        setSuccessMessage(
          "Thank you! We received your enquiry. Our team will contact you shortly."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });

        window.scrollTo({
          top: document.getElementById("contact").offsetTop - 70,
          behavior: "smooth"
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        console.error("Backend error:", data);

        setErrorMessage(
          data || "Something went wrong. Please try again."
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);

      setErrorMessage("Server error. Please try later.");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Contact Us</h2>
        </div>

        <div className="row g-5">
          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
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
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone / WhatsApp Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
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

                {successMessage && (
                  <div className="alert alert-success">
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div className="alert alert-danger">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
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