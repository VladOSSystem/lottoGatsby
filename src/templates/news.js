import React, { Component } from "react";
import Link from "gatsby-link";
import Layout from "../components/layout"
import Img from "gatsby-image"
const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(group)

    return (
        <Layout>
            <h4>{pageCount} Pages</h4>

            {group.map(({ node }) => (
                <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                
                    <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions}/>
                    <Link to={'post/' + node.slug}>
                        <h3>{node.title}</h3>
                    </Link>

                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                    {node.date}
                </div>
            ))}
            <div className="previousLink">
                <NavLink test={first} url={"/news/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/news/" +nextUrl} text="Go to Next Page" />
            </div>
            </Layout>
    );
};
export default IndexPage;