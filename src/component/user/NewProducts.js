import React from "react";
import { NewproductData } from "../../utlis/items";

import UserProducts from "./UserProducts";

const NewProducts = () => {
  return (
    <div>
      <UserProducts data={NewproductData} title="New Arrival" />
    </div>
  );
};

export default NewProducts;
