import React from "react";
import { Footer, Button } from "react-materialize";
import "./style.css";

function FooterBar() {
    return (
        <div>
            <Footer
                className="footerCard accent-2 footer"
                copyrights="&copy; 2020 All Rights Reserved"
                links={<ul>
                    <li>
                        <Button
                            node="button"
                            class= "buttonCard"
                            style={{
                                marginLeft: "50px",
                                color: "#fccf43"
                            }}
                            waves="light"
                        >
                            Login
                        </Button>
                    </li>
                    <li>
                        <Button
                            node="button"
                            style={{
                                marginLeft: "50px",
                                marginTop: "10px",
                                color: "#fccf43"
                            }}
                            waves="light"
                        >
                            Register
                        </Button>
                    </li>
                    </ul>}
                moreLinks={<a href="http://www.google.com"><img 
                    class="circle responsive-img" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Neil_Patrick_Harris_%289446191273%29.jpg/440px-Neil_Patrick_Harris_%289446191273%29.jpg"
                    /></a>}
            >
                <h5 className="white-text">
                    Like our app?
                </h5>
                <p className="grey-text text-lighten-4">
                    Please check out our GitHub pages!
                </p>
            </Footer>
        </div>    
    );
}

export default FooterBar;