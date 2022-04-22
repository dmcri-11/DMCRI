// import Topnav from "../../components/TopNav";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Breadcrums from "../../components/Breadcrums";
import media from "../../assets/images/media.png";
import media1 from "../../assets/images/media1.png";
import media2 from "../../assets/images/media2.png";
import media3 from "../../assets/images/media3.png";
import media4 from "../../assets/images/media4.png";
import media5 from "../../assets/images/media5.png";
import { Col, Container, Row } from "react-bootstrap";

import Slide from "react-reveal/Slide";
import ScrollToTop from "../../components/ScrollToTop";

const Media = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Topnav /> */}
      <Nav />
      <Breadcrums name="Media" />

      {/* media-section */}
      <Container>
        <section className="gallery-photos">
          <div className="departments--title">
            <h3 class="h3-md steelblue-color">Images</h3>
            <span className="line">.</span>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <Slide bottom>
                <p className="mb-30">
                  Some of the beautiful moments captured at Devdaha Medical
                  College and Research Institute.
                </p>
              </Slide>
            </div>
          </div>
          <Slide bottom>
            <Row className="p-20">
              <Col md={4}>
                <figure>
                  <img src={media} alt="gallery-1" className="image" />
                </figure>
              </Col>
              <Col md={4}>
                <figure>
                  <img src={media1} alt="gallery-2" className="image" />
                </figure>
              </Col>
              <Col md={4}>
                <figure>
                  <img src={media2} alt="gallery-3" className="image" />
                </figure>
              </Col>
            </Row>
          </Slide>

          <Slide bottom>
            <Row className="p-20">
              <Col md={4}>
                <figure>
                  <img src={media3} alt="gallery-4" className="image" />
                </figure>
              </Col>
              <Col md={4}>
                <figure>
                  <img src={media4} alt="gallery-5" className="image" />
                </figure>
              </Col>
              <Col md={4}>
                <figure>
                  <img src={media5} alt="gallery-6" className="image" />
                </figure>
              </Col>
            </Row>
          </Slide>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Media;
