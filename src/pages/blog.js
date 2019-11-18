import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"


import Layout from "./layout/layout"

import bStyles from "./blog.module.scss"

export default ({ data }) => {
  return (
    <Layout>
      <div className={bStyles.wrapper}>
        <h1 className={bStyles.title}>
          Our Posts And News Articles
        </h1>
        <main className={bStyles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={bStyles.wrap}>

              <Img fluid={node.frontmatter.image.childImageSharp.fluid} />

              <Link to={node.fields.slug} className={bStyles.link}>
                <h3> {node.frontmatter.title} </h3></Link>

            </div>
          ))}
        </main>
      </div>

    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
            fields {
                slug
            }
          id
          frontmatter {
            title
            image{
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`