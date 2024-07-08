import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import '../../../pages/Layout3/layout3.scss'


// Footer Image
import footer_image from "../../../assets/images-for-landing/footer-bg.png";
import logolight from "../../../assets/images-for-landing/logo-light.png";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Customer",
      child: [
        { title: "Works", link: "/" },
        { title: "Strategy", link: "/" },
        { title: "Releases", link: "/" },
        { title: "Press", link: "/" },
        { title: "Mission", link: "/" },
      ],
    },
    {
      id: 2,
      title: "Product",
      child: [
        { title: "Tranding", link: "/" },
        { title: "Popular", link: "/" },
        { title: "Customers", link: "/" },
        { title: "Features", link: "/" },
      ],
    },
    {
      id: 3,
      title: "Information",
      child: [
        { title: "Developers", link: "/" },
        { title: "Support", link: "/" },
        { title: "Customer Service", link: "/" },
        { title: "Get Started", link: "/" },
        { title: "Guide", link: "/" },
      ],
    },
    {
      id: 4,
      title: "Support",
      child: [
        { title: "FAQ", link: "/" },
        { title: "Contact", link: "/" },
        { title: "Disscusion", link: "/" },
      ],
    },
  ];

  return (
    <React.Fragment>
      {/* Footer Start */}
      <footer
        style={{ backgroundImage: `url(${footer_image})` }}
        id="footer"
      >
        <Container>
          <Row>
            <Col lg={4}>
              <div className="mb-4">
                <Link to="#">
                  <img src={logolight} alt="" className="" height="30" />
                </Link>
                <p className="text-white-50 my-4">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti.
                </p>
              </div>
            </Col>
            <Col lg={7} className="ms-lg-auto">
              <Row>
                {/* Render Footer Link */}
                {links.map((item) => (
                  <Col lg={3} xs={6} key={item.id}>
                    <div className="mt-4 mt-lg-0">
                      <h4 className="text-white font-size-18 mb-3">
                        {item.title}
                      </h4>
                      <ul className="list-unstyled footer-sub-menu">
                        {item.child.map((linkItem) => (
                          <li key={linkItem.title}>
                            <Link className="footer-link" to={linkItem.link}>
                              {linkItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* Footer End */}
    </React.Fragment>
  );
};

export default Footer;
