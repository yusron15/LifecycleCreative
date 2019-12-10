/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";

import laptop from "../../assets/img/download.png";
import android from "../../assets/img/download-android.png";
import mac from "../../assets/img/download-mac.png";
import ios from "../../assets/img/download-ios.png";
import windows from "../../assets/img/download-windows.png";
class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3" style={{ backgroundColor: "#D4D4D4" }}>
            <Container fluid>
              <Row>
                <Col className="mr-auto ml-auto" md="10">
                  <h1
                    className="title"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Download
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Col>
                    <img src={laptop} height="250" width="auto" />
                  </Col>
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="5">
                      <img alt="..." className="bg-blob" src={ios} />
                    </Col>
                    <Col md="5">
                      <img alt="..." className="bg-blob" src={android} />
                    </Col>
                    <Col md="5" style={{ marginTop: "20px" }}>
                      <img alt="..." className="bg-blob" src={windows} />
                    </Col>
                    <Col md="5" style={{ marginTop: "20px" }}>
                      <img alt="..." className="bg-blob" src={mac} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
