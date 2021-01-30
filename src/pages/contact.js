import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import LocationIcon from "../images/location.svg";
import PhoneIcon from "../images/phone.svg";
import "./contact.scss"

const Contact = () => {

  const data = useStaticQuery(graphql`
    query {
      outside: file(relativePath: {eq: "restaurant/outside.jpg"}) {
        childImageSharp {
          fluid(quality: 80, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
    }
  `);

  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="body-content">
        <div className="contact-page">
          <div className="cover-photo">
            <Img fluid={data.outside.childImageSharp.fluid} alt="Outside restaurant patio" />
          </div>
          <div className="contact-info">
            <h1>CONTACT US</h1>
            <p>Takeout your favorite dishes or dine-in.</p>
            <p style={{ marginBottom: 24 }}>Give us a call or come swing by! We'd love to have you.</p>
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
      </div>
    </Layout>
  )
}

export default Contact