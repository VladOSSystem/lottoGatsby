import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Header from "../components/header"
import { DiscussionEmbed } from "disqus-react"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions = post.featured_media.localFile.childImageSharp.resolutions
        console.log(post);
        const slugConfig = post.slug
        const titleConfig = post.title
        const disqusConfig = {
          shortname: 'localhost',
          config: { identifier: slugConfig, titleConfig },
        }
        return (
            <Layout>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <Img resolutions={resolutions}/>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <DiscussionEmbed {...disqusConfig} />
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            slug
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
`
