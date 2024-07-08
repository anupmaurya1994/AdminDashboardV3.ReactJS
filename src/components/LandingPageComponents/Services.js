import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import '../../pages/Layout3/layout3.scss'

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Our Services</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 sbox">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <FeatherIcon icon="box" />
                    </div>
                    <h4 className="mb-3 font-size-22">Digital Design</h4>
                    <p className="mb-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 active sbox">
                  <div className="service-box-content p-4 ">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <FeatherIcon icon="layers" />
                    </div>
                    <h4 className="mb-3 font-size-22">Awesome Support</h4>
                    <p className=" mb-0">
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 sbox">
                  <div className="service-box-content p-4 ">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <FeatherIcon icon="server" />
                    </div>
                    <h4 className="mb-3 font-size-22">Easy to customize</h4>
                    <p className=" mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
