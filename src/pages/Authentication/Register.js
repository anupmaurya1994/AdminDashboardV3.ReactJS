import React, { useState } from "react";
import { Row, Col, CardBody, Card, Container , Alert } from "reactstrap";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link , useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import profileImg from "../../assets/images/profile-img.png";

// // action
// import { registerUser, apiError } from "../../store/actions";

//redux
// import { useSelector, useDispatch } from "react-redux";

const initialValues = {
  email: "",
  username: "",
  password: ""
}

const validationSchema = Yup.object({
  email: Yup.string().required("Please Enter Your Email"),
  username: Yup.string().required("Please Enter Your Username"),
  password: Yup.string().required("Please Enter Your Password"),
});

const Register = props => {

  //meta title
  document.title = "Register | Skote - React Admin & Dashboard Template";

  const navigate = useNavigate();
  const [res , setRes] = useState();
  
  const handleSubmit =  (e) => {
    // console.log(e)
    axios.post('http://localhost:3004/api/user/register', e).then((respose) => {
      console.log(respose.status)
      setRes(respose)
      setTimeout(() =>{
        navigate("/login")
      },1000)
      
     }).catch((error) => {
      console.log(error)
     })
  };

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
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free Skote account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                  {res && res.status  == 201 ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {res && res.status != 201 ? (
                        <Alert color="danger">Register User Failed! Try Again.</Alert>
                      ) : null}
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      {formik => (
                        <Form className="form-horizontal">
                          

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field type="email" id="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="error" />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <Field type="text" id="username" name="username" className="form-control" />
                            <ErrorMessage name="username" component="div" className="error" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field type="password" id="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="error" />
                          </div>

                          <div className="mt-4">
                            <button
                              className="btn btn-primary btn-block "
                              type="submit" disabled={formik.isSubmitting}
                            >
                              Register
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              By registering you agree to the Skote{" "}
                              <Link to="#" className="text-primary">
                                Terms of Use
                              </Link>
                            </p>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-weight-medium text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Skote. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Register;
