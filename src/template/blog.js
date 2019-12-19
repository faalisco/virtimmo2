import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "../../src/pages/layout/layout"

import blogStyles from "./blog.module.scss"
export default ({ data }) => {
  const post = data.markdownRemark
  let image = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <div className={blogStyles.wrapper}>

        <main className={blogStyles.main}>
          <h1>{post.frontmatter.title}</h1>
          <Img fluid={image} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </main>
        <button><Link to="/">Prev</Link></button>
        <button><Link to="/">Next</Link></button>
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

      allMarkdownRemark {
        edges{
            node{
                fields{
                    slug
                }
            }
        }
    }
    }
`