import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  // Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { isMobile } from "react-device-detect";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

import "../../../src/App.css";
import ScrollAnimation from "react-animate-on-scroll";
import tentangkami from "../../assets/img/header-aboutus.png";
import ColoredNavbar from "../Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "components/Navbars/BlurryNavbar";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { LangContext } from "../MyContext";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { connect } from "react-redux";
import { fetchPage, getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const styles = {
  fadeIn: {
    animation: "x 3s",
    // animationDuration: "2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

class HeaderAboutUs extends React.Component {
  state = {};

  async componentDidMount() {
    await this.props.getContent("tentangkami", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="headers">
            {/* ********* HEADER 6 ********* */}
            <div className="header header-6  broken-white">
              <div
                className="team-1 background-header-mobile"
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.tentangkami.image_background_mobile +
                    ")",
                  padding: 0
                }}
              >
                <SidebarMobile />
                {/* <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} /> */}
                <div
                  className="title-header-mobile"
                  // style={{ marginTop: "11vh", fontSize: "2rem" }}
                >
                  {ReactHtmlParser(this.props.pageStore.tentangkami.header)}
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(this.props.pageStore.tentangkami.sub_header)}
                </div>
              </div>
              <div className="content-center broken-white">
                <Container>
                  <Row className="align-items-center text-left">
                    <Col lg="12" xs="12">
                      <p
                        className="description font-black desc-text"
                        style={{
                          color: "black",
                          textAlign: "justify",
                          lineHeight: "30px"
                        }}
                      >
                        {ReactHtmlParser(
                          this.props.pageStore.tentangkami.content
                        )}
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 6 ********* */}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="headers">
                {/* ********* HEADER 6 ********* */}
                <div className="header header-6  broken-white">
                  <div
                    className="team-1 background-header"
                    style={{
                      // backgroundImage: `url(${tentangkami})`,
                      backgroundImage:
                        "url(" +
                        this.props.pageStore.tentangkami.image_background +
                        ")",
                      padding: 0
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />
                    <div className="title title-header">
                      {ReactHtmlParser(this.props.pageStore.tentangkami.header)}
                    </div>
                    <Container>
                      <div
                        style={{ textAlign: "center" }}
                        className="subheader font-white"
                      >
                        {ReactHtmlParser(
                          this.props.pageStore.tentangkami.sub_header
                        )}
                      </div>
                    </Container>
                  </div>
                  <div className="content-center broken-white">
                    <Container>
                      <Row className="align-items-center text-left">
                        <Col lg="12" xs="12">
                          <p
                            className="description font-black desc-text"
                            style={{
                              color: "black",
                              textAlign: "justify",
                              lineHeight: "30px"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.tentangkami.content
                            )}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
              {/* ********* END HEADER 6 ********* */}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))

  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAboutUs);

// export default HeaderAboutUs;
