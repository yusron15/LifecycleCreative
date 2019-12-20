import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Edukasi/Content.jsx";
class Edukasi extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <ColoredNavbar location={{ ...this.props.location }} />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Edukasi;