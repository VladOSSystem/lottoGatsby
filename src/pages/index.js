import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    wordpressPage(path: {eq: "/"}) {
      id
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            resolutions {
              src
              width
              height
              srcSet
            }
          }
        }
      }
    }
  }
  `)
  console.log(data)
  const mainContent = data.wordpressPage.content
  return (
  <Layout>
    <SEO title="Home" />
    <Img resolutions={data.wordpressPage.featured_media.localFile.childImageSharp.resolutions}/>
    <div dangerouslySetInnerHTML={{ __html: mainContent }} />
    
  </Layout>
)
}

export default IndexPage
