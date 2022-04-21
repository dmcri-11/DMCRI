import Breadcrums from "../../components/Breadcrums";
import Department from "../../components/Department";
import SideCard from "../../components/SideCard";
// import Topnav from "../../components/TopNav";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

// import Team from "../../assets/images/team.jpg";
// import Logo from "../../assets/images/logo.png";
import teeth from "../../assets/images/departments/Dentistry.png";
import emergency from "../../assets/images/departments/emergency.png";
import eyes from "../../assets/images/departments/eyes.png";
import female from "../../assets/images/departments/Gynecology.png";
import lyranx from "../../assets/images/departments/lyranx.png";
import medicine from "../../assets/images/departments/Medicine.png";
import orthopedic from "../../assets/images/departments/Orthopedics.png";
import pediatrics from "../../assets/images/departments/Pediatrics.png";
import psychiatry from "../../assets/images/departments/psychiatry.png";
import skin from "../../assets/images/departments/skin.png";
import surgery from "../../assets/images/departments/Surgery.png";
import helipad from "../../assets/images/departments/Helipad.png";

import Slide from "react-reveal/Slide";

const Services = () => {
  return (
    <>
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="Services" />

      {/* departments */}
      <div className="departments">
        <div className="container">
          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Departments</h3>
            <span className="line">.</span>
          </div>

          <div className="row">
            <Slide bottom>
              <div className="col-md-3 col-sm-4">
                <Department title="General Surgery" imageSource={surgery} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Internal Medicine" imageSource={medicine} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Pediatrics" imageSource={pediatrics} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department
                  title="Gynecology and Obstetrics"
                  imageSource={female}
                />
              </div>
            </Slide>
          </div>
          <div className="row">
            <Slide bottom>
              <div className="col-md-3 col-sm-4">
                <Department title="Orthopedics" imageSource={orthopedic} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Ophthalmology" imageSource={eyes} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Otorhinolaryngology" imageSource={lyranx} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Psychiatry" imageSource={psychiatry} />
              </div>
            </Slide>
          </div>
          <div className="row">
            <Slide bottom>
              <div className="col-md-3 col-sm-4">
                <Department title="Dermato - Venereology" imageSource={skin} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Dentistry" imageSource={teeth} />
              </div>
              {/* <div className="col-md-3 col-sm-4">
              <Department title="Emergency" imageSource={emergency} />
            </div> */}
              <div className="col-md-3 col-sm-4">
                <Department title="Cardiology" imageSource={emergency} />
              </div>
              <div className="col-md-3 col-sm-4">
                <Department title="Radiology" imageSource={emergency} />
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* services and benefits */}

      <div className="benefits-section">
        <div className="container">
          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Services and Benefits</h3>
            <span className="line">.</span>
          </div>
          <Slide bottom>
            <div className="row">
              <div className="col-md-12">
                <ul>
                  <li>
                    Emergency Services : State-of-the-art 15 bed Emergency Room
                    with a resuscitation room and a stand-by trauma team. 24hr
                    consultant on stand-by.
                  </li>
                  <li>
                    Pharmacy Services : Medicines are supplied by in-house
                    pharmacy maintaining standard temperature and humidity.
                  </li>
                  <li>
                    Specialized doctors are actively involved during each
                    patient treatment and rehabilitation.
                  </li>
                  <li>
                    The hospital is spacious with a welcoming ambience and
                    centralized air-conditioning.
                  </li>
                  <li>
                    Rapid Rescue Services : Rapid helicopter and ambulance
                    rescue along with 24hr emergency services offered at the
                    hospital.
                  </li>
                  <li>100% electrical backup.</li>
                  <li>Reverse Osmosis Water Purification System.</li>
                  <li>Complete Waste Management and Disposal System.</li>
                </ul>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      {/* Services -5 */}
      <Slide bottom>
        <section className="message-section">
          <section class="px-65 info-section">
            <div class="container">
              <div class="row d-flex align-items-center">
                <div className="col-lg-6">
                  <SideCard
                    title="Helipad Services"
                    content="The rooftop helipad at DMCRI has allowed us for the efficient and quick patient rescue."
                  />
                </div>
                <div class="col-lg-6">
                  <div class="info-4-img text-center wow fadeInUp">
                    <img class="img-fluid" src={helipad} alt="info" />
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

export default Services;
