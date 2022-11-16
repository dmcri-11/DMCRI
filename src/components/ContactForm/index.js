import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rcs45lf",
        "template_99gysg1",
        form.current,
        "user_1ruqXmNFSTuuGdPaCDazE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Submitted successfully.");
  };

  return (
    <>
      <Slide bottom>
        <div className="departments--title">
          <h3 class="h3-md steelblue-color">Let's work together</h3>
          <span className="line">.</span>
        </div>

        <p>
          Please tell us a bit about you, and how best to reach you. We’ll get
          right back to you.
        </p>
        <br />
        <div className="contact__form--wrapper">
          <Container>
            {/* <h5 style={{ marginBottom: "30px", fontWeight: "600" }}>
            Get in Touch
          </h5> */}

            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="name">
                    <label for="name">Name * </label>
                    <input type="text" name="name" id="" required />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="email">
                    <label for="email">Email * </label>
                    <input type="email" name="email" id="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="phone">
                    <label for="phone">Phone </label>
                    <input type="number" name="phone" id="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="address">
                    <label for="address">Address *</label>
                    <input type="text" name="address" id="" required />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="messsage">
                    <label for="message">Message</label>
                    <textarea
                      name="msg"
                      id=""
                      cols="60"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="contact__form--button">
                <Button type="submit"> Submit </Button>
              </div>
            </form>
          </Container>
        </div>
      </Slide>
    </>
  );
};

export default ContactForm;
