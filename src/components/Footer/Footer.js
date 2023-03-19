import React from "react";
import webtropiaLogo from "../../assets/images/webtropia_logo.svg";
import zeroglogo from "../../assets/images/logo.png";
import "../Landing/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img alt="ZeroG Network Logo" src={zeroglogo} className="img-zerog" />
      <section id="powered-by" className="powered-by section-bg">
        <div className="container">
          <h3>Powered by:</h3>

          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <a href="https://www.webtropia.com/?kwk=160113039048060213198196">
                <img src={webtropiaLogo} className="img-fluid" alt="Webtropia" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <p>Copyright &copy; ZeroG Network 2020 - 2023</p>
    </footer>
  );
}

export default Footer;
