import React from "react";
import { Footer } from "react-materialize";
import "./style.css";
import Wave3 from "./wave3.svg"
import ContributorList from "../ContributorList";

function FooterBar() {
    return (
      <div> 
        <div>
          <img src={Wave3} />
        </div>

        <Footer
          className="footerCard accent-2 footer"
          copyrights="&copy; 2020 All Rights Reserved"

          links={<ContributorList />}

        >
          <h5 className="white-text">Like our app?</h5>
          <p className="grey-text text-lighten-4">
            Please check out our GitHub pages!
          </p>
        
        </Footer>
      </div>
    );
}

export default FooterBar;