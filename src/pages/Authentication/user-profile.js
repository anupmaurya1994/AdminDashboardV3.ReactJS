import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";
import './Auth.scss'

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "components/Common/withRouter";

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb";

import avatar from "../../assets/images/users/avatar-8.jpg";
// actions
import { editProfile, resetProfileFlag } from "../../store/actions";

const UserProfile = () => {

  //meta title
  document.title = "Profile | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [idx, setidx] = useState(1);

  const { error, success } = useSelector(state => ({
    error: state.Profile.error,
    success: state.Profile.success,
  }));

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName);
        setemail(obj.email);
        setidx(obj.uid);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username);
        setemail(obj.email);
        setidx(obj.uid);
      }
      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [dispatch, success]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || '',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });


  return (
    <React.Fragment>
      <div className="page-content" id="profile-page">
        <Container fluid>

          <Breadcrumb title="Skote" breadcrumbItem="Profile" />

          {/* <Row className="justify-content-around">
            <Col lg="8">
              {error && error ? <Alert color="danger">{error}</Alert> : null}
              {success ? <Alert color="success">{success}</Alert> : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="">
                      <img
                        src={avatar}
                        alt=""
                        className="rounded-circle img-thumbnail"
                        width={"200px"}
                      />
                    </div>
                    <div className="d-flex mx-5 flex-column align-items-start align-self-center">
                      <h4 className="text-info text-decoration-underline">Details</h4>
                      <div className="text-muted">
                        <h4>{name}</h4>
                        <p className="">{email}</p>
                       
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-around">
            <Col lg="8">
              <Card>
                <CardBody>
                  <h3 className="card-title mb-4">Edit User</h3>
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    <div className="form-group">
                      <Label className="form-label">User Name</Label>
                      <Input
                        name="username"
                       
                        className="form-control"
                        placeholder="Enter User Name"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.username || ""}
                        invalid={
                          validation.touched.username && validation.errors.username ? true : false
                        }
                      />
                      {validation.touched.username && validation.errors.username ? (
                        <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                      ) : null}
                      <Input name="idx" value={idx} type="hidden" />
                    </div>
                    <div className="text-center mt-4">
                      <Button type="submit" color="danger">
                        Edit Profile
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
          <div id="my-profile">
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">

                <div className="card mx-4 mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">

                    <img className="img-account-profile rounded-circle mb-2" src={avatar} alt="" />

                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>

                    <button className="btn btn-primary" type="button">Upload new image</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">

                <div className="card mb-4 me-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                        <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" defaultValue={name} />
                      </div>

                      <div className="row gx-3 mb-3">

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                          <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="" />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                          <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="" />
                        </div>
                      </div>

                      <div className="row gx-3 mb-3">

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                          <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue="" />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLocation">Location</label>
                          <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" defaultValue="" />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue={email} />
                      </div>

                      <div className="row gx-3 mb-3">

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                          <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue="" />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                          <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue="" />
                        </div>
                      </div>

                      <button className="btn btn-primary" type="submit" >Save changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
