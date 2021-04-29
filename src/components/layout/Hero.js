import { Button } from "antd";
import React from "react";
import StarMan from "../../assets/startman.svg";
function Hero(props) {
  return (
    <div className="hero lg:h-screen lg:py-0 py-10">
      <div className="lg:mx-24 mx-4 flex lg:flex-row flex-col justify-between h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="lg:w-4/5 w-full">
            <h1 className="hero-text text-white lg:text-6xl text-3xl text-center lg:text-left">
              Together, we can do so much.
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
              href="https://info.bakeryswap.org/#/pair/0xe0c501e5a8b79280660f80bd7a3563b5a6b7e613"
              target="_blank"
            >
              <div className="flex justify-center lg:justify-start">
                <Button
                  shape="round"
                  className=" lg:w-2/3 w-full hero-btn font-semibold my-5"
                  size="large"
                >
                  See Analytics On Bakeryswap
                </Button>
              </div>
            </a>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img src={StarMan} alt="start man" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
