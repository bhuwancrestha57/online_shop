import { Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./header";

import UserFooter from "./footer/UserFooter";
import TopHeader from "./header/TopHeader";

const UserLayout = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <div>
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
          <Content
            style={{
              padding: "0 35px",
            }}
          >
            <Layout
              style={{
                padding: "5px 0",

                borderRadius: borderRadiusLG,
              }}
            >
              <div>
                <Outlet />
              </div>
            </Layout>
          </Content>
          <UserFooter />
        </Layout>
      </div>
    </div>
  );
};

export default UserLayout;
