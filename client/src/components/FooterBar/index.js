import React from "react";
// import { Footer } from "react-materialize";
import "./style.css";
import Wave3 from "./wave3.svg"
import ContributorList from "../ContributorList";

function FooterBar() {
    return (
      <div> 
          <img className="waveFooter" alt="waves" src={Wave3} />
        {/* <Footer
        s={12}
          className="footerCard accent-2 footer"
          copyrights="&copy; 2020 All Rights Reserved"
          // links={<ContributorList />}
        >
          <h5 className="white-text">Like our app?</h5>
          <p className="grey-text text-lighten-4">
            Please check out our GitHub pages!
          </p>
          <ContributorList/>
        </Footer> */}

        <footer className="page-footer footerCard">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Like our app?</h5>
                <p className="grey-text text-lighten-4"> Please check out our GitHub pages!</p>
              </div>
              <div className="col l6 s0"></div>
              </div>
              <ContributorList/>
   
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright
            
            </div>
          </div>
        </footer>
      </div>
      
    );
}

export default FooterBar;