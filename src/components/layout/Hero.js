import { Button } from "antd";
import React from "react";
import StarMan from "../../assets/Blocklenslogo.png";
function Hero(props) {
  return (
    <div
      className="hero lg:h-screen lg:py-0 py-10"
      style={{ background: "black" }}
    >
      <div className="lg:mx-24 mx-4 flex lg:flex-row flex-col justify-between h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="lg:w-4/5 w-full">
            <h1 className="hero-text text-white lg:text-6xl text-3xl text-center lg:text-left">
              Decentralized token for the Post-blockchain revolution.
            </h1>
            <p className="text-white text-base lg:text-xl text-center lg:text-left">
              <strong className="text-primary lg:text-2xl text-xl">
                Blocklens $BLENS:
              </strong>{" "}
              Securing Financial Freedom Through Blockchain Technology, Leading
              The Next Generation Dexes, NFTs Marketplace And Metaverse
            </p>
            <a
              rel="noreferrer"
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x1f2cD43797806664D0bCE1eC4284aC83840D0bF1"
              target="_blank"
            >
              <div className="flex justify-center lg:justify-start">
                <Button
                  shape="round"
                  className=" lg:w-2/3 w-full hero-btn font-semibold my-5"
                  size="large"
                >
                  Buy now
                </Button>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={StarMan}
            alt="start man"
            className="animate-pulse rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
