import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";

const UserProducts = ({ data, title }) => {
  const { appState, updateState } = useAppContext();
  const navigate = useNavigate();

  const handleClick = (item) => {
    updateState({ ...appState, detail: item });
    navigate(`/userdetail/${item.id}`);

    // localStorage.setItem("userdetail", JSON.stringify(item));
  };
  const addTocart = (item) => {
    updateState({
      ...appState,
      addtocard: [...appState.addtocard, ...[item]],
    });
  };

  return (
    <div style={{ paddingLeft: "25px" }}>
      <div className="text-xl font-bold p-2">{title}</div>

      <div className="grid grid-cols-4 justify-start gap-4">
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{
                width: 285,
                padding: "0px",
              }}
            >
              <div>
                <Card
                  cover={
                    <img className="h-[200px]" alt="example" src={item.image} />
                  }
                  onClick={() => handleClick(item)}
                >
                  <div>Name:{item.name}</div>
                  <div>Price: Rs. {item.price}</div>
                  <div>Brand:{item.brand}</div>
                </Card>
              </div>
              <div>
                <Button
                  className="w-full bg-slate-900 text-white"
                  onClick={() => addTocart(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProducts;
