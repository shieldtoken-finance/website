import React from "react";
import { Button, Col, Row } from "antd";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import flash from "../assets/flash.svg";
import AboutToken from "../components/Tinypages/AboutToken";
import ViewContract from "../components/Tinypages/ViewContract";
import RoadMap from "../components/Tinypages/RoadMap";
import Social from "../components/Tinypages/Social";
import News from "../components/Tinypages/News";
import Footer from "../components/layout/Footer";
import Tokenomics from "../components/Tinypages/Tokenomics";
import Pancakeswap from "../components/customIcon/pancake";
import Bakery from "../components/customIcon/bakery";
function Landing(props) {
  return (
    <div>
      <Header />
      <Hero />
      <section className="lg:mt-10 mt-4 flex lg:justify-center lg:flex-row flex-col items-center">
        <a
          className="lg:order-1 order-2 lg:my-0 my-2"
          rel="noreferrer"
          href="https://goswapp-bsc.web.app/0x5a054554b3f0c75063d29250984a921402e1e3a7"
          target="_blank"
        >
          <Button>Live Chart</Button>
        </a>
        <div className="lg:mx-20 mx-4 order-1 lg:order-2">
          <div
            class="livecoinwatch-widget-6"
            lcw-coin="SDF"
            lcw-base="USD"
            lcw-period="d"
            lcw-color-tx="#ffffff"
            lcw-color-bg="#0033ad"
            lcw-border-w="1"
          ></div>
        </div>
      </section>

      <section className="lg:my-24 my-10">
        <div className="lg:mx-20 mx-4 flex lg:flex-row flex-col justify-between">
          <div className="flex-1">
            <h2 className="hero-text text-black lg:text-3xl text-lg">
              <strong className="text-red-500">"</strong> There is no power for
              change greater than a community discovering what it cares about.
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-base lg:text-lg">
              Our Focus is to generate lasting solution to financial instability
              in THIS SPACE and to be the best ever solution provider
              financially. Shield Finance decentralized native token is $SDF and
              soon you will be able to farm other tokens when we launch our #DEX
              in few months.
            </p>

            <p className="text-base lg:text-lg">
              Shield Finance currently runs only on #BSC, join us now to
              experience the best financial services you can ever get.
            </p>

            <h3 className="text-base lg:text-lg text-gray-300 font-extrabold">
              JUST HOLD! THE MOON IS NEAR
            </h3>

            <Row gutter={[10, 10]}>
              <Col xs={24} md={12} lg={12}>
                <a
                  rel="noreferrer"
                  href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x5a054554b3f0c75063d29250984a921402e1e3a7"
                  target="_blank"
                >
                  <div className="bg-primary my-5 rounded-full flex justify-center items-center h-16 ">
                    <span className="text-white mx-2 text-lg font-bold">
                      Buy on Pancakeswap
                    </span>
                    <Pancakeswap />
                  </div>
                </a>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <a
                  rel="noreferrer"
                  href="https://www.bakeryswap.org/#/swap?inputCurrency=0x5a054554b3f0c75063d29250984a921402e1e3a7&outputCurrency=0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                  target="_blank"
                >
                  <div className="bg-primary my-5 rounded-full flex justify-center items-center h-16 ">
                    <span className="text-white mx-2 text-lg font-bold">
                      Buy on bakeryswap
                    </span>
                    <Bakery />
                  </div>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <img src={flash} alt="flash" />
      </section>

      <section className="lg:mt-24 mt-10">
        <AboutToken />

        <section className="lg:mt-24 mt-10 tokenomics">
          <Tokenomics />
        </section>
      </section>

      <section className="lg:mb-24 mb-10">
        <ViewContract />
      </section>

      <section className="lg:mb-24 mb-10">
        <RoadMap />
      </section>

      <section className="lg:my-24 my-10">
        <Social />
      </section>

      <section className="lg:mt-24 mt-10">
        <News />
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
