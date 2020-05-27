/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import MainMenu from '../components/Menu/MainMenu'


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
  allWordpressMenusMenusItems {
    edges {
      node {
        id
        name
        slug
        items {
          slug
          title
          child_items {
            slug
            title
          }
          title
        }
      }
    }
  }
    }
  `)


  return (
    <>
    <Helmet>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
   </Helmet>
      <Header siteTitle='Gatsby' />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
      <MainMenu menu={data}/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout