// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breadcrums from "../../components/Breadcrums";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import Slide from "react-reveal/Slide";
import ScrollToTop from "../../components/ScrollToTop";
const Contact = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="Contact" />
      {/*contact-us */}
      <section className="contact-us">
        <Container>
          <Row>
            <Col md={6}>
              <div className="footer--list">
                {/* <h5>Contact Details :</h5> */}
                <div className="departments--title">
                  <h3 class="h3-md steelblue-color">Contact Details : </h3>
                  <span className="line">.</span>
                </div>
                <Slide bottom>
                  <div>
                    <span className="footer--list-items">
                      <FaMapMarkerAlt className="mr-13" />
                      Bhaluhi, Rupandehi, Nepal
                    </span>
                    <br />

                    <span className="footer--list-items">
                      <FaPhoneAlt className="mr-13" />
                      +977-71-403001, +977-71-403002
                    </span>
                    <br />

                    <span className="footer--list-items">
                      <FaEnvelope className="mr-13" />{" "}
                      devdahamedicalcollege@gmail.com
                    </span>
                  </div>
                </Slide>
              </div>

              <br />

              <Slide bottom>
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14137.058581950134!2d83.5388337!3d27.6472827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0796df18000210e!2sDevdaha%20Medical%20College%20%26%20Research%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1644035664011!5m2!1sen!2snp"
                    title="DMCIR"
                    width="100%"
                    height="390"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Slide>
              {/* <ContactForm /> */}
            </Col>
            <Col md={6}>
              <ContactForm />
              {/* <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14137.058581950134!2d83.5388337!3d27.6472827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb0796df18000210e!2sDevdaha%20Medical%20College%20%26%20Research%20Institute%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1644035664011!5m2!1sen!2snp"
                  title="DMCIR"
                  width="100%"
                  height="630"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
