import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Fade from "react-reveal/Fade"

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            Hi, my name is
            <span className="text-color-main"> Juan Baires. </span>
            <br />
            I'm Front-End Web Developer.
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <p>
            <span className="cta-btn cta-btn--hero">
              <a href="/">Know More</a>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

export default Header
