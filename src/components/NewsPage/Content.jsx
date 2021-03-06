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

const API_KEY = "AIzaSyBK9vHQHrRhSXDhj3K3Elo-yLB0EZxoHMc";
const PLAYLIST_PM_MARKET = "PLzeWDGNIcxbFRu8k6ee7nIngLotBGKgx1";
const PLAYLIST_MARKET_UPDATE = "PLzeWDGNIcxbHTHWk69y3gvyg_IkeDA-If";
const PLAYLIST_MORNING_NEWS = "PLzeWDGNIcxbGWpnm0wEHpRkAYIjXh5aAL";
const PLAYLIST_TOPGROWTH_FUTURES = "PLzeWDGNIcxbHeQhDrk-kHvBOrPJJHffen";

class Carding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      playListids: [
        {
          name: "Morning News",
          id: PLAYLIST_MORNING_NEWS,
          videos: [],
          pageToken: ""
        },
        {
          name: "Market Updates",
          id: PLAYLIST_MARKET_UPDATE,
          videos: [],
          pageToken: ""
        },
        {
          name: "PM Market News",
          id: PLAYLIST_PM_MARKET,
          videos: [],
          pageToken: ""
        }
      ]
    };
  }

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);

      await this.fetchingYoutubeVideos();
    } catch (error) {
      console.log(error);
    }
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 3 - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0 ? 3 - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  onExited = () => {
    this.animating = false;
  };

  fetchingYoutubeVideos = async (next, indexVideos) => {
    try {
      await this.setState({ loading: true });

      let dataPlaylist = [...this.state.playListids];

      await Promise.all(
        dataPlaylist.map(async (item, index) => {
          let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${item.id}&part=snippet%2CcontentDetails&key=${API_KEY}`;

          if (next) {
            if (indexVideos === index) {
              url = `${url}&pageToken=${item.pageToken}`;
              const response = await fetch(url);
              const json = await response.json();
              item.videos = [...item.videos, ...json["items"]];
              item.pageToken = json.nextPageToken;
            }
          } else {
            const response = await fetch(url);
            const json = await response.json();
            item.videos = json.items;
            item.pageToken = json.nextPageToken;
          }

          return item;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  renderContent = () => {
    let itemsBeritaTerkini = [];
    let itemsBeritaTerpopuler = [];
    let itemsBeritaMarketOutlook = [];

    if (this.props.allNews.length > 0) {
      itemsBeritaTerkini = this.props.allNews.slice(0, 3).map((item, index) => {
        return {
          content: (
            <div
              style={{
                display: "flex",
                flex: 1,
                position: "relative",
                height: "100%",
                width: "100%"
              }}
            >
              {/* <a href={item.link}> */}
              <img
                src={item.featured_image_src}
                style={{
                  height: 500,
                  flex: 1,
                  // height: "100%",
                  width: "100%"
                }}
              />
              {/* </a> */}
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  flexDirection: "column",
                  position: "absolute",
                  padding: 20,
                  zIndex: 99
                  // marginBottom: 30
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
                  // height="280"?
                  style={{ height: 200 }}
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
                          {this.props.pageStore.berita.berita.terkini}
                        </div>
                        <Carousel
                          activeIndex={this.state.activeIndex}
                          next={this.next}
                          previous={this.previous}
                          autoPlay={false}
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
                          {this.props.pageStore.berita.berita.terpopuler}
                        </div>
                        <Col>{itemsBeritaTerpopuler}</Col>
                      </Col>
                    </Row>
                    {this.state.playListids.length > 0 &&
                      this.state.playListids[0].videos.length > 0 && (
                        <Col>
                          {this.state.playListids[0].videos.length > 0 &&
                            this.state.playListids.map((item, index) => {
                              return (
                                <Col>
                                  <div style={{ marginTop: "50px" }}>
                                    <HoverCard
                                      borderRadius={10}
                                      maxWidth={500}
                                      animationSpeed={500}
                                      height={135}
                                      front={
                                        <div>
                                          <img
                                            src={
                                              item.videos[0].snippet.thumbnails
                                                .medium.url
                                            }
                                            alt=""
                                            style={{ objectFit: "fill" }}
                                          />
                                          <h2 className="text-news">
                                            <span>{item.name}</span>
                                          </h2>
                                        </div>
                                      }
                                      back={
                                        <Link to="/video-content">
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
                                                {item.videos[0].snippet.title}
                                              </div>
                                            </div>
                                          </Container>
                                        </Link>
                                      }
                                    />
                                  </div>
                                  <br />
                                </Col>
                              );
                            })}
                        </Col>
                      )}
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
                        {this.props.pageStore.berita.berita.outlook}
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
                        {this.props.pageStore.berita.berita.forex}
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
                    {this.props.news.forex.map((item, index) => (
                      <Row key={index.toString()}>
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
                        {this.props.pageStore.berita.berita.stock}
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
                    {this.props.news.stock.map((item, index) => (
                      <Row key={index.toString()}>
                        <CardNews
                          title={item.title.rendered}
                          description={ReactHtmlParser(
                            item.excerpt.rendered.slice(0, 120)
                          )}
                          link={item.link}
                          image={item.featured_image_src}
                          // person="person"
                          date={`${moment(item.date).format(
                            "DD/MM/YY HH:mm"
                          )} WIB`}
                        />
                      </Row>
                    ))}
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
                        {this.props.pageStore.berita.berita.terkini}
                      </div>
                      <Carousel
                        activeIndex={this.state.activeIndex}
                        next={this.next}
                        previous={this.previous}
                        //   className="carousel-team"
                        autoPlay={false}
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
                        <div style={{ zIndex: 9999 }}>
                          <CarouselIndicators
                            items={itemsBeritaTerkini}
                            activeIndex={this.state.activeIndex}
                            onClickHandler={this.goToIndex}
                          />
                        </div>
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
                        {this.props.pageStore.berita.berita.terpopuler}
                      </div>
                      <Col>{itemsBeritaTerpopuler}</Col>
                    </Col>
                  </Row>
                  <Row>
                    {this.state.playListids[0].videos.length > 0 &&
                      this.state.playListids.map((item, index) => {
                        return (
                          <Col>
                            <Link
                              to={{
                                pathname: "/video-content",
                                state: {
                                  data: index + 1
                                }
                              }}
                            >
                              <HoverCard
                                borderRadius={10}
                                maxWidth={500}
                                animationSpeed={500}
                                height={150}
                                front={
                                  <div
                                    style={{ height: "100%", width: "100%" }}
                                  >
                                    <img
                                      src={
                                        item.videos[0].snippet.thumbnails.medium
                                          .url
                                      }
                                      alt=""
                                      style={{
                                        height: "100%",
                                        width: "100%"
                                      }}
                                    />
                                    <h2 className="text-news">
                                      <span>{item.name}</span>
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
                                        {item.videos[0].snippet.title}
                                      </div>
                                    </div>
                                  </Container>
                                }
                              />
                            </Link>
                          </Col>
                        );
                      })}
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
                      {this.props.pageStore.berita.berita.outlook}
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
                      {this.props.pageStore.berita.berita.forex}
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
                      {this.props.pageStore.berita.berita.stock}
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
    console.log(this.state.playListid, "vivdisvi");
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  allNews: state.newsStore.allNews,
  news: state.newsStore.news
});

export default connect(mapStateToProps, null)(Carding);
