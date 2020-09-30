import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import CedarsLogo from "../images/logo-main.svg";
import LocationIcon from "../images/location.svg";
import PhoneIcon from "../images/phone.svg";
import "./index.scss"

const IndexPage = () => {

  return (
    <Layout>
    <SEO title="Seattle's best gyros & falafels" />
    <div className="main">
      <div className="center">
        <img className="main-logo" src={CedarsLogo} alt="Cedars of Lebanon logo" />
        <div className="text">
          <h1><i>Serving the best gyros and falafels in Seattle!</i></h1>
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
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage
