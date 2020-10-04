import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-scroll"
import { footerData } from "../mock/data"

const Footer = () => {
  const { networks } = footerData
  const { isEnabled } = false

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network
              return (
                <a
                  key={id}
                  href={url || "https://github.com/cobidev/gatsby-simplefolio"}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                </a>
              )
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - developed by{" "}
          <a
            href="https://github.com/juancbaires"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juan Baires
          </a>{" "}
          Using Gatsby JS
        </p>

        {isEnabled}
      </Container>
    </footer>
  )
}

export default Footer
