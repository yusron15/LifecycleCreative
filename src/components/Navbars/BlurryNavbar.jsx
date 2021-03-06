import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { connect } from "react-redux";

import LangTogglerButton from "../LangTogglerButton";
import logo from "../../assets/img/Bitmap.png";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import google from "../../assets/img/google.png";
import subscribe from "../../assets/img/subscribe.png";
import flag from "../../assets/img/flag-uk.png";
import scrollToComponent from "react-scroll-to-component";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const font = {
  color: "white",
  cursor: "pointer"
};

const fontNumber = {
  color: "white",
  cursor: "default"
};

class BlurryNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar
          expand="lg"
          style={{
            // backgroundColor: "rgba(112, 112, 112, 0.19)",
            // backgroundColor: "#343435",
            backgroundColor: "transparent",
            height: "50px"
          }}
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                {/* <p style={font}>Call Us : +62 21 2788 9393</p> */}
                <p style={fontNumber}>{this.props.pageStore.topbar.phone}</p>
              </NavbarBrand>
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-transparent">
              <Nav className="ml-auto" style={{ marginRight: "25px" }} navbar>
                <NavItem>
                  <LangTogglerButton />
                </NavItem>
                {/* <div class="vl"></div>
                <NavItem style={{ marginTop: "5px" }}>
                  <div
                    onClick={() =>
                      scrollToComponent(this.props.newsletterLink, {
                        offset: 0,
                        align: "top",
                        duration: 200
                      })
                    }
                  >
                    <img
                      src={subscribe}
                      style={{
                        paddingRight: "10px",
                        height: "14px",
                        width: "auto"
                      }}
                    />
                    <text style={font}>Subscribe</text>
                  </div>
                </NavItem> */}
                <div class="vl"></div>
                <NavItem style={{ marginTop: "5px" }}>
                  <a
                    target="_blank"
                    style={{ backgroundColor: "transparent" }}
                    href={this.props.pageStore.topbar.link_1}
                  >
                    <img src={facebook} />
                  </a>
                </NavItem>
                <NavItem style={{ marginTop: "5px" }}>
                  <a
                    target="_blank"
                    style={{ backgroundColor: "transparent" }}
                    href={this.props.pageStore.topbar.link_2}
                  >
                    <img src={twitter} />
                  </a>
                </NavItem>
                <NavItem style={{ marginTop: "5px" }}>
                  <a
                    target="_blank"
                    style={{ backgroundColor: "transparent" }}
                    href={this.props.pageStore.topbar.link_3}
                  >
                    <img src={instagram} />
                  </a>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        {/* <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 0.5,
            width: "100vw",
            borderColor: "grey"
          }}
        /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BlurryNavbar);
