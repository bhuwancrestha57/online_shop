import { Button, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../ContextApi";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/Main.css";

const ItemsCarousel = ({ data, title }) => {
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
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[7px] pb-5 bg-white  shadow-lg shadow-gray-500/40">
      <div className="text-xl font-bold p-2 text-transform: uppercase">
        {title}
      </div>
      <div className="w-[255px] h-[1px] bg-gray-300 mb-3"></div>

      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              className="ml-5  "
              hoverable
              style={{
                width: 220,
                height: 342,
                marginBottom: "15px",
              }}
            >
              <div>
                <Card
                  className="text-[12px]   "
                  cover={
                    <img
                      className="h-[206px] w-full"
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

export default ItemsCarousel;
