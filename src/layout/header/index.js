import React from "react";

import { useNavigate } from "react-router-dom";
import { Badge, Button, Drawer, Image, message } from "antd";
import {
  DeleteOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Auth, HeaderItem } from "../../utlis/items";

import { useAppContext } from "../../ContextApi";
import Order from "../../component/user/Order";
import { Token } from "../../utlis/Storage";

const Index = () => {
  const { appState, updateState } = useAppContext();

  const [myOrder, setMyOrder] = React.useState([]);
  const { token, name } = Token();
  console.log("appState", Token());

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    console.log("data", e);
    navigate(e);
  };

  const showDrawer = () => {
    if (myOrder.length > 0) {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleAdd = (id) => {
    console.log("myOrder", myOrder);
    const updateAdddata = myOrder?.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMyOrder(updateAdddata);
    console.log("add", updateAdddata);
  };
  const handleMinus = (id) => {
    console.log("myOrder", myOrder);
    const updateMinusdata = myOrder?.map((item) => {
      if (id === item.id) {
        const minusQty = item.qty - 1 >= 1 ? item.qty - 1 : 1;
        return {
          ...item,
          qty: minusQty,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    setMyOrder(updateMinusdata);
    console.log("Minus", updateMinusdata);
  };
  const handleDelete = (id) => {
    const updatedDeletedata = myOrder.filter((item) => item.id !== id);
    setMyOrder(updatedDeletedata);
    updateState({ addtocard: updatedDeletedata });
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    if (token) {
      setIsModalOpen(true);
    } else {
      message.info("You are not Login please login First!");
    }
  };

  const sumNetTotal = myOrder?.reduce((sum, service) => {
    console.log("sum", sum, service);
    return sum + parseFloat(service.price * service.qty);
  }, 0);

  const sumQtyTotal = myOrder?.reduce((sum, service) => {
    console.log("sum", sum, service);
    return sum + parseFloat(service.qty);
  }, 0);
  console.log("sumQtyTotal", sumNetTotal, sumQtyTotal);

  React.useEffect(() => {
    setMyOrder([...new Set(appState.addtocard)]);
  }, [appState.addtocard]);
  return (
    <div className="flex justify-between">
      <div className="flex gap-10">
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            className="text-white font-bold cursor-pointer"
            onClick={() => handleClick(item.link)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <div className="mt-[5px]">
          <Badge showZero count={myOrder.length}>
            <ShoppingCartOutlined
              className=" text-white text-2xl  "
              onClick={showDrawer}
            />
          </Badge>
        </div>
        {open && (
          <div>
            <Drawer title="Your Cart items" onClose={onClose} open={open}>
              <div className="gap-4 grid">
                {myOrder?.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-20 h-20">
                      <Image src={item.image} alt="noimage" />
                    </div>
                    <div>
                      {" "}
                      <div>Name:{item.name}</div>
                      <div>Price:{item.price * item.qty}</div>
                      <div>Brand:{item.brand}</div>
                      <div>Qty:{item.qty}</div>
                      <div>
                        <div className="flex gap-3 cursor-pointer">
                          <button>
                            <PlusCircleFilled
                              onClick={() => handleAdd(item.id)}
                            />
                          </button>
                          <button>
                            <MinusCircleFilled
                              onClick={() => handleMinus(item.id)}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="primary"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <Button
                  type="primary"
                  className="bg-[green] w-full"
                  onClick={showModal}
                >
                  Order Now
                </Button>
              </div>
              {isModalOpen && (
                <Order
                  isModalOpen={isModalOpen}
                  setIsModalOpen={(e) => setIsModalOpen(e)}
                  sumNetTotal={sumNetTotal}
                  sumQtyTotal={sumQtyTotal}
                  myOrder={myOrder}
                />
              )}
            </Drawer>
          </div>
        )}

        {!token &&
          Auth?.map((item) => (
            <div
              key={item.link}
              className="text-white font-bold"
              onClick={() => handleClick(item.link)}
            >
              {item.name}
            </div>
          ))}
        <div>
          <div className="text-white">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
