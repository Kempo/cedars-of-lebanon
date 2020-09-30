import { Link } from "gatsby"
import React from "react"
import LogoTree from "../images/tree-icon.svg"
import "./header.scss";

const Header = () => (
  <header>
    <div className="notice">
      <p>TOGO & DINE-IN</p>
      <span className="vertical-separator" />
      <p>11 - 8 DAILY</p>
      <span className="vertical-separator" />
      <p>CLOSED SUNDAY</p>
    </div>
    <div className="nav">
      <Link to="/"><img src={LogoTree} alt="Small Logo" /></Link>
      <ul>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>  
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://cedars-of-lebanon.s3-us-west-2.amazonaws.com/Cedars_Takeout%20Menu_FINALJUN5.pdf">
            Menu
          </a>
        </li>  
      </ul>
    </div>
  </header>
)

export default Header
