import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./about.scss"


const About = () => {

  const data = useStaticQuery(graphql`
    query {
      takeout: file(relativePath: {eq: "restaurant/takeout.jpg"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About Us" />
      <div className="body-content">
        <div className="about-page">
          <div className="takeout-image">
            <Img fluid={data.takeout.childImageSharp.fluid} />
          </div>
          <div className="text">
            <h1>ABOUT US</h1>
            <p>John Khalil started Cedars of Lebanon in 1976, serving the University District neighborhood delicious, Lebanese cuisine, from classic gyros and falafels, to savory kibbeh. Cedars of Lebanon is proud to serve the best gyros and falafels in Seattle. Everything is cooked to-order, and everything is fresh and delicious. We have vegetarian options also! Cedars of Lebanon offers great food, and a true family atmosphere.</p>
            <br />
            <p>John runs Cedars of Lebanon with his wife and three kids, and loves talking to customers from all over. Stop by and say hi!</p>
            <br />
            <p>Check out our menu <a target="_blank" rel="noopener noreferrer" href="https://cedars-of-lebanon.s3-us-west-2.amazonaws.com/Cedars_Takeout%20Menu_FINALJUN5.pdf">here</a>.</p>
          </div>          
        </div>
      </div>
    </Layout>
  )
}

export default About;