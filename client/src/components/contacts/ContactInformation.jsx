import "../../styles/ContactInformation.css";
import { AiFillInstagram } from "react-icons/ai";

const ContactInformation = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="row">
          <div className="col-md left">
            <h2>Get in touch with us</h2>
            <div className="contact-details">
              <div className="details">
                <h5>Email</h5>
                <a href="mailto: tmuzendat@gmail.com" target="_blank">
                  admin@muzzestate.org
                </a>
              </div>
              <div className="details">
                <h5>Phone</h5>
                <a href="tel: +263718218456" target="_blank">
                  +263 71 821 8456
                </a>
              </div>
              <div className="details">
                <h5>LinkedIn</h5>
                <a
                  href="https://www.linkedin.com/in/tinashe-innocent-muzenda"
                  target="_blank"
                >
                  Muzz Estate
                </a>
              </div>
              <div className="details">
                <h5>Facebook</h5>
                <a
                  href="https://www.linkedin.com/in/tinashe-innocent-muzenda"
                  target="_blank"
                >
                  Muzz Estate
                </a>
              </div>
              <div className="details">
                <div className="social-links">
                  <a href=".instagram" target="_blank">
                    <span>
                      <AiFillInstagram />
                    </span>
                  </a>
                  <a href=".x" target="_blank">
                    <span>
                      <AiFillInstagram />
                    </span>
                  </a>
                  <a href=".youtube" target="_blank">
                    <span>
                      <AiFillInstagram />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md right">
            <div class="contact-card">
              <h2>CONTACT FORM</h2>
              <div class="contact-form">
                <div class="wrapper">
                  <div class="input-data">
                    <input
                      type="text"
                      id="name"
                      required
                      className="contact-input"
                    />
                    <label for="name" className="contact-label">
                      Your Name
                    </label>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="input-data">
                    <input
                      type="text"
                      id="phone"
                      required
                      className="contact-input"
                    />
                    <label for="phone" className="contact-label">
                      Your Phone
                    </label>
                  </div>
                </div>
                <div class="wrapper">
                  <div class="input-data">
                    <textarea
                      type="text"
                      id="message"
                      required
                      className="contact-input"
                    />
                    <label for="message" className="contact-label">
                      Message
                    </label>
                  </div>
                </div>

                <button>send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
