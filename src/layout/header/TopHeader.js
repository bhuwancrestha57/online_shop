import React from "react";
import image1 from "../../image/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "antd";
import UserHeader from "./UserHeader";
import { HeartOutlined, SyncOutlined } from "@ant-design/icons";
import { Token } from "../../utlis/Storage";

const TopHeader = () => {
  const { token } = Token();
  const navigate = useNavigate();
  console.log("navigate", navigate);

  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">
          <img
            style={{
              width: "50px",
              height: "60px",
              paddingTop: "15px",
            }}
            src={image1}
            alt=""
          />
        </Link>
      </div>
      <div className=" h-[44px] mt-2">
        <div
          className="w-full h-full flex items-center border border-gray-200
         bg-white "
        >
          <div className=" flex-1 h-full flex">
            <Form className="h-full m-1.5">
              <Form.Item>
                <input type="text" placeholder="Search Product..." />
              </Form.Item>
            </Form>

            <Button
              className=" w-[93px] h-full bg-[#fdb2bb] rounded-none"
              type="button"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4  ">
        <div className="text-xl">
          <SyncOutlined />
        </div>
        <div className="text-xl">
          <HeartOutlined />
        </div>
        <div>{token && <UserHeader />}</div>
      </div>
    </div>
  );
};

export default TopHeader;
