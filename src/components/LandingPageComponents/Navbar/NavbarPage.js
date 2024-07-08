import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavbarBrand, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logodark from "../../../assets/images-for-landing/logo-dark.png";
import logolight from "../../../assets/images-for-landing/logo-light.png";
import FeatherIcon from "feather-icons-react";
import ScrollspyNav from "./Scrollspy";

const NavbarPage = ({ navItems, navClass, imglight }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var targetId = navItems.map((item) => {
    return item.idnm;
  });

  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        fixed="top"
        className={
          "navbar navbar-expand-lg fixed-top navbar-custom position-fixed" +
          (isScrolled ? " bg-white shadow-sm" : "") +
          navClass
        }
        id="navbar"
      >
        <Container>
          <NavbarBrand className="logo" href="/">
            {imglight === true ? (
              <img src={logolight} alt="" height="28" />
            ) : (
              <img src={logodark} alt="" height="28" />
            )}
          </NavbarBrand>
          <Navbar.Toggle onClick={toggle}>
            <i>
              <FeatherIcon icon="menu" />
            </i>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarCollapse"
            isOpen={isOpenMenu}
            className="navbar-collapse"
          >
            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="true"
              activeNavClass="active"
              className="navbar-collapse"
            >
              <Nav className="ms-auto navbar-center" id="mySidenav">
                {navItems.map((item, key) => (
                   <Nav.Item
                   key={key}
                  //  className={item.navheading === "Home" ? "active" : ""}
                 >
                   <NavLink
                    //  className={item.navheading === "Home" ? "active" : ""}
                     href={"#" + item.idnm}
                   >
                      {item.navheading}
                    </NavLink>
                  </Nav.Item>
                ))}
              </Nav>
              <Link to="" className="btn btn-sm rounded-pill nav-btn ms-lg-3">
                Buy Now
              </Link>
            </ScrollspyNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarPage;
