import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import InstagramLink from "./InstagramComponent";
import CustomCarousel from "./CustomCarousel"; // Adjust the path accordingly
import RevampCarousel from "./RevampCarousel";
import BannerCarousel from "./BannerCarousel";
import {
  Card,
  Form,
  Container,
  Row,
  Col,
  Carousel,
  Button,
} from "react-bootstrap";

function App() {
  const handleResetButtonClick = () => {
    const textarea = document.querySelector(".custom-text-area");
    const customerName = document.querySelector(".input-name");
    const custonerNumber = document.querySelector(".input-number");
    textarea.value = "";
    custonerNumber.value = "";
    customerName.value = "";
  };
  return (
    <Container className="custom-container">
      <img src="/logo2.png" className="img-fluid" />

      <div className="mb-3 mt-4">
        <BannerCarousel className="makeClear" />
      </div>

      <Card.Body className="bannerBody mb-4">
        Hey, I'm The Hair Reaper, your Brooklyn hairstylist. I specialize in
        unique custom wigs, refreshing looks, and stunning styles that empower.
        With flexible appointments, I cater to your schedule. Let's turn your
        hair dreams into reality – contact me to book now!{" "}
      </Card.Body>

      <div className="mb-4">
        <CustomCarousel />
      </div>
      <RevampCarousel />

      {/* 
<Form>
  <Row className="text-center">
    <h3 className="mt-4 grey">
      <strong></strong>Lets Keep In Touch
    </h3>
    <Col>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Number" />
      </Form.Group>
    </Col>

    <Form.Group>
      <Form.Label>Message</Form.Label>
      <Form.Control
        as="textarea"
        rows={7}
        placeholder="Enter your message"
        className="custom-text-area"
      />

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-primary">Send</button>
        <button className="btn btn-secondary">Clear</button>
      </div>
    </Form.Group>
  </Row>
</Form>
*/}
      <Card className="policy mt-4">
        <h3>The Hair Reaper's Policies</h3>
        <ul>
          <li>PAYMENT SHOULD ONLY BE SENT AFTER CONSULTING WITH STYLIST!</li>
          <li>
            ONCE CONSULTATION IS COMPLETED, ALL CUSTOMERS ARE REQUIRED TO PAY A
            NON-NEGOTIABLE DEPOSIT OF 50% OF THE TOTAL. THIS WILL ULTIMATELY
            SECURE THE CUSTOMERS DESIRED DATE OF COMPLETION. AS WELL AS, THE
            HAIR PROVIDED BY THE HAIR REAPER’S HAIR COLLECTION.{" "}
          </li>
          <li>
            AFTER DEPOSIT IS RECEIVED, PLEASE ALLOW 2-3 WEEKS FOR TURN AROUND
            TIME. THIS PRIMARILY INCLUDES ALL CONSTRUCTION OF UNITS, REVAMPS AND
            COLORING.
          </li>
          <li>
            IF COLORING IS REQUESTED; ALL CUSTOMERS ARE REQUIRED TO PAY A
            NON-REFUNDABLE MATERIAL FEE OF $50. THIS FEE IS IN ADDITION TO THE
            REQUIRED DEPOSIT. AND, MUST BE PAID BEFORE SERVICES CAN BE RENDERED.
          </li>
          <li>
            IF AT ANY POINT THE CUSTOMER IS UNABLE TO RETRIEVE THEIR UNIT ON THE
            DAY OF COMPLETION; AFTER 48 HOURS A STORAGE FEE WILL INCUR. THIS FEE
            ENTAILS OF $10 FOR EACH DAY THE UNIT REMAINS WITH THE STYLIST.{" "}
          </li>
        </ul>
      </Card>
      <img src="/footer2.png" className="img-fluid" />
      <InstagramLink />
    </Container>
  );
}

export default App;
