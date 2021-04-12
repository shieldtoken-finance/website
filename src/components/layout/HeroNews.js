import { Button } from "antd";
import React from "react";
import Taken from "../../assets/taken.svg";
function HeroNews(props) {
  return (
    <div className="hero lg:h-screen lg:py-0 py-10">
      <div className="lg:mx-24 mx-4 flex lg:flex-row flex-col justify-between h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="lg:w-4/5 w-full">
            <h1 className="hero-text text-white lg:text-6xl text-3xl text-center lg:text-left">
              Our Stories, Our Goal and Our Space.
            </h1>
            <p className="text-white text-base lg:text-xl text-center lg:text-left">
              <strong className="text-green-500 lg:text-2xl text-xl">
                Shield Finance
              </strong>{" "}
              a community project with the aim of providing financial solutions
              and stability for its community.
            </p>
            <a
              rel="noreferrer"
              href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x5a054554b3f0c75063d29250984a921402e1e3a7"
              target="_blank"
            >
              <div className="flex justify-center lg:justify-start">
                <Button
                  shape="round"
                  className=" lg:w-1/2 w-3/4 hero-btn font-semibold my-5"
                  size="large"
                >
                  Buy now
                </Button>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img src={Taken} alt="start man" />
        </div>
      </div>
    </div>
  );
}

export default HeroNews;
