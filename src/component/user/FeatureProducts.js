import React from "react";
import { FeatureProductData } from "../../utlis/items";

import UserProducts from "./UserProducts";

const FeatureProducts = () => {
  return (
    <div>
      <UserProducts data={FeatureProductData} title="Feature Produts" />
    </div>
  );
};

export default FeatureProducts;
