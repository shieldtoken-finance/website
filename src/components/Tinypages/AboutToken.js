import { Col, Row, Divider } from "antd";
import React from "react";
import AboutCard from "../AboutCard";

function AboutToken(props) {
  return (
    <div className="lg:mx-20 mx-4">
      <p className="text-base text-primary">Proof Of Moon</p>
      <Divider />
      <Row gutter={[10, 10]}>
        <Col xs={24} md={8}>
          <AboutCard text="10% deflationary token" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="100 Million total supply" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="Staking and Farming coming soon" />
        </Col>

        <Col xs={24} md={8}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bscscan.com/token/0x5a054554b3f0c75063d29250984a921402e1e3a7?a=0x0000000000000000000000000000000000000000"
          >
            <AboutCard text="Click here to see token burnt to blackhole forever" />
          </a>
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="No Whale" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="No Dev coin" />
        </Col>

        <Col xs={24} md={8}>
          <AboutCard text="All token listed" />
        </Col>

        <Col xs={24} md={8}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bscscan.com/tx/0x89c04b518ca0664c658b11c468c2523cfe81f9e91f263bcd7f6563231a50fb36"
          >
            <AboutCard text="Liquidity pool burned, click to see" />
          </a>
        </Col>

        <Col xs={24} md={8}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x5a054554b3f0c75063d29250984a921402e1e3a7"
          >
            <AboutCard text="Buy now on pancakeswap, click here 🚀" />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default AboutToken;
