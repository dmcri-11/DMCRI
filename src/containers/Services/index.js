import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import SideCard from "../../components/SideCard";
import Footer from "../../components/Footer";
import Team from "../../assets/images/team.jpg";
import Breadcrums from "../../components/Breadcrums";
const Services = () => {
  return (
    <>
      <Topnav />
      <Nav />
      <Breadcrums name="Services"/>
      {/* Services -1 */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div className="col-lg-6">
                <SideCard
                  title="General Surgery"
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

      {/* Services-2 */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-lg-6">
                <div class="info-4-img text-center wow fadeInUp">
                  <img class="img-fluid" src={Team} alt="info-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <SideCard
                  title="Internal Medicine"
                  content="Highly skilled specialists and super specialists work round the clock  and offer the best quality of care with compassion, diligence and integrity."
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services -3 */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div className="col-lg-6">
                <SideCard
                  title="Pediatrics"
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

      {/* Services-4*/}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-lg-6">
                <div class="info-4-img text-center wow fadeInUp">
                  <img class="img-fluid" src={Team} alt="info-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <SideCard
                  title="Gynecology and Obstetrics"
                  content="Highly skilled specialists and super specialists work round the clock  and offer the best quality of care with compassion, diligence and integrity."
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Services -5 */}
      <section className="message-section">
        <section class="px-65 info-section">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div className="col-lg-6">
                <SideCard
                  title="Orthopedics"
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

export default Services;
