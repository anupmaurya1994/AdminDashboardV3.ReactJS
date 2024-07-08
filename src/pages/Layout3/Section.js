import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Background from "../../assets/images-for-landing/hero-3-bg.png";
import "./layout3.scss";
import withRouter from "components/Common/withRouter";

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <section
        className="hero-3 bg-center position-relative"
        style={{ background: `url(${Background})` }}
        id="home-section"
      >
        <Container>
          <Row className="justify-content-center section-text">
            <Col lg={8}>
              <div className="text-center">
                <span className="badge badge-soft-primary my-4 head-text">
                  Professional Landing
                </span>
                <h1 className="font-weight-semibold my-4 hero-3-title">
                  Professional, Multipurpose Landing Page
                </h1>
                <p className="mb-5 text-muted subtitle w-75 mx-auto">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed consequuntur magni dolores nesciunt.
                </p>

                <div>
                  <Link to="/register">
                    <Button variant="primary" className="rounded-pill me-2"  href="/">
                      Sign up for free
                    </Button>
                  </Link>
                  <Button
                    variant="light"
                    className="rounded-pill me-2"
                    onClick={openModal}
                  >
                    Play video{" "}
                    <FeatherIcon icon="play-circle" className="ms-1 icon-sm" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ModalVideo
          channel="vimeo"
          isOpen={isOpen}
          videoId="12022651"
          onClose={() => setIsOpen(false)}
        />
      </section>
    </React.Fragment>
  );
};

export default withRouter(Section);
