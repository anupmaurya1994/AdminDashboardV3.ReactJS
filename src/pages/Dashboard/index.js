import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Modal, Media, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

//import Charts
import StackedColumnChart from "./StackedColumnChart";

import modalimage1 from "../../assets/images/product/img-7.png";
import modalimage2 from "../../assets/images/product/img-4.png";

// Pages Components
import WelcomeComp from "./WelcomeComp";
import MonthlyEarning from "./MonthlyEarning";
import SocialSource from "./SocialSource";
import ActivityComp from "./ActivityComp";
import TopCities from "./TopCities";
import LatestTranaction from "./LatestTranaction";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//i18n
// import { withNamespaces } from 'react-i18next';

const Dashboard = (props) => {
    const [modal, setModal] = useState(false);

    const reports = [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
        { title: "Average Price", iconClass: "bx-purchase-tag-alt", description: "$16.2" }
    ];
    const email = [
        { title: "Week", linkto: "#", isActive: false },
        { title: "Month", linkto: "#", isActive: false },
        { title: "Year", linkto: "#", isActive: true }
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title={('Dashboard')} breadcrumbItem={('Dashboard')} />

                    <Row>
                        <Col xl="4">
                            <WelcomeComp />
                            <MonthlyEarning />
                        </Col>
                        <Col xl="8">
                            <Row>
                                {/* Reports Render */}
                                {reports.map((report, key) =>
                                    <Col md={4} key={"_col_" + key}>
                                        <Card className="mini-stats-wid">
                                            <Card.Body>
                                                <Row>
                                                    <Col xs={8}>
                                                        <div>
                                                            <p className="text-muted font-weight-medium">{report.title}</p>
                                                            <h4 className="mb-0">{report.description}</h4>
                                                        </div>
                                                    </Col>
                                                    <Col xs={4}>
                                                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                            <span className="avatar-title">
                                                                <i className={"bx " + report.iconClass + " font-size-24"}></i>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )}
                            </Row>

                            <Card>
                                <Card.Body>
                                    <Card.Title className="mb-4 float-sm-left">
                                        Email Sent
                                    </Card.Title>
                                    <div className="float-sm-right">
                                        <ul className="nav nav-pills">
                                            {email.map((mail, key) =>
                                                <li className="nav-item" key={"_li_" + key}>
                                                    <Link className={mail.isActive ? "nav-link active" : "nav-link"} to={mail.linkto}>{mail.title}</Link>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                    <StackedColumnChart />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="4">
                            <SocialSource />
                        </Col>
                        <Col xl="4">
                            <ActivityComp />
                        </Col>
                        <Col xl="4">
                            <TopCities />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <LatestTranaction />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={modal} onHide={() => setModal(false)} dialogClassName="exampleModal" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                    <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>

                    <div className="table-responsive">
                        <Table className="table table-centered table-nowrap">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            <img src={modalimage1} alt="" className="avatar-sm" />
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                            <p className="text-muted mb-0">$ 225 x 1</p>
                                        </div>
                                    </td>
                                    <td>$ 255</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <img src={modalimage2} alt="" className="avatar-sm" />
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                                            <p className="text-muted mb-0">$ 145 x 1</p>
                                        </div>
                                    </td>
                                    <td>$ 145</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Sub Total:</h6>
                                    </td>
                                    <td>$ 400</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Shipping:</h6>
                                    </td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h6 className="m-0 text-right">Total:</h6>
                                    </td>
                                    <td>$ 400</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

// export default withNamespaces()(Dashboard);
export default Dashboard;
