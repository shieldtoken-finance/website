import { Col, Row, Divider } from "antd";
import React from "react";
import AboutCard from "../AboutCard";

function AboutToken(props) {
  return (
    <div className="lg:mx-20 mx-4">
      <p className="text-base text-black font-bold">Proof Of Moon</p>
      <Divider />
      <Row gutter={[10, 10]}>
        <Col xs={24} md={8}>
          <AboutCard text="4% of every buy or sell are channelled to liquidity pool" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="4% of every buy or sell are channelled to marketing wallet" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="4% of every buy or sell are channelled to holders" />
        </Col>
      </Row>
    </div>
  );
}

export default AboutToken;
