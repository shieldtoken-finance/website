import React from "react";
import { Button, Col, Row, BackTop } from "antd";
import Scroll from "react-scroll";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import flash from "../assets/flash.svg";
import AboutToken from "../components/Tinypages/AboutToken";
import ViewContract from "../components/Tinypages/ViewContract";
import RoadMap from "../components/Tinypages/RoadMap";
import Social from "../components/Tinypages/Social";
import Footer from "../components/layout/Footer";
import Tokenomics from "../components/Tinypages/Tokenomics";
import Pancakeswap from "../components/customIcon/pancake";
import { UpCircleFilled } from "@ant-design/icons";
const Element = Scroll.Element;
function Landing(props) {
  return (
    <div>
      <Header />
      <Hero />
      <section className="lg:mt-10 mt-4 flex lg:justify-center lg:flex-row flex-col items-center">
        <a
          className="lg:order-1 order-2 lg:my-0 my-2"
          rel="noreferrer"
          href="https://goswapp-bsc.web.app/0x1f2cd43797806664d0bce1ec4284ac83840d0bf1"
          target="_blank"
        >
          <Button>Live Chart</Button>
        </a>
        {/* <div className="lg:mx-20 mx-4 order-1 lg:order-2">
          <div
            class="livecoinwatch-widget-6"
            lcw-coin="SDF"
            lcw-base="USD"
            lcw-period="d"
            lcw-color-tx="#ffffff"
            lcw-color-bg="#0033ad"
            lcw-border-w="1"
          ></div>
        </div> */}
      </section>
      <Element name="about">
        <section className="lg:my-24 my-10">
          <div className="lg:mx-20 mx-4 flex lg:flex-row flex-col justify-between">
            <div className="flex-1">
              <h2 className="hero-text text-black lg:text-3xl text-lg">
                <strong className="text-red-500">"</strong> Making a difference
                in the world at the same time promoting a decentralized economy.
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-base lg:text-lg">
                All investors are rewarded with BUSD as another 4% of every
                transaction is channelled to every $BLENS holder as a passive
                income or as gift of holding the tokens.
              </p>

              <p className="text-base lg:text-lg">
                Blocklens currently runs only on #BSC, join us now to experience
                the best financial services you can ever get.
              </p>

              <h3 className="text-base lg:text-lg text-gray-300 font-extrabold">
                JUST HOLD! THE MOON IS NEAR
              </h3>

              <Row gutter={[10, 10]}>
                <Col xs={24} md={12} lg={12}>
                  <a
                    rel="noreferrer"
                    href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1f2cD43797806664D0bCE1eC4284aC83840D0bF1"
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
              </Row>
            </div>
          </div>

          <img src={flash} alt="flash" />
        </section>
      </Element>
      <section className="lg:mt-24 mt-10">
        <AboutToken />
      </section>

      <Element name="tokenomics">
        <section className="lg:mt-24 mt-10 tokenomics">
          <Tokenomics />
        </section>
      </Element>
      <section className="lg:mb-24 mb-10">
        <ViewContract />
      </section>
      <Element name="roadmap">
        <section className="lg:mb-24 mb-10">
          <RoadMap />
        </section>
      </Element>
      <Element name="social">
        <section className="lg:my-24 my-10">
          <Social />
        </section>
      </Element>
      <BackTop>
        <UpCircleFilled style={{ fontSize: 40 }} />
      </BackTop>
      {/* <section className="lg:mt-24 mt-10">
        <News />
      </section> */}
      <Footer />
    </div>
  );
}

export default Landing;
