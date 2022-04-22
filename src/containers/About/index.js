// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Banner from "../../assets/images/Banner.png";
// import Card from "react-bootstrap/Card";
import Breadcrums from "../../components/Breadcrums";
// import Image from "../../assets/images/Chairman.png";
import Jay from "../../assets/images/Jay.png";
import Prakash from "../../assets/images/Prakash.png";
// import Image1 from "../../assets/images/Chairman.png";
import SideCard from "../../components/SideCard";

import Slide from "react-reveal/Slide";
import ScrollToTop from "../../components/ScrollToTop";

const About = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="About Us" />

      {/* intro */}
      <section class="wide-100 intro-banner mb-45">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6">
              <div class="info-4-img text-center wow fadeInUp"></div>
            </div>

            <div class="col-lg-12">
              <div class="txt-block  wow fadeInUp">
                {/* <Slide bottom> */}
                <p>
                  <img alt="" src={Banner} />
                </p>
                {/* </Slide> */}
                {/* <h3>
                  <strong>Introduction&nbsp;</strong>
                </h3> */}

                <div className="departments--title">
                  <h3 class="h3-md steelblue-color">Introduction</h3>
                  <span className="line">.</span>
                </div>
                <Slide bottom>
                  <p>
                    Welcome to Devdaha Medical College and Research
                    Institute,situated at Devdaha - 9, Bhaluhi- Rupandehi,
                    Nepal.
                  </p>

                  <p>
                    Founded in 2005, it is serving as a referral center with a
                    300 bedded well-equipped hospital with a newer technical
                    support system. DMCRI is committed to provide quality
                    service and medical care to every citizen. We provide a
                    friendly environment to patients. We at DMCRI strive hard to
                    provide high quality tertiary services to our clients.
                  </p>
                  <p>
                    Devdaha Medical College & Research Institute laid down its
                    academic foundation by starting certificate level of Nursing
                    program under CTEVT, and then after a year extended MBBS
                    Program under Kathmandu University was initiated. In the
                    year 2074 saw addition of HA Program under CTEVT. Devdaha
                    Medical College and Research Institute (Pvt.) Ltd. aims to
                    produce quality medical professionals they can compete in
                    the context of national and international level. Institution
                    has been determined and dedicated to take any sort of
                    challenges to provide quality medical education and health
                    services.{" "}
                  </p>
                </Slide>
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
                {/* <h3>
                  <b>Our Legacy</b>
                </h3> */}

                <div className="departments--title">
                  <h3 class="h3-md steelblue-color">Our Legacy</h3>
                  <span className="line">.</span>
                </div>
                <Slide bottom>
                  <p>
                    DMCRI has committed to bringing out the best of its medical
                    education, nursing education, paramedical education, and
                    unparalleled health services through its hospital, within a
                    very affordable price-range. &nbsp;
                  </p>

                  <p>
                    Our goal is to provide affordable health services to the
                    needy people (low economic level) and quality education to
                    the medical students. We have got an experience by operating
                    Lumbini Medical College that affordable health services and
                    quality education is the important factors to operate
                    teaching hospital. Besides this we are planning to establish
                    corporate hospital at Kalikanagar, Butwal Sub Metropolitan
                    City as a subsidiary of Devdaha Medical College; for those
                    people who want to take advance healthcare facilities.
                  </p>

                  <p>
                    Vision:To develop leaders and knowledge center which will be
                    recognized for its academic pursue not only in Nepal but
                    also globally.
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* messages */}
      <Slide bottom>
        <section className="message-section">
          <section class="px-65 info-section">
            <div class="container">
              <div class="row d-flex align-items-center">
                <div class="col-lg-6">
                  <div class="info-4-img text-center wow fadeInUp">
                    <img class="img-fluid" src={Jay} alt="director" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <SideCard
                    title="Words from Hospital Director"
                    // founder="Dr. Jay Raj Banjara"
                    content="It is our great pleasure to introduce Devdaha Medical College and Research Institute.
                  "
                    content1="Health care services in the contemporary period are rapidly growing with new development of
                  medicine and treatment therapy. As a hospital Director I would like to take this opportunity to
                  offer comprehensive and extensive medical Services to serve patients of Lumbini Province and
                  all over the Country with approving equipment and facilities in our hospital. In an ethical,
                  compassionate and caring environment we try our best to provide excellent medical, surgical
                  and nursing treatment and counseling to all patients and visitors."
                    content2="Though we have passed through many countless challenges, we have stood with the efforts of
                  inspirations and dedications of a qualified Medical team and foresighted administrative team to
                  upraise this institution to a level of high standard health care."
                    content3="We would like to reassure that in upcoming days we will update with more specialties, advanced equipment and facilities."
                    content4="Thank you,"
                    content5=" Dr Jay Raj Sharma"
                    content6="Hospital Director"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Slide>

      <Slide bottom>
        <div className="hr">
          <div className="container">
            <hr />
          </div>
        </div>
      </Slide>

      <Slide bottom>
        <section className="message-section">
          <section class="px-65 info-section">
            <div class="container">
              <div class="row d-flex align-items-center">
                <div className="col-lg-6">
                  <SideCard
                    title="Words from the Principal"
                    // founder="Dr. Prakash Chandra Maharjan"
                    content="It gives me immense pleasure to welcome you at Devdaha Medical College and Research Institute."
                    content1="DMCRI is a prestigious institute of Terai Region of Nepal, where you can enjoy environment and taste of cultures of both Nepal and India. DMCRI has highly qualified and experienced teachers who imparts high quality of education and latest skills by innovative techniques, its diagnosis and treatment."
                    content2="Devdaha is a good place to visit for those who believe in spirituality. The vision of DMCRI is to distinguish itself on top ranking diverse."
                    content3="It is our honor to state that both national and international graduates of DMCRI have proved
                  us a successful platform of quality medical education and services. I welcome you all and extend my heartest wishes for every success you deserve."
                    content4="Thank you,"
                    content5="Dr. Prakash Chandra Maharjan"
                    content6="Principal"
                  />
                </div>
                <div class="col-lg-6">
                  <div class="info-4-img text-center wow fadeInUp">
                    <img class="img-fluid" src={Prakash} alt="principal" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Slide>
      {/* board of directors*/}
      {/* <section id="info-4" class="bod-section">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-12">
              <div class="txt-block">
                <h3>
                  <b></b>
                </h3>
              </div>
              <div class="row">
                <div className="col-lg-3">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Image} className="service" />
                    <Card.Body>
                      <Card.Title className="mx-20">
                        Gopal Bahadur Pokharel
                      </Card.Title>
                      <Card.Text>Chairman</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Jay} className="service" />

                    <Card.Body>
                      <Card.Title className="mx-20">
                        Dr. Jay Raj Banjara
                      </Card.Title>
                      <Card.Text>Hospital Director</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Prakash} className="service" />

                    <Card.Body>
                      <Card.Title className="mx-20">
                        Dr. Prakash Chandra Maharjan
                      </Card.Title>
                      <Card.Text>Principal</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3">
                  <Card className="cardWidth aboutCard">
                    <Card.Img variant="top" src={Prakash} className="service" />

                    <Card.Body>
                      <Card.Title className="mx-20">
                        Dr. Prakash Chandra Maharjan
                      </Card.Title>
                      <Card.Text>Principal</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default About;
