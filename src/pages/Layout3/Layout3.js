import React, { Component, Suspense } from "react";


const Navbar = React.lazy(() => import("../../components/LandingPageComponents/Navbar/NavbarPage"));

const Section = React.lazy(() => import("./Section"));
const Services = React.lazy(() => import("../../components/LandingPageComponents/Services"));
const Feature = React.lazy(() => import("../../components/LandingPageComponents/Feature"));
const Team = React.lazy(() => import("../../components/LandingPageComponents/Team"));
const Blog = React.lazy(() => import("../../components/LandingPageComponents/Blog"));
const Contact = React.lazy(() => import("../../components/LandingPageComponents/Contact"));
const Footer = React.lazy(() => import("../../components/LandingPageComponents/Footer/Footer"));

class Layout3 extends Component {
  // Loader
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 5, idnm: "team", navheading: "Team" },
        { id: 6, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "contact", navheading: "Contact Us" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "navbar-light",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "navbar-light", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          {/* Importing Section */}
          <Section />

          {/* Importing Section */}
          <Services />

          {/* Importing Feature */}
          <Feature />

          {/* Importing Pricing */}
          <Team />

          {/* Importing Blog */}
          <Blog />

          {/* Importing Contact */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout3;
