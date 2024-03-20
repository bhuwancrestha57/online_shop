import React from "react";

import { HotproductData } from "../../utlis/items";
import UserProducts from "./UserProducts";

const HotProducts = () => {
  return (
    <div>
      <UserProducts data={HotproductData} title="Hot Products" />
    </div>
  );
};

export default HotProducts;
