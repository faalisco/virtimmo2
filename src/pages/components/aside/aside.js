import React from "react"

import { Link, graphql } from "gatsby"


import asideStyles from "./aside.module.scss"
export default ({ data }) => {
    return (
        <aside className={asideStyles.aside}>
            <ul className={asideStyles.asideNav}>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <li className={asideStyles.asideNavItem}>
                        <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export const query = graphql`
query{
    allMarkdownRemark {
        edges{
            node{
                fields{
                    slug
                }

                frontmatter{
                    title
                }
            }
        }
    }
}
`