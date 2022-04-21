// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breadcrums from "../../components/Breadcrums";

import Slide from "react-reveal/Slide";

const Academic = () => {
  return (
    <>
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="Academic" />
      {/* Academic */}

      <section className="academic-section">
        <div className="container">
          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Academics</h3>
            <span className="line">.</span>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <Slide bottom>
                <p className="mb-30">
                  Devdaha Medical College has laid down its academic foundation
                  by starting certificate level of Nursing program under CTEVT,
                  and then after a year extended MBBS Program under KU was
                  initiated. In the year 2074 saw addition of HA Program under
                  CTEVT. DMCRI aims to produce quality medical professionals
                  they can compete in the context of national and international
                  level.
                </p>
              </Slide>

              <Slide bottom>
                <h5>PCL Nursing Programme:</h5>
                <p>
                  PCL Nursing program started at DMCRI in 2067 BS under CTEVT.
                  Currently, there are 120 students studying in PCL Nursing
                  Programme. The 8th batches of 40 students have already been
                  passed out. Similarly, the 10th batches of 40 students
                  enrolled in 2020.
                </p>
              </Slide>
              <br />
              <br />

              <Slide bottom>
                <h5>MBBS Programme:</h5>
                <p>
                  MBBS Program started in 2071 as an extended program of
                  Kathmandu University. The first batch of the students has
                  already been passed out. The 6th batches of 75 students are to
                  be enrolled in 2021.
                </p>

                <b>Fee structure :</b>
                <p>
                  DMCRI strictly follows the Kathmandu University guidelines for
                  fee structure :
                  <a href="https://kusms.edu.np/mbbs/#fee-structure-2018.">
                    Visit KUSMUS
                  </a>
                  <br />
                  The exact details of the fees as financial structure can be
                  obtained from the Account Section of the college.
                </p>
              </Slide>
              <br />
              <br />

              <Slide bottom>
                <h5>Health Assistant (HA) Programme:</h5>
                <p>
                  Health Assistant Program Started in 2074 BS under CTEVT.
                  Currently, there are 120 students studying in HA Program. The
                  1 th Batch of 40 students has already been passed out.
                  Similarly, the 4 batches of 40 students enrolled in 2020.
                </p>
              </Slide>
              <br />
              <br />

              <Slide bottom>
                <h5>Post Graduation Program:</h5>
                <p>Post Graduate Program will be expected to start in 2021.</p>
              </Slide>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Academic;
