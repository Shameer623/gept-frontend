import company from "../data/company-temp";

function Footer() {
  return (
    <footer className="footer-clean">

      <div className="container text-center">

        <h6 className="footer-brand">
          {company.shortName}
        </h6>

        <p className="footer-contact">
          {company.email} | {company.phones.join(" | ")}
        </p>

        <p className="footer-copy">
          © 2026 {company.shortName}. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;