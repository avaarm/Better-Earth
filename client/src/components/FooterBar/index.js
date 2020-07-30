import React from "react";
import { Footer, Toast } from "react-materialize";

function FooterBar() {
    return (
        <div>
            <Footer
                className="blue accent-2 footer"
                copyrights="2020 All Rights Reserved"
                links={<ul><li>
                    <a className="grey-text text-lighten-3" href="#!">Name 1</a></li><li>
                    <a className="grey-text text-lighten-3" href="#!">Name 2</a></li><li>
                    <a className="grey-text text-lighten-3" href="#!">Name 3</a></li><li>
                    <a className="grey-text text-lighten-3" href="#!">Name 4</a></li></ul>}
                // moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
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