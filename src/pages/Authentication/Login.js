import PropTypes from "prop-types";
import React from "react";

import { Row, Col, CardBody, Card, Alert, Container, Input, FormFeedback, Label } from "reactstrap";

//redux
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setUser } from '../../my-actions/authActions';
import { setUser } from "store/actions";

import { Link , useNavigate } from "react-router-dom";
import withRouter from "components/Common/withRouter";

// Formik validation
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

//Social Media Imports
// import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
// import { loginUser, socialLogin } from "../../store/actions";

// import images
import profile from "assets/images/profile-img.png";
import logo from "assets/images/logo.svg";
// const navigate = useNavigate();

//Import config
// import { facebook, google } from "../../config";

const Login = props => {
  const navigate = useNavigate();
  //meta title
  document.title = "Login | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('http://localhost:3004/api/user/login', values);
      // Assuming response.data contains user data
      dispatch(setUser(response.data));
      let token = JSON.stringify(response.data)
      // console.log(response.data)
      localStorage.setItem('token', token);
      // localStorage.setItem('username', response.data.username);
      
      setTimeout(() =>{
        navigate("/")
      },1000)
    } catch (error) {
      // Handle error
      console.error('Login error:', error);
      setFieldError('email', 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  // const { error } = useSelector(state => ({
  //   error: state.Login.error,
  // }));

  // const signIn = (res, type) => {
  //   if (type === "google" && res) {
  //     const postData = {
  //       name: res.profileObj.name,
  //       email: res.profileObj.email,
  //       token: res.tokenObj.access_token,
  //       idToken: res.tokenId,
  //     };
  //     dispatch(socialLogin(postData, props.router.navigate, type));
  //   } else if (type === "facebook" && res) {
  //     const postData = {
  //       name: res.name,
  //       email: res.email,
  //       token: res.accessToken,
  //       idToken: res.tokenId,
  //     };
  //     dispatch(socialLogin(postData, props.router.navigate, type));
  //   }
  // };

  //handleGoogleLoginResponse
  // const googleResponse = response => {
  //   signIn(response, "google");
  // };

  // //handleTwitterLoginResponse
  // // const twitterResponse = e => {}

  // //handleFacebookLoginResponse
  // const facebookResponse = response => {
  //   signIn(response, "facebook");
  // };

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ isSubmitting }) => (

                        <Form className="form-horizontal">
                          {/* {error ? <Alert color="danger">{error}</Alert> : null} */}

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" name="email" className="form-control"/>
                            <ErrorMessage name="email" component="div" />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field type="password" name="password" className="form-control"/>
                            <ErrorMessage name="password" component="div" />
                          </div>

                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>

                          <div className="mt-3 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit" disabled={isSubmitting}
                            >
                              Log In
                            </button>
                          </div>

                          {/* <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5> */}

                          {/* <ul className="list-inline">
                          <li className="list-inline-item">
                            <FacebookLogin
                              appId={facebook.APP_ID}
                              autoLoad={false}
                              callback={facebookResponse}
                              render={renderProps => (
                                <Link
                                  to="#"
                                  className="social-list-item bg-primary text-white border-primary"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-facebook" />
                                </Link>
                              )}
                            />
                          </li> */}
                          {/* <li className="list-inline-item"> */}
                          {/*  <TwitterLogin*/}
                          {/*    loginUrl={*/}
                          {/*      "http://localhost:4000/api/v1/auth/twitter"*/}
                          {/*    }*/}
                          {/*    onSuccess={this.twitterResponse}*/}
                          {/*    onFailure={this.onFailure}*/}
                          {/*    requestTokenUrl={*/}
                          {/*      "http://localhost:4000/api/v1/auth/twitter/revers"*/}
                          {/*    }*/}
                          {/*    showIcon={false}*/}
                          {/*    tag={"div"}*/}
                          {/*  >*/}
                          {/*    <a*/}
                          {/*      href=""*/}
                          {/*      className="social-list-item bg-info text-white border-info"*/}
                          {/*    >*/}
                          {/*      <i className="mdi mdi-twitter"/>*/}
                          {/*    </a>*/}
                          {/*  </TwitterLogin>*/}
                          {/*</li> */}
                          {/* <li className="list-inline-item">
                            <GoogleLogin
                              clientId={google.CLIENT_ID}
                              render={renderProps => (
                                <Link
                                  to="#"
                                  className="social-list-item bg-danger text-white border-danger"
                                  onClick={renderProps.onClick}
                                >
                                  <i className="mdi mdi-google" />
                                </Link>
                              )}
                              onSuccess={googleResponse}
                              onFailure={() => { }}
                            />
                          </li>
                        </ul>
                      </div> */}

                          <div className="mt-4 text-center">
                            <Link to="/forgot-password" className="text-muted">
                              <i className="mdi mdi-lock me-1" />
                              Forgot your password?
                            </Link>
                          </div>
                        </Form>
                          )}
                      </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                {/* <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
