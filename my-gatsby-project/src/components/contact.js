import React from "react"
import Fade from "react-reveal/Fade"
import { Container } from "react-bootstrap"
import Title from "../components/title"

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Would you like to work with me?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdm-A7mtfa4iABGip-fkGRs9-S49DVdyRTjI7qFR2VOROUSqg/viewform"
            >
              Let's Talk
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  )
}

export default Contact
