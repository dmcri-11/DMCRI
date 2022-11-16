import loc from "../../assets/images/location.png";
import call from "../../assets/images/call.png";
import email from "../../assets/images/email.png";
import clock from "../../assets/images/clock.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <img src={loc} alt="location" />
              <br />
              Bhaluhi, Rupandehi, Nepal
            </div>
            <div className="col-md-3 col-sm-3">
              <img src={call} alt="phone" />
              <br />
              +977-71-403001, +977-71-403002
            </div>
            <div className="col-md-3 col-sm-3">
              <img src={email} alt="email" />
              <br />
              devdahamedicalcollege@gmail.com
            </div>
            <div className="col-md-3 col-sm-3">
              <img src={clock} alt="time" />
              <br />
              24 Hours Available
            </div>
          </div>
        </div>
      </section>
      <footer id="footer-2" className="footer division">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-links mb-30">
                <h5 className="h5">Information</h5>
                <ul class="clearfix">
                  <li>
                    <Link to="/about">Who We Are</Link>
                  </li>
                  <li>
                    <Link to="/services">What We Do</Link>
                  </li>
                  <li>
                    <Link to="/media">Gallery</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-links mb-30">
                <h5 className="h5">Useful Links</h5>
                <ul class="clearfix">
                  <li>
                    <Link to="/services">Find a Doctor</Link>
                  </li>
                  <li>
                    <Link to="/notice">Jobs/Vacancy</Link>
                  </li>
                  <li>
                    <Link to="#">Book an Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-links mb-30">
                <h5 className="h5">Services</h5>
                <ul class="clearfix">
                  <li>
                    <Link to="/services">General Surgery</Link>
                  </li>
                  <li>
                    <Link to="/services">Internal Medicine</Link>
                  </li>
                  <li>
                    <Link to="/services">Gynecology and Obstetrics</Link>
                  </li>
                  <li>
                    <Link to="/services">Dermato - Venereology</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-links mb-30">
                <h5 className="h5">Subscribe Us:</h5>
                <form id="subscribeForm" class="newsletter-form">
                  <div class="input-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <Link to="#">
                    <button
                      type="submit"
                      id="submit_subscribe"
                      class="btn submit"
                    >
                      Subscribe Now
                    </button>
                  </Link>
                </form>
                {/* social icons */}
                <div class="footer-socials-links ">
                  <ul class="foo-socials text-center clearfix">
                    <li>
                      <a
                        href="https://www.facebook.com/Devdahamedicalcollege"
                        class="ico-facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        class="ico-twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        class="ico-instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-footer">
            <div className="row">
              {/* <div class="col-md-6 ">
                <div class="footer-copyright">
                  <small>
                    Copyright © 2022 <strong> DMCRI </strong>
                    <br />
                    All Right Reserved
                  </small>
                </div>
              </div>

              <div class="col-md-6 footer-powered ">
                <small>Powered By: Sindhu</small>
              </div> */}
              <div className="col-md-12 center">
                <small>
                  Copyright © 2022 <strong> DMCRI </strong> | All Right Reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
