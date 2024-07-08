import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import '../../pages/Layout3/layout3.scss'
import Background from "../../assets/images-for-landing/demos.png";
import features_img1 from "../../assets/images-for-landing/features-1.jpg";
import dot_img from "../../assets/images-for-landing/dot-img.png";
import features_img2 from "../../assets/images-for-landing/features-2.jpg";

const Feature = () => {
  return (
    <React.Fragment>
      <div className="bg-light">
      <section className="section bg-light" id="features">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={7} className="text-center">
              <h2 className="fw-bold">Our Features</h2>
              <p className="text-muted">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem ab illo inventore.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
              <h2 className="my-4">Perfect Solution For Small Businesses</h2>
              <p className="text-muted mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis..
              </p>
              <Button href="#" className="btn btn-primary">
                Find out more{" "}
                <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
              </Button>
            </Col>
            <Col md={6} className="ms-md-auto order-1 order-md-2">
              <div className="position-relative">
                <div className="ms-5 features-img main-img-1">
                  <img
                    src={features_img1}
                    alt=""
                    className="img-fluid d-block mx-auto rounded shadow"
                  />
                </div>
                <img src={dot_img} alt="" className="dot-img-left dot-img-1" />
              </div>
            </Col>
          </Row>
          <Row className="align-items-center section pb-0">
            <Col md={6}>
              <div className="position-relative mb-md-0 mb-5">
                <div className="me-5 features-img">
                  <img
                    src={features_img2}
                    alt=""
                    className="img-fluid d-block mx-auto rounded shadow main-img-1"
                  />
                </div>
                <img src={dot_img} alt="" className="dot-img-right dot-img-2" />
              </div>
            </Col>
            <Col md={5} className="ms-md-auto text-dark">
              <h2 className="my-4">
                Build community & conversion with our suite of social tool
              </h2>
              <p className="text-muted mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis..
              </p>
              <Button href="#" className="btn btn-primary">
                Find out more{" "}
                <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section bg-gradient-primary mt-5" id="feature-2">
        <div
          className="bg-overlay-img"
          style={{ background: `url(${Background})`}}
        ></div>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col lg={8}>
              <div className="text-center">
                <h1 className=" mb-4">
                  Build your dream website today
                </h1>
                <p className=" mb-5 font-size-16">
                  Sed perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totamrem aperiam eaque
                  inventore veritatis quasi.
                </p>
                <Button href="#" className="btn btn-lg btn-light">
                  Ask for Demonstration
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </React.Fragment>
  );
}

export default Feature;
