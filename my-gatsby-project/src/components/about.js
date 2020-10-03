import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Title from "./title"
import Fade from "react-reveal"
import AboutImg from "./AboutImg"

export default function about() {
  return (
    <section id="about">
      <Container>
        <Title title="About Me"></Title>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="rockin.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={true} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I’m a Front-End Developer who writes clean, efficient and
                  reusable code. My attention to detail, diagnostic skills and
                  team work are essential to my approach; allowing me the
                  ability to adapt and overcome problems at hand.
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="/"
                  >
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
