import React from "react";
import { connect } from "react-redux";

// ReactJS plugin for a nice carousel
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

// import { NewsContent } from "./NewsContent";

import work from "assets/img/work.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";

import "../../assets/css/main.css";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import leftButton from "../../assets/img/blue-right.png";
import rightButton from "../../assets/img/blue-left.png";
import bg from "../../assets/img/header-rekening.png";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const items2 = [
  {
    content: (
      <div
        className="info info-warning broken-white"
        style={{
          backgroundImage: `url(${bg})`,
          // backgroundColor: "rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover"
        }}
      >
        <h4 className="title" style={{ color: "white" }}>
          Best Quality
        </h4>
        <p style={{ color: "white" }}>
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div
        className="info info-warning broken-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover"
        }}
      >
        <h4 className="title" style={{ color: "white" }}>
          Best Quality
        </h4>
        <p style={{ color: "white" }}>
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  }
];

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={rightButton}
      style={{
        height: "50px",
        width: "auto",
        paddingLeft: "35%",
        marginBottom: "20px"
      }}
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
      src={leftButton}
      style={{
        height: "50px",
        width: "auto",
        paddingLeft: "37%",
        marginBottom: "20px"
      }}
    />
  );
};
const styleCard = {
  backgroundImage: "url(" + require("assets/img/news1.png") + ")",
  height: "30vh",
  backgroundSize: "cover"
};

class News extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    // activeTab: "1,

    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };

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
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({
      ["carousel" + carousel + "Index"]: newIndex,
      activeTab: newIndex
    });
  };

  renderContent = () => {
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
    if (isMobile) {
      return (
        <>
          <h3 className="title center" style={{ textAlign: "center" }}>
            {this.props.pageStore.Landing.News.title}
          </h3>
          <div className="testimonials-2" style={{ padding: 0 }}>
            <Container>
              <Row>
                <Col md="12">
                  <Carousel
                    activeIndex={this.state.carousel2Index}
                    next={() => this.next(2, this.props.news.stock)}
                    previous={() => this.previous(2, this.props.news.stock)}
                  >
                    <CarouselIndicators
                      items={this.props.news.stock}
                      activeIndex={this.state.carousel2Index}
                      onClickHandler={newIndex => this.goToIndex(newIndex, 2)}
                    />
                    {this.props.news.stock.map((item, key) => {
                      return (
                        <CarouselItem
                          onExiting={() => this.onExiting(2)}
                          onExited={() => this.onExited(2)}
                          key={key}
                          className="justify-content-center"
                        >
                          <a href={item.link} target="_blank">
                            <div
                              className="info info-warning broken-white"
                              style={{
                                backgroundImage:
                                  "url(" + item.featured_image_src + ")",
                                backgroundColor: "rgba(0, 0, 0, 0.25)",
                                backgroundSize: "cover",
                                height: 200,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                margin: 0,
                                marginBottom: "25px",
                                padding: 0
                              }}
                            >
                              <div
                                style={{
                                  backgroundImage:
                                    "linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(0,0,0,0.32396708683473385) 56%, rgba(0,0,0,0.6713060224089635) 68%, rgba(0,0,0,0.8346113445378151) 85%)",
                                  height: "100vh",
                                  width: "100%",

                                  zIndex: 99
                                }}
                              >
                                <h4
                                  className="title"
                                  style={{
                                    color: "white",
                                    paddingTop: "50px"
                                  }}
                                >
                                  {item.title.rendered}
                                </h4>
                              </div>
                            </div>
                          </a>
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.previous(2, items2);
                      }}
                      role="button"
                    >
                      <i className="tim-icons icon-minimal-left" />
                    </a>
                    <a
                      className="carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.next(2, items2);
                      }}
                      role="button"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </a>
                  </Carousel>
                </Col>
              </Row>
            </Container>
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div className="cd-section" id="testimonials">
          <div
            className="testimonials-4"
            style={{ padding: 0, backgroundColor: "#FCFCFC" }}
          >
            {/* <ColoredNavbar /> */}
            <Container>
              <Row>
                <Col
                  md="12"
                  // style={{ paddingTop: "15vh" }}
                  style={{ minHeight: "50vh" }}
                >
                  <Slick {...slickSettings}>
                    {this.props.news.stock.map(item => (
                      <div>
                        <a href={item.link} target="_blank">
                          <NavLink
                            // className={this.state.activeSlide === 0 ? "scaled" : ""}
                            style={{
                              backgroundImage:
                                "url(" + item.featured_image_src + ")",
                              height: "30vh",
                              backgroundSize: "cover"
                              // borderRadius: 12
                            }}
                          ></NavLink>
                        </a>
                      </div>
                    ))}
                  </Slick>
                </Col>
                <Col
                  className="positioned"
                  style={{
                    backgroundColor: "transparent",
                    marginTop: "5%"
                  }}
                  lg="4"
                  md="8"
                  xs="10"
                >
                  <Link to="/newspage">
                    <h1 className="title font-black">
                      {this.props.pageStore.Landing.News.title}
                    </h1>
                  </Link>
                  <p
                    className="description"
                    style={{ margin: 0, minHeight: "20vh" }}
                  >
                    <TabContent activeTab={"project" + this.state.activeSlide}>
                      {this.props.news.stock.map((item, index) => (
                        <TabPane tabId={`project${index}`}>
                          <a href={item.link} target="_blank">
                            {/* <Col> */}
                            <p className="description font-black">
                              {`${item.title.rendered
                                .replace(/(<([^>]+)>)/gi, "")
                                .substring(0, 100)}...`}
                            </p>
                            {/* </Col> */}
                          </a>
                        </TabPane>
                      ))}
                    </TabContent>
                  </p>

                  <Link to="/newspage">
                    <button className="filled-button">Explore →</button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang,
  news: state.newsStore.news
});

export default connect(mapStateToProps, null)(News);

// const PrevButton = props => {
//   return (
//     <Button
//       className="btn-round btn-icon btn-simple slick-prev slick-arrow bg-white"
//       // color="primary"
//       aria-label="Previous"
//       type="button"
//       // md={{ size: 6, offset: 10 }}
//       onClick={props.onClick}
//       style={{ marginTop: "50px " }}
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
//       // md={{ size: 6, offset: 10 }}
//       aria-label="Next"
//       type="button"
//       style={{ marginTop: "50px" }}
//     >
//       <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
//     </Button>
//   );
// };
