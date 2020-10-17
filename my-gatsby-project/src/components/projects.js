import React, { useEffect, useState } from "react"
import Fade from "react-reveal/Fade"
import Tilt from "react-tilt"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../components/title"
import ProjectImg from "./ProjectImg"
import { projectsData } from "../mock/data"
import WordpressIcon from "../assets/Wordpress-icon.svg"
import SassIcon from "../assets/sass-icon.svg"
import GruntIcon from "../assets/grunt-icon.svg"
import HtmlIcon from "../assets/html-icon.svg"
import JqueryIcon from "../assets/jquery-icon.svg"
import PHPIcon from "../assets/php-icon.svg"
import GithubIcon from "../assets/github-icon.svg"

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projectsData.map(project => {
            const { title, info, info2, url, repo, img, id } = project

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {title || "Project Title"}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                        </p>
                        {/* <h3 className="project-wrapper__text-title">
                          Technology Used:
                        </h3> */}
                        <ul className="project-icons">
                          <li>
                            <WordpressIcon />
                          </li>
                          <li>
                            <PHPIcon />
                          </li>
                          <li>
                            <JqueryIcon />
                          </li>
                          <li>
                            <SassIcon />
                          </li>
                          <li>
                            <GruntIcon />
                          </li>
                          <li>
                            <HtmlIcon />
                          </li>
                          <li>
                            <GithubIcon />
                          </li>
                        </ul>
                        <p className="mb-4">{info2 || ""}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || "#!"}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
