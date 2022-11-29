import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSadeNav from "../Pages/Shared/LeftSadeNav/LeftSadeNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2">
            <LeftSadeNav></LeftSadeNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
