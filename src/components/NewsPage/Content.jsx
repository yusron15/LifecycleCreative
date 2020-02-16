import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardSubtitle,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  CarouselIndicators,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { LangContext } from "../MyContext";

// import { Carousel } from "react-bootstrap";
import { HoverCard } from "react-png-hovercard";
import "../../assets/css/main.css";
import town from "../../assets/img/card-bg-news.png";
import tractor from "../../assets/img/tractor.png";
import futuristic from "../../assets/img/futuristic.png";
import pc from "../../assets/img/preparing-cash-small.png";
import bg from "../../assets/img/header-newspage.png";
import pc2 from "../../assets/img/preparing-cash2-small.png";
import pc3 from "../../assets/img/preparing-cash3-small.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import CardNews from "./CardNews";
import NewsLetter from "../NewsLetter/NewsLetter.jsx";
import right from "../../assets/img/black-right-icon.png";
import { isMobile } from "react-device-detect";
import HorizontalScroll from "react-scroll-horizontal";

import { connect } from "react-redux";
import moment from "moment";

import ReactHtmlParser from "react-html-parser";

const textTitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.2rem",
  marginTop: "20rem"
};

const textSubtitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.5rem"
};

const textDesc = {
  color: "white",
  fontSize: "1rem"
};

const items = [
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "10px"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Bursa Saham Asia Mengawali Tahun Ini Dengan Positif</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "10px"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Lorem Ipsum</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "10px"
        }}
      >
        <Container>
          <Row>
            <Col md="12">
              <div style={textTitle}>
                <b>Lorem Ipsum</b>
              </div>
            </Col>
            <Col md="12">
              <div className="description" style={textDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

class Carding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  renderContent = () => {
    let itemsBeritaTerkini = [];
    let itemsBeritaTerpopuler = [];
    let itemsBeritaMarketOutlook = [];

    if (this.props.allNews.length > 0) {
      itemsBeritaTerkini = this.props.allNews.slice(0, 3).map((item, index) => {
        return {
          content: (
            <a href={item.link}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  position: "relative",
                  height: "100%",
                  width: "100%"
                }}
              >
                <a href={item.link}>
                  <img
                    src={item.featured_image_src}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%"
                    }}
                  />
                </a>
                <div
                  style={{
                    display: "flex",
                    alignSelf: "flex-end",
                    flexDirection: "column",
                    padding: 20,
                    zIndex: 999,
                    marginBottom: 30
                  }}
                >
                  <a href={item.link}>
                    <div style={textTitle}>
                      <b>{item.title.rendered}</b>
                    </div>
                    <div className="description" style={textDesc}>
                      {ReactHtmlParser(item.excerpt.rendered.slice(0, 120))}
                    </div>
                  </a>
                </div>
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(0,0,0,0.32396708683473385) 56%, rgba(0,0,0,0.6713060224089635) 68%, rgba(0,0,0,0.8346113445378151) 85%)",
                    position: "absolute",
                    height: "100%",
                    width: "100%"
                  }}
                ></div>
              </div>
            </a>
          ),
          altText: "",
          caption: "",
          src: "2"
        };
      });

      itemsBeritaTerpopuler = this.props.allNews
        .filter((item, index) => {
          return index == 8 || index == 4;
        })
        .map((item, index) => {
          return (
            <a href={item.link}>
              <div>
                <CardImg
                  top
                  width="100%"
                  height="50%"
                  src={item.featured_image_src}
                  alt="Card image cap"
                />

                <div className="font-black">
                  <CardTitle>{item.title.rendered}</CardTitle>
                </div>
              </div>
            </a>
          );
        });

      itemsBeritaMarketOutlook = this.props.allNews.filter(item => {
        return item.categories.includes(138);
      });
    }

    if (isMobile) {
      return (
        <>
          <div
            className="cd-section broken-white"
            id="teams"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            {/* ********* TEAM 2 ********* */}
            {/* <BlurryNavbar /> */}

            <div className="team-2">
              <div>
                <Container>
                  <div
                    style={{
                      backgroundColor: "rgba(183, 183, 183, 0.17)",
                      padding: "20px",
                      borderRadius: "5px"
                    }}
                  >
                    <Row>
                      <Col md="8">
                        <div
                          className="title font-black"
                          style={{ fontSize: "1.5rem", marginTop: 0 }}
                        >
                          {this.props.pageStore.berita.terkini}
                        </div>
                        <Carousel
                          activeIndex={this.state.activeIndex}
                          next={this.next}
                          previous={this.previous}
                          //   className="carousel-team"
                          style={{
                            borderRadius: "20px",
                            backgroundColor: "transparent"
                          }}
                        >
                          <CarouselIndicators
                            items={itemsBeritaTerkini}
                            activeIndex={this.state.activeIndex}
                            onClickHandler={this.goToIndex}
                          />

                          {itemsBeritaTerkini.map((item, key) => {
                            return (
                              <CarouselItem
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                                key={key}
                              >
                                {item.content}
                              </CarouselItem>
                            );
                          })}

                          <Col
                            sm="12"
                            style={{
                              position: "absolute",
                              paddingLeft: "80%",
                              bottom: "8%"
                            }}
                          ></Col>
                        </Carousel>
                      </Col>

                      <Col md="4">
                        <div
                          className="title font-black"
                          style={{
                            fontSize: "1.5rem",
                            marginTop: "20px",
                            paddingLeft: "15px"
                          }}
                        >
                          {this.props.pageStore.berita.terpopuler}
                        </div>
                        <Col>{itemsBeritaTerpopuler}</Col>
                      </Col>
                    </Row>
                    <Col>
                      <Col>
                        <div style={{ marginTop: "50px" }}>
                          <HoverCard
                            borderRadius={10}
                            maxWidth={500}
                            animationSpeed={500}
                            height={130}
                            front={
                              <div>
                                <img
                                  src={town}
                                  alt=""
                                  style={{ objectFit: "cover" }}
                                />
                                <h2 className="text-news-mobile">
                                  <span>Morning News</span>
                                </h2>
                              </div>
                            }
                            back={
                              <Container
                                style={{
                                  marginTop: "10px",
                                  justifyContent: "center"
                                }}
                              >
                                <div
                                  style={{
                                    textAlign: "center",
                                    margintTop: "5px"
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#167AFF",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    Bursa Asia Ditekan Aksi Ambil Untung
                                  </div>
                                  <div className="font-black">12/31/2019</div>
                                  <div className="font-black">
                                    Bursa Asia Ditekan Aksi Ambil Untung Belum
                                    Terpengaruh Iran-AS
                                  </div>
                                </div>
                              </Container>
                            }
                          />
                        </div>
                        <br />
                      </Col>
                      <Col>
                        <div style={{ marginTop: "20px" }}>
                          <HoverCard
                            borderRadius={10}
                            maxWidth={500}
                            animationSpeed={500}
                            height={130}
                            front={
                              <div>
                                <img
                                  src={town}
                                  alt=""
                                  style={{ objectFit: "cover" }}
                                />
                                <h2 className="text-news-mobile">
                                  <span>Market Updates</span>
                                </h2>
                              </div>
                            }
                            back={
                              <Container
                                style={{
                                  marginTop: "10px",
                                  justifyContent: "center"
                                }}
                              >
                                <div
                                  style={{
                                    textAlign: "center",
                                    margintTop: "5px"
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#167AFF",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    Bursa Asia Ditekan Aksi Ambil Untung
                                  </div>
                                  <div className="font-black">12/31/2019</div>
                                  <div className="font-black">
                                    Bursa Asia Ditekan Aksi Ambil Untung Belum
                                    Terpengaruh Iran-AS
                                  </div>
                                </div>
                              </Container>
                            }
                          />
                        </div>
                        <br />
                      </Col>
                      <Col>
                        <div style={{ marginTop: "20px" }}>
                          <HoverCard
                            borderRadius={10}
                            maxWidth={500}
                            animationSpeed={500}
                            height={130}
                            front={
                              <div>
                                <img
                                  src={town}
                                  alt=""
                                  style={{ objectFit: "cover" }}
                                />
                                <h2 className="text-news-mobile">
                                  <span>PM Market News</span>
                                </h2>
                              </div>
                            }
                            back={
                              <Container
                                style={{
                                  marginTop: "10px",
                                  justifyContent: "center"
                                }}
                              >
                                <div
                                  style={{
                                    textAlign: "center",
                                    margintTop: "5px"
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#167AFF",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    Bursa Asia Ditekan Aksi Ambil Untung
                                  </div>
                                  <div className="font-black">12/31/2019</div>
                                  <div className="font-black">
                                    Bursa Asia Ditekan Aksi Ambil Untung Belum
                                    Terpengaruh Iran-AS
                                  </div>
                                </div>
                              </Container>
                            }
                          />
                        </div>
                        <br />
                      </Col>
                    </Col>
                  </div>
                </Container>
              </div>

              <Container>
                <div
                  style={{
                    backgroundColor: "rgba(183, 183, 183, 0.17)",
                    padding: "50px",
                    paddingTop: "10px",
                    marginTop: "20px",
                    borderRadius: "5px"
                  }}
                >
                  <Row>
                    {/* <Col md="1"/> */}

                    <div
                      className="ml-auto mr-auto text-center"
                      // md={{ size: 10, order: 0, offset: 1 }}
                      md="10"
                    >
                      <h4 className="title font-black">
                        {this.props.pageStore.berita.outlook}
                      </h4>
                    </div>
                    <div>
                      <Link to="/market-outlook">
                        <img
                          style={{
                            paddingTop: "4vh"
                          }}
                          src={right}
                        />
                      </Link>
                    </div>
                  </Row>
                  <Row>
                    {this.props.news.market.map((item, index) => (
                      <Row key={index.toString()}>
                        <CardNews
                          title={item.title.rendered}
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                          image={item.featured_image_src}
                          person="person"
                          date="dd/mm/yyyy"
                        />
                      </Row>
                    ))}
                  </Row>
                </div>
              </Container>

              <Container>
                <div
                  style={{
                    backgroundColor: "rgba(183, 183, 183, 0.17)",
                    padding: "50px",
                    paddingTop: "10px",
                    marginTop: "20px",
                    borderRadius: "5px"
                  }}
                >
                  <Row>
                    {/* <Col md="1"/> */}

                    <div
                      className="ml-auto mr-auto text-center"
                      // md={{ size: 10, order: 0, offset: 1 }}
                      md="10"
                    >
                      <h4 className="title font-black">
                        {this.props.pageStore.berita.forex}
                      </h4>
                    </div>
                    <div>
                      <Link to="/forex-commodity">
                        <img
                          style={{
                            paddingTop: "4vh"
                          }}
                          src={right}
                        />
                      </Link>
                    </div>
                  </Row>
                  <Row>
                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc}
                      person="person"
                      date="dd/mm/yyyy"
                    />

                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc2}
                      person="person"
                      date="dd/mm/yyyy"
                    />

                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc3}
                      person="person"
                      date="dd/mm/yyyy"
                    />
                  </Row>
                </div>
              </Container>

              <Container>
                <div
                  style={{
                    backgroundColor: "rgba(183, 183, 183, 0.17)",
                    padding: "50px",
                    paddingTop: "10px",
                    marginTop: "20px",
                    borderRadius: "5px"
                  }}
                >
                  <Row>
                    {/* <Col md="1"/> */}

                    <div
                      className="ml-auto mr-auto text-center"
                      // md={{ size: 10, order: 0, offset: 1 }}
                      md="10"
                    >
                      <h4 className="title font-black">
                        {this.props.pageStore.berita.stock}
                      </h4>
                    </div>
                    <div>
                      <Link to="/market-outlook">
                        <img
                          style={{
                            paddingTop: "4vh"
                          }}
                          src={right}
                        />
                      </Link>
                    </div>
                  </Row>
                  <Row>
                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc}
                      person="person"
                      date="dd/mm/yyyy"
                    />

                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc2}
                      person="person"
                      date="dd/mm/yyyy"
                    />

                    <CardNews
                      title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                      image={pc3}
                      person="person"
                      date="dd/mm/yyyy"
                    />
                  </Row>
                </div>
              </Container>
            </div>
            <NewsLetter />
            {/* ********* END TEAM 2 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div
          className="cd-section broken-white"
          id="teams"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          {/* ********* TEAM 2 ********* */}
          {/* <BlurryNavbar /> */}

          <div className="team-2">
            <div>
              <Container>
                <div
                  style={{
                    backgroundColor: "rgba(183, 183, 183, 0.17)",
                    padding: "20px",
                    borderRadius: "5px"
                  }}
                >
                  <Row>
                    <Col md="8">
                      <div
                        className="title font-black"
                        style={{ fontSize: "1.5rem", marginTop: 0 }}
                      >
                        {this.props.pageStore.berita.terkini}
                      </div>
                      <Carousel
                        activeIndex={this.state.activeIndex}
                        next={this.next}
                        previous={this.previous}
                        //   className="carousel-team"
                        style={{
                          borderRadius: "20px",
                          backgroundColor: "transparent",
                          height: "100%"
                        }}
                      >
                        {itemsBeritaTerkini.map((item, key) => {
                          return (
                            <CarouselItem
                              onExiting={this.onExiting}
                              onExited={this.onExited}
                              key={key}
                            >
                              {item.content}
                            </CarouselItem>
                          );
                        })}
                        <CarouselIndicators
                          items={itemsBeritaTerkini}
                          activeIndex={this.state.activeIndex}
                          onClickHandler={this.goToIndex}
                        />
                      </Carousel>
                    </Col>

                    <Col md="4">
                      <div
                        className="title font-black"
                        style={{
                          fontSize: "1.5rem",
                          marginTop: 0,
                          paddingLeft: "15px"
                        }}
                      >
                        {this.props.pageStore.berita.terpopuler}
                      </div>
                      <Col>{itemsBeritaTerpopuler}</Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div style={{ marginTop: "50px" }}>
                        <HoverCard
                          borderRadius={10}
                          maxWidth={500}
                          animationSpeed={500}
                          height={150}
                          front={
                            <div>
                              <img
                                src={town}
                                alt=""
                                style={{ objectFit: "cover" }}
                              />
                              <h2 className="text-news">
                                <span>Morning News</span>
                              </h2>
                            </div>
                          }
                          back={
                            <Container
                              style={{
                                marginTop: "20px",
                                justifyContent: "center"
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "center",
                                  margintTop: "10px"
                                }}
                              >
                                <div
                                  style={{
                                    color: "#167AFF",
                                    fontWeight: "bold"
                                  }}
                                >
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                </div>
                                <div className="font-black">12/31/2019</div>
                                <div className="font-black">
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                  <br />
                                  Belum Terpengaruh Iran-AS, Pasar SUN Masih
                                  Mengua
                                </div>
                              </div>
                            </Container>
                          }
                        />
                      </div>
                      <br />
                    </Col>
                    <Col>
                      <div style={{ marginTop: "50px" }}>
                        <HoverCard
                          borderRadius={10}
                          maxWidth={500}
                          animationSpeed={500}
                          height={150}
                          front={
                            <div>
                              <img
                                src={town}
                                alt=""
                                style={{ objectFit: "cover" }}
                              />
                              <h2 className="text-news">
                                <span>Market Updates</span>
                              </h2>
                            </div>
                          }
                          back={
                            <Container
                              style={{
                                marginTop: "20px",
                                justifyContent: "center"
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "center",
                                  margintTop: "10px"
                                }}
                              >
                                <div
                                  style={{
                                    color: "#167AFF",
                                    fontWeight: "bold"
                                  }}
                                >
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                </div>
                                <div className="font-black">12/31/2019</div>
                                <div className="font-black">
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                  <br />
                                  Belum Terpengaruh Iran-AS, Pasar SUN Masih
                                  Mengua
                                </div>
                              </div>
                            </Container>
                          }
                        />
                      </div>
                      <br />
                    </Col>
                    <Col>
                      <div style={{ marginTop: "50px" }}>
                        <HoverCard
                          borderRadius={10}
                          maxWidth={500}
                          animationSpeed={500}
                          height={150}
                          front={
                            <div>
                              <img
                                src={town}
                                alt=""
                                style={{ objectFit: "cover" }}
                              />
                              <h2 className="text-news">
                                <span>PM Market News</span>
                              </h2>
                            </div>
                          }
                          back={
                            <Container
                              style={{
                                marginTop: "20px",
                                justifyContent: "center"
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "center",
                                  margintTop: "10px"
                                }}
                              >
                                <div
                                  style={{
                                    color: "#167AFF",
                                    fontWeight: "bold"
                                  }}
                                >
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                </div>
                                <div className="font-black">12/31/2019</div>
                                <div className="font-black">
                                  Bursa Asia Ditekan Aksi Ambil Untung
                                  <br />
                                  Belum Terpengaruh Iran-AS, Pasar SUN Masih
                                  Mengua
                                </div>
                              </div>
                            </Container>
                          }
                        />
                      </div>
                      <br />
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>

            <Container>
              <div
                style={{
                  backgroundColor: "rgba(183, 183, 183, 0.17)",
                  padding: "50px",
                  paddingTop: "10px",
                  marginTop: "20px",
                  borderRadius: "5px"
                }}
              >
                <Row>
                  <Col md="1" />

                  <Col
                    className="ml-auto mr-auto text-center"
                    // md={{ size: 10, order: 0, offset: 1 }}
                    md="10"
                  >
                    <h2 className="title font-black">
                      {this.props.pageStore.berita.outlook}
                    </h2>
                  </Col>
                  <Col md="1">
                    <Link to="/market-outlook">
                      <img
                        style={{
                          paddingTop: "4vh"
                        }}
                        src={right}
                      />
                    </Link>
                  </Col>
                </Row>
                <Row>
                  {this.props.news.market.slice(0, 3).map((item, index) => (
                    <Col key={index.toString()}>
                      <CardNews
                        title={item.title.rendered}
                        description={ReactHtmlParser(
                          item.excerpt.rendered.slice(0, 120)
                        )}
                        link={item.link}
                        image={item.featured_image_src}
                        person="person"
                        date={`${moment(item.date).format(
                          "DD/MM/YY HH:mm"
                        )} WIB`}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>

            <Container>
              <div
                style={{
                  backgroundColor: "rgba(183, 183, 183, 0.17)",
                  padding: "50px",
                  paddingTop: "10px",
                  marginTop: "20px",
                  borderRadius: "5px"
                }}
              >
                <Row>
                  <Col md="1" />
                  <Col className="ml-auto mr-auto text-center" md="10">
                    <h2 className="title font-black">
                      {this.props.pageStore.berita.forex}
                    </h2>
                  </Col>
                  <Col md="1">
                    <Link to="/forex-commodity">
                      <img
                        style={{
                          paddingTop: "4vh"
                        }}
                        src={right}
                      />
                    </Link>
                  </Col>
                </Row>
                <Row>
                  {this.props.news.forex.slice(0, 3).map((item, index) => (
                    <Col key={index.toString()}>
                      <CardNews
                        title={item.title.rendered}
                        description={ReactHtmlParser(
                          item.excerpt.rendered.slice(0, 120)
                        )}
                        link={item.link}
                        image={item.featured_image_src}
                        person="person"
                        date={`${moment(item.date).format(
                          "DD/MM/YY HH:mm"
                        )} WIB`}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>

            <Container>
              <div
                style={{
                  backgroundColor: "rgba(183, 183, 183, 0.17)",
                  padding: "50px",
                  paddingTop: "10px",
                  marginTop: "20px",
                  borderRadius: "5px"
                }}
              >
                <Row>
                  <Col md="1" />
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title font-black">
                      {this.props.pageStore.berita.stock}
                    </h2>
                  </Col>
                  <Col md="1">
                    <Link to="/stock-index">
                      <img
                        style={{
                          paddingTop: "4vh"
                        }}
                        src={right}
                      />
                    </Link>
                  </Col>
                </Row>
                <Row>
                  {this.props.news.stock.slice(0, 3).map((item, index) => (
                    <Col key={index.toString()}>
                      <CardNews
                        link={item.link}
                        title={item.title.rendered}
                        description={ReactHtmlParser(
                          item.excerpt.rendered.slice(0, 120)
                        )}
                        image={item.featured_image_src}
                        person="person"
                        date={`${moment(item.date).format(
                          "DD/MM/YY HH:mm"
                        )} WIB`}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
          </div>
          <NewsLetter />
        </div>{" "}
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  allNews: state.newsStore.allNews,
  news: state.newsStore.news
});

export default connect(mapStateToProps, null)(Carding);
