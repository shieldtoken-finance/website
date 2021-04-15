import React from "react";
import { Button } from "antd";
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
function Landing(props) {
  return (
    <div>
      <Header />
      <Hero />

      <section className="lg:my-24 my-10 relative">
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

            <a
              rel="noreferrer"
              href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x5a054554b3f0c75063d29250984a921402e1e3a7"
              target="_blank"
            >
              <div className="flex justify-center lg:justify-start">
                <Button
                  shape="round"
                  className=" lg:w-1/3 w-3/4  font-semibold my-5"
                  size="large"
                  type="primary"
                >
                  Buy now
                </Button>
              </div>
            </a>
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
