import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../ContextApi";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/Main.css";

const CarouselItems = ({ data, title }) => {
  const { appState, updateState } = useAppContext();
  const navigate = useNavigate();

  const handleClick = (item) => {
    updateState({ ...appState, detail: item });
    navigate(`/userdetail/${item.id}`);
  };

  const addToCart = (item) => {
    updateState({
      ...appState,
      addtocard: [...appState.addtocard, item],
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[20px] pb-5 bg-[#ffffff] ">
      <div className="  text-xl font-bold p-2 text-transform: uppercase">
        {title}
      </div>

      <div className="w-[950px] h-[1px] bg-gray-200 mb-3"></div>

      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{
                width: 230,
                padding: "0px",
                marginBottom: "15px",
              }}
            >
              <div>
                <Card
                  className="text-[13px]"
                  cover={
                    <img
                      className="h-[206px] "
                      alt="example"
                      src={item.image}
                    />
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
                  className="w-full bg-[#fdb2bb] text-white"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselItems;
