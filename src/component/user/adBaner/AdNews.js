import React from "react";
import {
  TruckOutlined,
  RedoOutlined,
  SafetyCertificateOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const AdNews = () => {
  return (
    <div>
      <div
        className="text-white flex mt-5 p-[15px] 
        justify-between mb-[15px] font-bold bg-slate-500"
      >
        <div className="flex justify-center">
          <div className="text-5xl pr-4 text-orange-400">
            <TruckOutlined />
          </div>
          <div>
            <div>Free Shipping</div>
            <div>Shipping on orders over Rs.1000</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl pr-4  text-orange-400">
            <RedoOutlined />
          </div>
          <div>
            <div>Free Return</div>
            <div>Get Return within 30 days</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl pr-4  text-orange-400">
            <SafetyCertificateOutlined />
          </div>
          <div>
            <div>Secure Payment</div>
            <div>100% Secure Online Payment</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-5xl pr-4  text-orange-400">
            <TrophyOutlined />
          </div>
          <div>
            <div>Best Quality</div>
            <div>Original Product Guarenteed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdNews;
