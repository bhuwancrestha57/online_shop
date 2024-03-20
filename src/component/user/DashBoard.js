import React from "react";

import Carousel from "./carousel/Carousel";

import AdNews from "./adBaner/AdNews";

import ItemsCarousel from "./carousel/ItemsCarousel";
import {
  FeatureProductData,
  HotproductData,
  NewproductData,
  TrendingProductsData,
} from "../../utlis/items";
import CarouselItems from "./carousel/CarouselItems";
import a1 from "../../image/a1.jpg";
import a2 from "../../image/a2.jpg";
import a3 from "../../image/a3.png";
import a4 from "../../image/a4.jpg";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="shadow-lg shadow-gray-500/40">
        <Carousel />
      </div>
      <div>
        <AdNews />
      </div>

      <div className="grid grid-cols-9 gap-4 ">
        <div className=" col-span-2  ">
          <div className="mb-5">
            <ItemsCarousel data={NewproductData} title="New Arrival" />
          </div>
          <div>
            <a href="/hotproducts">
              <img
                className="mb-5 shadow-lg shadow-gray-500/40"
                src={a4}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </div>
          <div className="mb-5">
            <ItemsCarousel data={FeatureProductData} title="Feature Produts" />
          </div>
        </div>

        <div className="  col-start-3 col-end-10 ">
          <div className=" mb-5 shadow-lg shadow-gray-500/40">
            <CarouselItems data={HotproductData} title="Hot Products" />
          </div>
          <div className="flex gap-3 ">
            <a href="/">
              <img
                className="mb-5 shadow-lg shadow-gray-500/40"
                src={a1}
                alt="example"
                style={{ width: "100%", height: "250px" }}
              />
            </a>
            <a href="/">
              {" "}
              <img
                className="mb-5 shadow-lg shadow-gray-500/40"
                src={a2}
                alt="example"
                style={{ width: "100%", height: "250px" }}
              />
            </a>
          </div>
          <div className=" mb-5 shadow-lg shadow-gray-500/40">
            <CarouselItems
              data={TrendingProductsData}
              title="Trending Product"
            />
          </div>
          <div className="mb-5 shadow-lg shadow-gray-500/40">
            <Link to="/">
              <img
                src={a3}
                alt="example"
                style={{ width: "100%", height: "300px" }}
              />
            </Link>
          </div>
          <div className=" mb-5 shadow-lg shadow-gray-500/40">
            <CarouselItems data={FeatureProductData} title="Feature Produts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
