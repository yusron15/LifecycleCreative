import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbarHome.jsx";
import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
import News from "../../components/Landing/News.jsx";
import NewsInverted from "../../components/Landing/NewsInverted.jsx";
import Feature from "../../components/Landing/Feature.jsx";
import Benefit from "../../components/Landing/Benefit.jsx";
import Pricing from "../../components/Landing/Pricing.jsx";
import Legality from "../../components/Landing/Legality.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";
import BottomNavbar from "../../components/Navbars/BottomNavbar.jsx";
import "../../assets/css/main.css";
import VizSensor from "react-visibility-sensor";
import { connect } from "react-redux";

import { getContent, getNews } from "../../redux/ducks/actions.js";

let mailId = "e2880ae15c";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarColor: "white",
      color: "black",
      showEbook: false,
      linkSub: ""
    };
  }
  async componentDidMount() {
    await this.props.getContent("topbar", this.props.currentLang, true);
    await this.props.getContent("landing", this.props.currentLang, true);
    await this.props.getNews("market");
    await this.props.getNews("stock");
    // window.scroll(0, 0);
  }

  onChange = id => async isVisible => {
    if (isVisible && this.state.navbarColor !== id) {
      await this.setState({
        navbarColor: id
      });
    }
  };

  onChangeText = id => async isVisible => {
    if (isVisible && this.state.color !== id) {
      await this.setState({
        color: id
      });
    }
  };

  removeEbook = () => {
    this.setState({
      showEbook: false
    });
  };

  render() {
    return (
      <>
        <ColoredNavbar
          navbarColor={this.state.navbarColor}
          color={this.state.color}
          location={{ ...this.props.location }}
        />
        <VizSensor scrollCheck onChange={this.onChange("white")}>
          <HeaderLanding newsletterLink={this.newsletterLink} />
        </VizSensor>
        {/* <BreakingNews /> */}

        <VizSensor
          partialVisibility
          scrollCheck
          onChange={this.onChange("white")}
        >
          <Pricing />
        </VizSensor>

        {/* <VizSensor
          scrollCheck
          minTopValue={200}
          onChange={this.onChange("black")}
        >
          <Feature />
        </VizSensor> */}
        <VizSensor scrollCheck onChange={this.onChange("black")}>
          <Feature />
        </VizSensor>

        <News />
        <VizSensor scrollCheck onChange={this.onChange("white")}>
          <NewsInverted />
        </VizSensor>

        <VizSensor
          scrollCheck
          partialVisibility
          onChange={async isVisible => {
            if (isVisible) {
              await this.setState({
                showEbook: true
              });
            }
          }}
        >
          <Benefit />
        </VizSensor>

        <VizSensor onChange={this.onChange("black")}>
          <Legality />
        </VizSensor>
        <section
          ref={section => {
            this.newsletterLink = section;
          }}
        >
          <NewsLetter />
        </section>
        <Footer />
        {/* {isMobile ? null : (
          <div>
            <BottomNavbar />
            <div className="space-50" />
          </div>
        )} */}
        {this.state.showEbook && (
          <div style={{ position: "fixed", zIndex: 999, bottom: 0 }}>
            <BottomNavbar sendFunction={this.removeEbook} />
            {/* <div
              style={{ height: 200, width: 200, backgroundColor: "red" }}
            ></div> */}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  getNews: type => dispatch(getNews(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
