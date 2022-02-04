import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Banner from "../../assets/images/Banner.png";
import Card from "react-bootstrap/Card";
import Image from "../../assets/images/Chairman.jpg";
const About = () => {
  return (
    <>
      <Topnav />
      <Nav />

      {/* intro */}
      <section class="wide-100 intro-banner mb-45">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6">
              <div class="info-4-img text-center wow fadeInUp"></div>
            </div>
            <div class="col-lg-12">
              <div class="txt-block  wow fadeInUp">
                <p>
                  <img alt="" src={Banner} />
                </p>

                <h3>
                  <strong>Introduction&nbsp;</strong>
                </h3>

                <p>
                  Welcome to Devdaha Mediccal College and Ressearch
                  Institute,situated at Devdaha - 9, Bhaluhi- Rupandehi, Nepal.
                </p>

                <p>
                  Founded in 2008, it is serving as a referral center with a 400
                  bedded well-equipped hospital with a newer technical support
                  system. DMCRI is committed to provide quality service and
                  medical care to every citizen. We provide a friendly
                  environment to patients. We at DMCRI strive hard to provide
                  high quality tertiary services to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our legacy */}
      <section id="info-4" class="legacy-section ">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-12">
              <div class="txt-block">
                <h3>
                  <b>Our Legacy</b>
                </h3>

                <p>
                  DMCRI has committed to bringing out the best of its medical
                  education, nursing education, paramedical education, and
                  unparalleled health services through its hospital, within a
                  very affordable price-range. &nbsp;
                </p>

                <p>
                  We commit to produce responsible professionals who are
                  committed to their profession and practice with clinical
                  excellence, compassion and utmost sincerity. Excellent in
                  academic and clinical medicine; research and training;
                  nurturing passion and enthusiasm into achievement and
                  theoretical knowledge into evidence based practice and
                  research.
                </p>

                <p>
                  Vision:To develop leaders and knowledge center which will be
                  recognized for its academic pursue not only in Nepal but also
                  globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* board of directors*/}
      <section id="info-4" class="bod-section">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-12">
              <div class="txt-block">
                <h3>
                  <b>Board of Directors</b>
                </h3>
              </div>
              <div class="row">
                <div className="col-lg-4">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Image} className="service" />
                    <Card.Body>
                      <Card.Title className="mx-20">Jay Chandra</Card.Title>
                      <Card.Text>Chairman</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Image} className="service" />

                    <Card.Body>
                      <Card.Title className="mx-20">Jay Chandra</Card.Title>
                      <Card.Text>Chairman</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-4">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Image} className="service" />

                    <Card.Body>
                      <Card.Title className="mx-20">Jay Chandra</Card.Title>
                      <Card.Text>Chairman</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
