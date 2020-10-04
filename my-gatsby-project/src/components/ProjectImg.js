import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectImage = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      // console.log({ here: data })
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )
      if (!image) return null

      const imageFixed = image.node.childImageSharp.fluid
      return <Img className="rounded shadow-lg" alt={alt} fluid={imageFixed} />
    }}
  />
)

export default ProjectImage
