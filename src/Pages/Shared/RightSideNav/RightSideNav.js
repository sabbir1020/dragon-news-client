import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github{" "}
        </Button>
      </ButtonGroup>
      <div className="mt-3">
        <h5>Find us On</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item>Privacy Policy</ListGroup.Item>
          <ListGroup.Item>Teams & Condition</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
