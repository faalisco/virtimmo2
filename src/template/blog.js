import React from "react"
import { graphql } from "gatsby"


import Layout from "../../src/pages/layout/layout"

import blogStyles from "./blog.module.scss"
export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={blogStyles.wrapper}>
        <main>
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
        }
      }
    }
`