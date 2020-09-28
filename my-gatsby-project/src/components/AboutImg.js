import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(
        n => n.node.relativePath.includes(filename)
        // n.node.relativePath.includes(filename)
      )
      console.log(image)
      if (!image) return null

      const imageFixed = image.node.childImageSharp.fixed
      console.log(imageFixed)
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />
    }}
  />
)

export default Image
