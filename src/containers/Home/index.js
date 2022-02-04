import React from "react";
import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Banner from "../../assets/images/Banner.png";
import AboutCard from "../../components/AboutCard";
import NoticeCard from "../../components/NoticeCard";
import Image from "../../assets/images/Chairman.jpg";
import SideCard from "../../components/SideCard";
import Appointment from "../../assets/images/appointment.png";
import Hospital from "../../assets/images/hospital.png";
import College from "../../assets/images/hospital.png";
import ServiceCard from "../../components/ServiceCard";
import Team from "../../assets/images/team.jpg";
const Home = () => {
  return (
    <>
      <Topnav />
      <Nav />

      {/* hero section */}
      <section className="hero-section">
        <div className="d-flex">
          <img src={Banner} alt="banner" />
        </div>
        <div className="container">
          <div className="figcaption">
            <p className="desc">
              <span className="line"> A heritage </span>
              In care, <br />
              A reputation in <br />
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="about-section">
        <div className="container">
          <div className="row notice">
            <div className="col-md-6">
              <AboutCard
                title="About Us"
                content="Devdaha Medical College was established in 2008 situated at Devdaha
              - 9, Bhaluhi- Rupandehi, Nepal. Currently, it is serving as a
              referral center with a 400 bedded well-equipped hospital with a
              newer technical support system. DMCRI is committed to provide
              quality service and medical care to every citizen. We provide a
              friendly environment to patients. We at DMCRI strive hard to provide
              high quality tertiary services to our clients."
                btnText="Read More"
              />
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-5 noticeCard">
              <NoticeCard />
            </div>
          </div>
        </div>
      </section>

      {/* director */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-lg-6">
                <div class="info-4-img text-center wow fadeInUp">
                  <img class="img-fluid" src={Image} alt="info-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <SideCard
                  title="Words from the Founder"
                  founder="Gopal Prasad Pokhrel"
                  content="Welcome to You Devdaha Medical College And Research Institute, an
                institution that imparts quality medical education to our students to
                get an overall experience that makes them doctors of high quality and
                integrity . DMCRI is dedicated to the students' career and every
                effort will be made to make them outstanding professionals, who may
                treat us someday. However, this is not possible without the active
                cooperation of the students and guardians.
                <br />
                <br />I invite students from all corners of the country to join DMCRI.
                It will be our pleasure to shape your future. I welcome you all and
                extend my heartiest wishes for every success that you deserve."
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Book an appointment */}
      <section className="appointment-section">
        <div className="d-flex">
          <img
            src={Appointment}
            alt="appointment-banner"
            className="appoint-img"
          />
        </div>
        <div className="container">
          <div className="appointment-figcaption">
            <button type="button" class="aboutButton btn btn-primary">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* service areas */}
      <section className="about-section services">
        <div className="container">
          <h3 className="title">Service Areas</h3>
          <span className="line">.. </span>
          <div className="row">
            <div className="col-md-6">
              <ServiceCard
                title="Devdaha Hospital"
                content="Devdaha Medical College was established in 2008 situated at Devdaha
             - 9, Bhaluhi- Rupandehi, Nepal. Currently, it is serving as a
             referral center with a 400 bedded well-equipped hospital with a
             newer technical support system. DMCRI is committed to provide
             quality service and medical care to every citizen. We provide a
             friendly environment to patients. We at DMCRI strive hard to provide
             high quality tertiary services to our clients."
                btnText="Read More"
                imageSource={Hospital}
              />
            </div>
            <div className="col-md-6">
              <ServiceCard
                title="Devdaha College"
                content="Devdaha Medical College was established in 2008 situated at Devdaha
             - 9, Bhaluhi- Rupandehi, Nepal. Currently, it is serving as a
             referral center with a 400 bedded well-equipped hospital with a
             newer technical support system. DMCRI is committed to provide
             quality service and medical care to every citizen. We provide a
             friendly environment to patients. We at DMCRI strive hard to provide
             high quality tertiary services to our clients."
                btnText="Read More"
                imageSource={College}
              />
            </div>
          </div>
        </div>
      </section>

      {/* our-team section */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div className="col-lg-6">
                <SideCard
                  title="Our Team"
                  content="Highly skilled specialists and super specialists work round the clock  and offer the best quality of care with compassion, diligence and integrity."
                />
              </div>
              <div class="col-lg-6">
                <div class="info-4-img text-center wow fadeInUp">
                  <img class="img-fluid" src={Team} alt="info-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Home;
