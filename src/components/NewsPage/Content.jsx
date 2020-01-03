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

import "../../assets/css/main.css";
import town from "../../assets/img/town.png";
import tractor from "../../assets/img/tractor.png";
import futuristic from "../../assets/img/futuristic.png";
import pc from "../../assets/img/preparing-cash-small.png";
import pc2 from "../../assets/img/preparing-cash2-small.png";
import pc3 from "../../assets/img/preparing-cash3-small.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import CardNews from "./CardNews";
import NewsLetter from "../NewsLetter/NewsLetter.jsx";
import HorizontalScroll from "react-scroll-horizontal";

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
        className="team-1 header-filter"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "20px"
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
        className="team-1 header-filter"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "20px"
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
        className="team-1 header-filter"
        style={{
          backgroundImage: "url(" + require("assets/img/gold-town.png") + ")",
          backgroundSize: "cover",
          height: "70vh",
          borderRadius: "20px"
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
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };

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
  render() {
    const child = { width: `300em`, height: `100%` };
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
                <Row>
                  <Col md="8">
                    <div
                      className="title font-black"
                      style={{ fontSize: "1.5rem", marginTop: 0 }}
                    >
                      Berita Terkini
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
                      {items.map((item, key) => {
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
                      style={{ fontSize: "1.5rem", marginTop: 0 }}
                    >
                      Berita Terpopuler
                    </div>
                    <Col>
                      <div>
                        <CardImg
                          top
                          width="100%"
                          height="50%"
                          src={tractor}
                          alt="Card image cap"
                        />
                        <div className="broken-white font-black">
                          <CardTitle>
                            Belum Terpengaruh Iran-AS, Pasar SUN Masih Menguat
                          </CardTitle>
                        </div>
                      </div>

                      <div>
                        <CardImg
                          top
                          width="100%"
                          height="50%"
                          src={futuristic}
                          alt="Card image cap"
                        />
                        <div className="broken-white font-black">
                          <CardTitle>
                            Belum Terpengaruh Iran-AS, Pasar SUN Masih Menguat
                          </CardTitle>
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* <img top width="100%" src={town} alt="Card image cap"/> */}
                    <div class="image">
                      <img src={town} alt="" />
                      <h2 className="text-news">
                        <span>Market Updates</span>
                      </h2>
                    </div>
                    <br />
                  </Col>
                  <Col>
                    {/* <img top width="100%" src={town} alt="Card image cap"/> */}
                    <div class="image">
                      <img src={town} alt="" />
                      <h2 className="text-news">
                        <span>Morning News</span>
                      </h2>
                    </div>
                    <br />
                  </Col>
                </Row>
              </Container>
            </div>

            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title font-black">Market Outlook</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc2}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc3}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title font-black">Forex & Commodity News</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc2}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc3}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title font-black">Stock Index News</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc2}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <CardNews
                    title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua…"
                    image={pc3}
                    person="person"
                    date="dd/mm/yyyy"
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <NewsLetter />
          {/* ********* END TEAM 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Carding;
