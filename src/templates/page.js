import React, {Component} from "react"
import Header from "../components/header"
import Img from "gatsby-image"
import Layout from "../components/layout"
class PageTemplate extends Component {
  
  render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage
        return (
            <div>
            <Layout title='Test'>
            <Img resolutions={currentPage.featured_media.localFile.childImageSharp.resolutions}/>
            <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
            <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            
            <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
            <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
            </Layout>
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
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
        site {
            id
            
        }
    }
`