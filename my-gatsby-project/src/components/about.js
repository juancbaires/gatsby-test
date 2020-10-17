import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Title from "./title"
import Fade from "react-reveal"
import AboutImg from "./AboutImg"

export default function about() {
  return (
    <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename="headShot.jpg" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={true} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <Title title="About Me"></Title>
                <p className="about-wrapper__info-text">
                  I’m a Front-End Developer who writes clean, efficient and
                  reusable code. My attention to detail, diagnostic skills and
                  team work are essential to my approach; allowing me the
                  ability to adapt and overcome problems at hand.
                </p>
                {/* <p className="about-wrapper__info-text">
                  For that last year, I've been working as a web developer for
                  Social Driver. A digital agency based out of Washington DC
                  that specializes is custom websites, managing social media and
                  advertisement. Prior to joining 
                </p> */}
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://drive.google.com/file/d/1k7vlcrr78HIQfSe9QQUIYDVisWVVBE6l/view?usp=sharing"
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
