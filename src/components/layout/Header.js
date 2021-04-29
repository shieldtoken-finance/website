import { Avatar, Drawer, Space, Tag } from "antd";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { AlignRightOutlined } from "@ant-design/icons";
function Header(props) {
  const [openSide, setOpenside] = useState(false);
  return (
    <div className="flex justify-between h-24 lg:mx-20 mx-4">
      <div className=" flex  items-center">
        <Link to="/">
          <Avatar src="https://i.ibb.co/ctjFkPS/sdf-new.png" size="large" />
        </Link>
      </div>
      <div className="flex-1  lg:flex items-center justify-end space-x-10 hidden">
        <NavLink label="Home" to="/" activeOnlyWhenExact={true} />
        <NavLink label="News" to="/news" activeOnlyWhenExact={true} />
        <a
          className="capitalize text-xl lg:text-base font-bold"
          rel="noreferrer"
          href="https://res.cloudinary.com/dus4sijdt/image/upload/v1619697146/sdf_white_paper_2_1_e2ri0m.pdf"
          target="_blank"
        >
          White Paper
        </a>
        <Space>
          <NavLink label="Staking" to="/#" activeOnlyWhenExact={true} />
          <Tag color="blue">coming soon</Tag>
        </Space>
        <Space>
          <NavLink label="Farm" to="/#" activeOnlyWhenExact={true} />
          <Tag color="blue">coming soon</Tag>
        </Space>
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
          <a
            className="capitalize text-xl lg:text-base font-bold"
            rel="noreferrer"
            href="https://res.cloudinary.com/dus4sijdt/image/upload/v1619697146/sdf_white_paper_2_1_e2ri0m.pdf"
            target="_blank"
          >
            White Paper
          </a>
          <Space>
            <NavLink label="Staking" to="/#" activeOnlyWhenExact={true} />
            <Tag color="blue">coming soon</Tag>
          </Space>
          <Space>
            <NavLink label="Farm" to="/#" activeOnlyWhenExact={true} />
            <Tag color="blue">coming soon</Tag>
          </Space>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
