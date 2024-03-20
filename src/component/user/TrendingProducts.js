import React from "react";

import { TrendingProductsData } from "../../utlis/items";
import UserProducts from "./UserProducts";

const TrendingProducts = () => {
  return (
    <div>
      <UserProducts data={TrendingProductsData} title="Trending Product" />
    </div>
  );
};

export default TrendingProducts;
