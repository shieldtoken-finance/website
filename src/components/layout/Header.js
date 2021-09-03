import { Avatar, Drawer } from "antd";
import React, { useState } from "react";
import Scroll from "react-scroll";
import NavLink from "./NavLink";
import { AlignRightOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.png";

const Link = Scroll.Link;

function Header(props) {
  const [openSide, setOpenside] = useState(false);
  return (
    <div className="flex justify-between h-24 lg:mx-20 mx-4">
      <div className=" flex  items-center">
        <Link to="/">
          <Avatar src={Logo} size="large" />
        </Link>
      </div>
      <div className="flex-1  lg:flex items-center justify-end space-x-10 hidden">
        <Link to="about" smooth={true} duration={500} delay={200}>
          <span className="text-black font-bold"> About</span>
        </Link>

        <Link to="tokenomics" smooth={true} duration={500} delay={200}>
          <span className="text-black font-bold">Tokenomics</span>
        </Link>

        <Link to="roadmap" smooth={true} duration={500} delay={200}>
          <span className="text-black font-bold">Roadmap</span>
        </Link>

        <Link to="social" smooth={true} duration={500} delay={200}>
          <span className="text-black font-bold">Social Media</span>
        </Link>
      </div>
      <div className="lg:hidden flex items-center justify-center">
        <AlignRightOutlined
          onClick={() => setOpenside(true)}
          style={{ color: "#0033ad" }}
          className="lg:text-3xl text-xl"
        />
      </div>

      <Drawer visible={openSide} onClose={() => setOpenside(false)}>
        <div className="flex flex-col  space-y-5 my-10">
          <NavLink label="Home" to="/" activeOnlyWhenExact={true} />
          <NavLink label="News" to="/news" activeOnlyWhenExact={true} />
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
