import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Alert
} from "reactstrap";
import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

import "../../assets/css/main.css";

let mailChimpApiKey = "ea18025b462e8bef8a102ecfbcd8a856-us4";
let mailChimpPostUrl =
  "https://us4.api.mailchimp.com/3.0/lists/e2880ae15c/members/";

class NewsLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      successAlert: false
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#1D1E1F" }}>
        <Container>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="8" xs="10">
                <div className="text-center">
                  <h4 className="title">
                    {this.props.pageStore.Landing.NewsLetter.title}
                  </h4>
                  <p className="description">
                    {this.props.pageStore.Landing.NewsLetter.subtitle}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="8" xs="10">
              <Card className="card-raised card-form-horizontal black-newsletter">
                <CardBody>
                  <Form action="" method="">
                    <Row>
                      <Col sm="8" style={{ marginTop: "5px" }}>
                        <InputGroup
                        // className={classnames({
                        //   "input-group-focus": this.state.emailFocus
                        // })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder={
                              this.props.pageStore.Landing.NewsLetter.form.email
                            }
                            type="email"
                            value={this.state.email}
                            onChange={async e => {
                              await this.setState({
                                email: e.target.value
                              });
                            }}
                            onFocus={e => this.setState({ emailFocus: true })}
                            onBlur={e => this.setState({ emailFocus: false })}
                          />
                        </InputGroup>
                      </Col>
                      <Col sm="4">
                        {/* <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.Landing.NewsLetter.form
                              .button_link
                          }
                        > */}
                        <Button
                          block
                          color="info"
                          type="button"
                          onClick={async () => {
                            try {
                              await fetch(mailChimpPostUrl, {
                                method: "POST",
                                headers: {
                                  Accept: "application/json",
                                  "Access-Control-Allow-Origin": "*",
                                  Authorization: `apikey ${mailChimpApiKey}`,
                                  "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                  email_address: this.state.email,
                                  status: "subscribed"
                                })
                              });
                              await this.setState({
                                successAlert: true
                              });
                            } catch (error) {
                              console.log(error);
                            }
                          }}
                        >
                          {this.props.pageStore.Landing.NewsLetter.form.button}
                        </Button>
                        {/* </a> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Alert
                          color="success"
                          isOpen={this.state.successAlert}
                          toggle={() =>
                            this.setState({
                              successAlert: false
                            })
                          }
                        >
                          {this.props.currentLang === "ID"
                            ? "Email Sukses Berlangganan"
                            : "Email Subscribed"}
                        </Alert>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
