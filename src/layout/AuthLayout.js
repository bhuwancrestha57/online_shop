import React from "react";
import { Outlet } from "react-router-dom";
import "../style/Main.css";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import TopHeader from "./header/TopHeader";
import UserFooter from "./footer/UserFooter";
import MainHeader from "./header";

const AuthLayout = () => {
  return (
    <Layout>
      <Header className=" !sticky !top-0 bg-white" style={{ zIndex: 999 }}>
        <TopHeader />
      </Header>
      <Header
        className="!sticky !top-[64px]  bg-[#fdb2bb]"
        style={{ zIndex: 999 }}
      >
        <MainHeader />
      </Header>

      <div className="backgroundauth">
        <Outlet />
      </div>

      <UserFooter />
    </Layout>
  );
};

export default AuthLayout;
