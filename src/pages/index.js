import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CedarsLogo from "../images/logo-main.svg"
import LocationIcon from "../images/location.svg"
import PhoneIcon from "../images/phone.svg"
import "./index.scss"

const preprocess = (str) => {
  if(!str) {
    return "";
  }

  const split = str.split(" ");

  const processed = split.reduce((acc, el) => {
    return `${acc} ${el.charAt(0).toUpperCase() + el.slice(1)}`;
  }, "")

  // const processed = split.map(word => preprocess(word));

  return processed;
  // return noHyphen.charAt(0).toUpperCase() + noHyphen.slice(1);
}

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: {eq: "third-party/facebook.png"}) {
        childImageSharp {
          fixed(width: 29, height: 29, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yelp: file(relativePath: {eq: "third-party/yelp.png"}) {
        childImageSharp {
          fixed(width: 29, height: 29, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allFoodImages: allFile(filter: {relativeDirectory: {eq: "food"}}, sort: {fields: name}) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
    <SEO title="Seattle's best gyros & falafels" />
    <div className="main">
      <div className="center">
        <img className="main-logo" src={CedarsLogo} alt="Cedars of Lebanon logo" />
        <div className="text">
          <h1><i>Serving the best gyros and falafels in Seattle!</i></h1>
          <p>Great food with a family atmosphere.</p>
          <p>Check out our delicious menu <a target="_blank" rel="noopener noreferrer" href="https://cedars-of-lebanon.s3-us-west-2.amazonaws.com/Cedars_Takeout%20Menu_FINALJUN5.pdf">here</a>.</p>
        </div>
        <div className="business-contact">
          <div className="row">
            <img className="icon" src={LocationIcon} alt="Location" />
            <a target="_blank" rel="noopener noreferrer" href="https://google.com/maps/place/Cedars+of+Lebanon/@47.6597999,-122.3134887,19.37z/data=!4m5!3m4!1s0x549014f4cacd3feb:0x91c70c3f32afc6f5!8m2!3d47.6597151!4d-122.3135296">1319 NE 43rd St, Seattle, WA 98105</a>
          </div>
          <div className="row">
            <img className="icon" src={PhoneIcon} alt="Phone Number" />
            <p>(206) 632-7708</p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CedarsSeattle/">
            <div className="row">
                <Img className="icon" fixed={data.facebook.childImageSharp.fixed} alt="Facebook" />
                <p>@CedarsSeattle</p>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/cedars-of-lebanon-seattle-2">
            <div className="row">
                <Img className="icon" fixed={data.yelp.childImageSharp.fixed} alt="Yelp" />
                <p>Cedars of Lebanon</p>
            </div>
          </a>
        </div>
      </div>
      <div className="gallery">
        <h1>TRY US OUT</h1>
        <p>Taste the best gyros and falafels you've ever had.</p>
        <div className="images">
          {data.allFoodImages.edges.map((edge) => (
              <div key={edge.node.name} className="image-wrapper">
                <Img className="dish" fluid={edge.node.childImageSharp.fluid} alt="Image" />
                <p>{preprocess(edge.node.name.replaceAll("-", " "))}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage
