import React from "react";
import Slick from "react-slick";
import "../../assets/css/helper.css";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  TabPane,
  TabContent,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import { LangContext } from "../MyContext";

// import { NewsContent } from "./NewsContent";
import ScrollAnimation from "react-animate-on-scroll";
import work from "assets/img/work.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import prevButton from "../../assets/img/blue-left.png";
import nextButton from "../../assets/img/blue-right.png";
import bg from "../../assets/img/header-cabang.png";
import { isMobile } from "react-device-detect";

import "../../assets/css/main.css";

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={prevButton}
      style={{ height: "50px", width: "auto", paddingLeft: "50%" }}
    />
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <img
      className="btn-round slick-arrow next-btn"
      // aria-label="Next"
      onClick={props.onClick}
      src={nextButton}
      style={{ height: "50px", width: "auto", paddingLeft: "52%" }}
    />
  );
};

const styleCard = {
  backgroundImage: "url(" + require("assets/img/news1.png") + ")",
  height: "30vh",
  backgroundSize: "cover"
};

// core components

// custom previous button for the slick component
// const PrevButton = props => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-prev slick-arrow bg-white"
//       // color="primary"
//       aria-label="Previous"
//       type="button"
//       onClick={props.onClick}
//       style={{ marginTop: "35px" }}
//     >
//       <i className="tim-icons icon-minimal-left" />
//     </Button>
//   );
// };
// // custom next button for the slick component
// const NextButton = props => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-arrow bg-white"
//       // color="primary"
//       aria-label="Next"
//       type="button"
//       style={{ marginTop: "35px" }}
//     >
//       <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
//     </Button>
//   );
// };

class News extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    // activeTab: "1,

    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };

  // carousel1Index: 0,
  // carousel2Index: 0,
  // activeTab: "1",
  // slickSettings: {
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   beforeChange: (oldSlide, newSlide) => {
  //     if (oldSlide !== newSlide) {
  //       this.setState({ activeTab: newSlide });
  //     }
  //   },
  //   prevArrow: <PrevButton />,
  //   nextArrow: <NextButton />,
  //   className: "center slider",
  //   slide: "section",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // }
  // };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items, tab) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  previous = (carousel, items) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  goToIndex = (newIndex, carousel) => {
    console.log(this.state["carousel" + carousel + "Index"]);
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({
      ["carousel" + carousel + "Index"]: newIndex,
      activeTab: newIndex
    });
  };

  renderContent = () => {
    if (isMobile) {
      return <></>;
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return <></>;
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    let slickSettings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
      afterChange: current => {
        this.setState({ activeSlide: current });
      },
      className: "center slider",
      slide: "section",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="cd-section broken-white"
                id="testimonials"
                // style={{ backgroundColor: "#D4D4D4" }}
              >
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage: `url(${bg})`,
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <div className="title title-header">Cabang Kami</div>
                </div>

                <div className="testimonials-4">
                  {/* <ColoredNavbar /> */}
                  <Container>
                    <Row>
                      <Col
                        md="12"
                        // style={{ paddingTop: "15vh" }}
                      >
                        {/* <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut"> */}
                        <Slick {...slickSettings}>
                          <div>
                            <NavLink
                              className={
                                this.state.activeSlide === 0 ? "scaled" : ""
                              }
                              // onClick={() => {
                              //   this.toggle("1");
                              // }}
                              style={{
                                backgroundImage:
                                  "url(" +
                                  require("assets/img/kantorpusat.png") +
                                  ")",
                                height: "30vh",
                                backgroundSize: "cover"
                              }}
                            ></NavLink>
                          </div>
                          <div>
                            <NavLink
                              className={
                                this.state.activeSlide === 1 ? "scaled" : ""
                              }
                              // onClick={() => {
                              //   this.toggle("2");
                              // }}
                              style={{
                                backgroundImage:
                                  "url(" +
                                  require("assets/img/sumgaigerong.png") +
                                  ")",
                                height: "30vh",
                                backgroundSize: "cover"
                              }}
                            ></NavLink>
                          </div>
                          <div>
                            <NavLink
                              className={
                                this.state.activeSlide === 2 ? "scaled" : ""
                              }
                              // onClick={() => {
                              //   this.toggle("3");
                              // }}
                              style={styleCard}
                            ></NavLink>
                          </div>
                          <div>
                            <NavLink
                              className={
                                this.state.activeSlide === "4" ? "scaled" : ""
                              }
                              // onClick={() => {
                              //   this.toggle("4");
                              // }}
                              style={styleCard}
                            ></NavLink>
                          </div>
                          <div>
                            <NavLink
                              className={
                                this.state.activeSlide === "5" ? "scaled" : ""
                              }
                              // onClick={() => {
                              //   this.toggle("5");
                              // }}
                              style={styleCard}
                            ></NavLink>
                          </div>
                        </Slick>
                        {/* </ScrollAnimation> */}
                      </Col>
                      <Col
                        className="positioned"
                        style={{ marginTop: "60px" }}
                        lg="4"
                        md="8"
                        xs="10"
                      >
                        {/* <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut"> */}
                        <h1 className="title font-black">Cabang Kami</h1>
                        <p className="description text-white">
                          <TabContent
                            activeTab={"project" + this.state.activeSlide}
                          >
                            <TabPane tabId="project0">
                              {/* <Col> */}
                              <div className="title font-black">
                                Kantor Pusat
                              </div>
                              <p className="description font-black mb-5">
                                Sahid Sudirman Center, Lantai 40 Jl. Jend
                                Sudirman Kav 86 Jakarta 10220 Indonesia +62.21.
                                2788 9393
                              </p>
                              {/* </Col> */}
                            </TabPane>
                            <TabPane tabId="project1">
                              <div className="title font-black">
                                Kantor Cabang Sungai Gerong
                              </div>
                              <p className="description font-black mb-5">
                                Sahid Sudirman Center, Lantai 40 Jl. Jend
                                Sudirman Kav 86 Jakarta 10220 Indonesia +62.21.
                                2788 9393
                              </p>
                            </TabPane>
                            <TabPane tabId="project2">
                              <p className="description font-black mb-5">
                                Add your information here for News 3.
                              </p>
                            </TabPane>
                            <TabPane tabId="project3">
                              <p className="description font-black mb-5">
                                Add your information here for News 4.
                              </p>
                            </TabPane>
                            <TabPane tabId="project4">
                              <p className="description font-black mb-5">
                                Add your information here for News 5.
                              </p>
                            </TabPane>
                          </TabContent>
                        </p>
                        {/* </ScrollAnimation> */}
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default News;
