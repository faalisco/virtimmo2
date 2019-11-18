import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import Aside from "../pages/components/aside/aside"
import Layout from "../../src/pages/layout/layout"

import blogStyles from "./blog.module.scss"
export default ({ data }) => {
  const post = data.markdownRemark
  let image = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      {/* <Aside /> */}
      <div className={blogStyles.wrapper}>
        <main>
          <h1>{post.frontmatter.title}</h1>
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