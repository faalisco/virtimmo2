import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../../src/pages/layout/layout"

import blogStyles from "./blog.module.scss"
export default ({ data }) => {
  const post = data.markdownRemark
  let image = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <div className={blogStyles.wrapper}>
        <main>
          <Img fluid={image} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
      </div>
    </Layout>
  )
}
export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          image{
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
`