import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BBTimer from "../data/BBTimerGif.gif";
import AddFoodExpiringDateDrawer from "./AddFoodExpiringDateDrawer";
import FoodCategory from "./FoodCategory";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Container fluid>
        <h2 className="text-4xl text-orange-700 text-center">
          Track Your Food Expiring Date
        </h2>
        <Row className="flex flex-wrap justify-evenly align-items-center p-4">
          <Col md={4} className=" ">
            <AddFoodExpiringDateDrawer />
          </Col>
          <Col md={4} className=" ">
            <img src={BBTimer} className="rounded-lg " alt="BBTimer" />
          </Col>

          <Col md={4} className="p-4 mb-4">
            <FoodCategory />
          </Col>
        </Row>
        <Row>
          <Col md={12} className=" ">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HomePage;
