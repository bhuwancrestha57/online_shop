import React from "react";

import { Link } from "react-router-dom";
import image1 from "../../image/Logo.png";
import { Footer } from "antd/es/layout/layout";
import {
  AndroidOutlined,
  ClockCircleFilled,
  EnvironmentOutlined,
  FacebookFilled,
  GithubFilled,
  GooglePlusOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  WhatsAppOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const UserFooter = () => {
  return (
    <div>
      <Footer className="bg-slate-500 text-slate-100">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div>
              <Link to="/">
                <img className="w-12 h-12" src={image1} alt="" />
              </Link>
            </div>
            <div>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
              velit it’s a cold world out there.
            </div>
            <div>
              <EnvironmentOutlined className="text-[#f5cf48] p-2" />
              Main Road, Koteshwor,Nepal
            </div>
            <div>
              <PhoneOutlined className="text-[#f5cf48] p-2" />
              (+977) 9840170728
            </div>
            <div>
              <Link to="/">
                <MailOutlined className="text-[#f5cf48] p-2" />
                LM Fashion Wear
              </Link>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">INFORMATION</div>
            <div>Our Story</div>
            <div>Privacy & Policy</div>
            <div>Terms & Conditions</div>
            <div>Shipping & Delivery</div>
            <div>Careers</div>
            <div>FAQs</div>
          </div>
          <div>
            <div className="text-xl font-bold">OUR SOCIAL</div>
            <div>
              <ul className="inline-block pr-5">
                <li>
                  {" "}
                  <GooglePlusOutlined className="p-2 text-[#f5cf48]" />
                  Google+
                </li>
                <li>
                  <WhatsAppOutlined className="p-2 text-[#f5cf48]" />
                  WhatsApp
                </li>
                <li>
                  <AndroidOutlined className="p-2 text-[#f5cf48]" />
                  Android
                </li>
                <a href="https://www.instagram.com/">
                  <li>
                    <InstagramOutlined className="p-2 text-[#f5cf48]" />
                    Instragram
                  </li>
                </a>
              </ul>
              <ul className="inline-block pr-5">
                <a href="https://www.facebook.com/">
                  <li>
                    <FacebookFilled className="p-2 text-[#f5cf48]" />
                    Facebook
                  </li>
                </a>

                <li>
                  <TwitterCircleFilled className="p-2 text-[#f5cf48]" />
                  Twitter
                </li>
                <li>
                  <GithubFilled className="p-2 text-[#f5cf48]" />
                  Github
                </li>
                <li>
                  <YoutubeFilled className="p-2 text-[#f5cf48]" />
                  YouTube
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div className="text-xl font-bold">OPENING TIME</div>
              <div>
                <ClockCircleFilled className="p-2 text-[#f5cf48]" />
                Monday - Friday: 08:30 am - 09:30 pm
              </div>
              <div>Sat - Sun: 09:00 am - 10:00 pm</div>
            </div>
            <div>
              <div className="text-xl font-bold">PAYMENT OPTION</div>
              <div className=" grid grid-cols-4 gap-1 text-5xl text-[#f5cf48]">
                <div>
                  <img className="h-[40px] w-auto" src="" alt="/" />
                </div>
                <div>
                  <img
                    className="h-[40px] w-auto"
                    src="https://esewa.com.np/common/images/esewa_logo.png"
                    alt="/"
                  />
                </div>
                <div>
                  <img
                    className="h-[40px] w-auto"
                    src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png"
                    alt="/"
                  />
                </div>
                <div>
                  <img className="h-[40px] w-auto" src="" alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Footer>
      <Footer className=" bg-[#aa860e] px-3 py-2 text-xs text-white text-center">
        <div>© 2021 bhuwan.com | All Rights Reserved.</div>
      </Footer>
    </div>
  );
};

export default UserFooter;
