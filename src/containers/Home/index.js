import React from "react";
// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// import Banner from "../../assets/images/Banner.png";
import AboutCard from "../../components/AboutCard";
import NoticeCard from "../../components/NoticeCard";
import Image from "../../assets/images/Chairman.png";
import SideCard from "../../components/SideCard";
import Appointment from "../../assets/images/appointment.png";
import Hospital from "../../assets/images/hospital.png";
import College from "../../assets/images/College.png";
import ServiceCard from "../../components/ServiceCard";
import Team from "../../assets/images/team.jpg";
import Hero from "../../components/Hero";

import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <>
      {/* <Topnav /> */}
      <ScrollToTop />

      <Nav />

      {/* hero section */}
      <Hero />

      {/* about section */}
      <section className="about-section">
        <div className="container">
          <div className="row notice">
            <div className="col-md-6 p-20">
              <AboutCard
                title="About Us"
                content="Devdaha Medical College and
                Research Institute was
                established in the year 2005. It is
                located at Devdaha Municipality,
                Rupandehi district, about 9 kms
                east of Butwal sub
                metropolitan city.
                Devdaha recognized as a
                maternal village of Lord Gautam
                Buddha. It is about 35 KM far
                away from the Gautam Buddha
                Airport which is in under
                construction as an international
                airport. It has a quiet and
                tranquil environment, required
                for medical college and teaching
                hospital. "
                btnText="Read More"
              />
            </div>

            <div className="col-md-1 "></div>
            <div className="col-md-5 noticeCard p-20">
              <NoticeCard />
            </div>
          </div>
        </div>
      </section>

      {/* director */}
      <Fade bottom>
        <section className="message-section">
          <section class="px-65 info-section">
            <div class="container">
              <div class="row d-flex">
                <div class="col-lg-6">
                  <div class="info-4-img text-center">
                    <img class="img-fluid" src={Image} alt="chairman" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <SideCard
                    title="Words from the Chairman"
                    founder="Gopal Prasad Pokhrel"
                    content="KARMA of our previous life is something with which we take birth. Also our deeds throughout this life creates 'SANSKAAR'. So no matter what, there's no running away from both of them. Being the only creature to be able to think with their rational mind, I believe in reducing the amount of bad deeds increasing good deeds and moving forward. Coming to DMCRI at the time of pandemic where whole world has gone into economic crisis, is a huge challenge for us but I also take this as an opportunity to create something beautiful in this place, to bring positive change in the society."
                    // content1="Coming to DMCRI at the time of pandemic where whole world has gone into economic crisis, is a huge challenge for us but I also take this as an opportunity to create something beautiful in this place, to bring positive change in the society."
                    content2=" So, come forward and join hands with us in helping this institute progress, create skilled manpower to help at such moment of pandemic and uplift the health sector of our people, society and country as a whole. Lets take this as an opportunity to work hard and prove our efficiency. Lets make this institute shine in whole country and world."
                    // content3="I thank you for choosing DMCRI for the care of your loved ones and assure you that they are in safe hands."
                    content4="Thank you,"
                    content5=" Gopal Prasad Pokhrel"
                    content6="Chairperson"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </Fade>

      {/* Book an appointment */}

      <section className="appointment-section" id="appointment-section">
        <div className="d-flex">
          <img
            src={Appointment}
            alt="appointment-banner"
            className="appoint-img"
          />
        </div>
        <div className="container">
          <Slide bottom>
            <div className="appointment-figcaption">
              <button type="button" class="aboutButton btn btn-primary">
                Book an Appointment
              </button>
            </div>
          </Slide>
        </div>
      </section>

      {/* service areas */}
      <section className="service-section services">
        <div className="container">
          {/* <h3 className="title">Service Areas</h3>
          <span className="line">.. </span> */}

          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Service Areas</h3>
            <span className="line">.</span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ServiceCard
                title="Devdaha Hospital"
                content="Devdaha Hospital has total capacities of 300 beds with a
                dedicated team of full-time consultant doctors, paramedical, nursing and other support staff working
                round the clock for delivering compassionate care. Hospital provides in-patient and outpatient
                departments in all clinical subjects. The policy of the hospital is to provide high quality health care
                to people of all strata of the society at affordable cost."
                btnText="Read More"
                imageSource={Hospital}
                services="/services"
              />
            </div>
            <div className="col-md-6">
              <ServiceCard
                title="Devdaha College"
                content="Devdaha Medical College has laid down its academic foundation by starting
                certificate level of Nursing program under CTEVT, and then after a year extended MBBS Program
                under KU was initiated. In the year 2074 saw addition of HA Program under
                CTEVT. DMCRI aims to produce quality medical professionals they can compete in the context of national and international level."
                btnText="Read More"
                imageSource={College}
                services="/academic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* our-team section */}
      <Slide bottom>
        <section className="message-section team">
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
                    <img class="img-fluid" src={Team} alt="our-team" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Slide>
      <Footer />
    </>
  );
};

export default Home;
