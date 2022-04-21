// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breadcrums from "../../components/Breadcrums";

import Slide from "react-reveal/Slide";

const Notice = () => {
  return (
    <>
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="Notice" />
      <section className="notice">
        <div className="container">
          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Notices and Current Openings </h3>
            <span className="line">.</span>
          </div>

          <Slide bottom>
            <div className="row">
              <div className="col-md-12">
                <p>
                  We are always looking for nice people to join our team. On
                  this page, you can see all the positions that are open for
                  applications. Even if you don’t find a role that suits your
                  experience, you can apply directly by sending your CV to
                  devdahamedicalcollege@gmail.com . We will ping you when we
                  have a matching position available.
                </p>
              </div>
            </div>
          </Slide>

          <Slide bottom>
            <div className="row">
              <div className="col-md-2">
                <b>Published Date</b>
              </div>
              <div className="col-md-10">
                <b>Notices and Current Openings</b>
              </div>
              {/* <div className="col-md-2">
              <b>Areas of Service</b>
            </div>
            <div className="col-md-10">
              <b>Deadline</b>
            </div> */}

              <div className="col-md-2">2078-Chaitra-24</div>
              <div className="col-md-10">
                <a
                  href="https://drive.google.com/file/d/1L3jtTMhAXHiCcVk9W2VOdT-P5GKQK59x/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for Staff Nurse, Lab Assistant, Lab and
                  Radio Technicians
                </a>
              </div>
              {/* <div className="col-md-2">Hospital</div>
            <div className="col-md-10">2078-Chaitra-29</div> */}

              <div className="col-md-2">2078-Shrawan-05</div>
              <div className="col-md-10">
                <a
                  href="https://drive.google.com/file/d/1IPGO4Ke_-N0nb5nv9djpGmEFn0f2Um0b/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for Professors
                </a>
              </div>
              {/* <div className="col-md-2">Academic</div>
            <div className="col-md-10">2078-Chaitra-29</div> */}

              <div className="col-md-2">2078-Shrawan-06</div>
              <div className="col-md-10">
                <a
                  href="https://drive.google.com/file/d/1dwCbG2_x1iUt69qe1uawBf3DYh2goV6f/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy Announcement for various posts
                </a>
              </div>
              {/* <div className="col-md-2">Academic/Hospital</div>
            <div className="col-md-10">2078-Chaitra-29</div> */}

              <div className="col-md-2">2078-Ashar-27</div>
              <div className="col-md-10">
                <a
                  href="https://drive.google.com/file/d/1DiXRr7CutNTHfAAt4l6yb7FswJV-NdHz/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  HA 3rd Year Result Published
                </a>
              </div>
              {/* <div className="col-md-2">-</div>
            <div className="col-md-10">-</div> */}

              <div className="col-md-2">2077-Chaitra-19</div>
              <div className="col-md-10">
                <a
                  href="https://drive.google.com/file/d/19n0blqQg5PaqJLd-i5GXiNqCnu2DzRF3/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vacancy for Medical Officer and Staff Nurse
                </a>
              </div>
              {/* <div className="col-md-2">Hospital</div>
            <div className="col-md-10">2078-Chaitra-29</div> */}
            </div>
          </Slide>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notice;
