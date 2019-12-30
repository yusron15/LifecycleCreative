import React from "react";
import {
  Badge,
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
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import MarketOutlook from "../../components/NewsContent/MarketOutlook.jsx";
import BreakingNews from "../../components/Landing/BreakingNews.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";

class NewsPage extends React.Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      // <>
      //   <ColoredNavbar />
      //   <Content />
      //   <Footer />
      // </>
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <BlurryNavbar />
          <ColoredNavbar location={{ ...this.props.location }} />
          <div className="space-50" />
          <Nav
            className="nav-pills-info nav-pills-icons nav-pills-lg"
            pills
            role="tablist"
            style={{
              backgroundColor: "#1D1E1F",
              paddingTop: "60px",
              justifyContent: "center",
              paddingBottom: "20px"
            }}
          >
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "1"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "1" ? "active" : ""}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Home
              </div>
            </NavItem>
            {/* <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "2"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                News Stock Index
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "3"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                News Forex & Commodity
              </div>
            </NavItem> */}
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "2"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Stock Index
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "3"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Forex Commodity
              </div>
            </NavItem>
            {/* <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "4"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Economic Calendar Inside
              </div>
            </NavItem> */}
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "4"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                color={this.state.activeTab === "4" ? "#B3B3B3" : "#585858"}
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Economic Calendar
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "5"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                color={this.state.activeTab === "5" ? "#B3B3B3" : "#585858"}
                className={this.state.activeTab === "5" ? "active" : ""}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                Market Outlook
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div className={this.state.activeTab === "7" ? "active" : ""}>
                <Link
                  style={{
                    backgroundColor: "#1D1E1F",
                    margin: "0 15px 0 15px",
                    cursor: "pointer",
                    color: "#B3B3B3",
                    ...(this.state.activeTab === "7"
                      ? { color: "#B3B3B3" }
                      : { color: "#585858" })
                  }}
                  color={this.state.activeTab === "7" ? "#B3B3B3" : "#585858"}
                  to="/edukasi"
                >
                  Video
                </Link>
              </div>
            </NavItem>
          </Nav>
          <BreakingNews />

          <TabContent activeTab={"project" + this.state.activeTab}>
            <TabPane tabId="project1">
              <Content />
            </TabPane>
            {/* <TabPane tabId="project2">
              <NewsStockIndex />
            </TabPane>
            <TabPane tabId="project3">
              <NewsForexCommodity />
            </TabPane> */}
            <TabPane tabId="project2">
              <StockIndex />
            </TabPane>
            <TabPane tabId="project3">
              <ForexCommodity />
            </TabPane>
            {/* <TabPane tabId="project4">
              <EconomicCalendarInside />
            </TabPane> */}
            <TabPane tabId="project4">
              <EconomicCalendar />
            </TabPane>
            <TabPane tabId="project5">
              <NewsMarketOutlook />
              {/* <MarketOutlook /> */}
            </TabPane>
          </TabContent>
          <Footer />
        </div>
      </>
    );
  }
}

export default NewsPage;
