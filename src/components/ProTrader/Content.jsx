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
  CardHeader,
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
  CarouselItem
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/headerprotrader.png";
import rating from "../../assets/img/rating.png";
import report from "../../assets/img/report.png";
import list from "../../assets/img/list.png";
import submit from "../../assets/img/submit.png";
import demand from "../../assets/img/demand.png";
import sorting from "../../assets/img/sorting.png";
import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "2.5rem"
};

const textSubtitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "1.5rem"
};

const textDesc = {
  //   color: "black",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA HONGKONG (HANGSENG))</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

class Content extends React.Component {
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
    return (
      <>
        <div
          className="cd-section"
          id="teams"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* TEAM 1 ********* */}
          <BlurryNavbar />
          <ColoredNavbar />
          <div className="space-50" />
          <div
            className="team-1"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              maxHeight: "200px"
            }}
          >
            <div
              className="title"
              style={{
                marginTop: 0,
                textAlign: "center",
                fontStyle: "Helvetica Bold",
                fontSize: "2rem"
              }}
            >
              Pro I Trader
            </div>
          </div>
          <div className="team-1 broken-white">
            <Container>
              <Row>
                <Col md="12">
                  <div className="description font-black" style={textDesc}>
                    Online Trading di pasar keuangan adalah sebuah keharusan.
                    Bertrading secara online merupakan pengalaman tersendiri
                    karena transaksi dapat dilakukan dengan mudah dan cepat.
                    Karena persaingan ketat, platform online trading menjadi
                    semakin user friendly dan bisa dipadukan dalam semua lingkup
                    teknologi informasi.
                  </div>
                </Col>
                <Col md="12">
                  <div className="description font-black" style={textDesc}>
                    Topgrowth adalah salah satu yang terdepan dalam
                    mengembangkan teknologi online trading yang canggih.
                    Platform Online Trading Topgrowth disebut Pro-iTrading.
                    Platform Pro-iTrading memungkinkan Anda untuk bertransaksi
                    real time produk-produk Forex dan Komoditi sepanjang waktu.
                    Dengan menggunakan platform trading unggul yang menyediakan
                    berbagai alat bantu yang Anda tidak pernah bayangkan
                    sebelumnya serta menyajikan berita real-time, Anda dapat
                    berkonsentrasi pada transaksi Anda.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="team-1" style={{ backgroundColor: "#1D1E1F" }}>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h1 className="title">Fitur Utama Pro-iTrading</h1>
              </Col>
            </Row>
            <div style={{ marginTop: "50px" }}>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={rating} />
                    <h4>Proses eksekusi Order yang Sederhana dan Cepat.</h4>
                  </ScrollAnimation>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={report} />
                    <h4>
                      Life Quotes dalam bentuk Summary maupun Advance mode.
                    </h4>
                  </ScrollAnimation>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={demand} />
                    <h4>
                      Charting dilengkapi dengan tools untuk bertrading secara
                      teknikal.
                    </h4>
                  </ScrollAnimation>
                </Col>
              </Row>
              <Row
                className="ml-auto mr-auto text-center"
                md="9"
                style={{ marginTop: "30px" }}
              >
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={list} />
                    <h4>
                      Berita real-time untuk bertrading secara fundamental
                      Proses eksekusi Order yang Sederhana dan Cepat.
                    </h4>
                  </ScrollAnimation>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={sorting} />
                    <h4 style={{ marginTop: "35px" }}>
                      Bisa disesuaikan dengan kebutuhan anda.
                    </h4>
                  </ScrollAnimation>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <img style={{ marginBottom: "20px" }} src={submit} />
                    <h4>Catatan Trading Anda dapat diakses dengan cepat.</h4>
                  </ScrollAnimation>
                </Col>
              </Row>
            </div>
          </div>
          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
