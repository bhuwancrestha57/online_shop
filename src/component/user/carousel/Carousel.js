import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s1 from "../../../image/slide1.jpg";
import b2 from "../../../image/banner-2.png";
import b3 from "../../../image/banner-3.png";
import b4 from "../../../image/banner-4.png";
import b5 from "../../../image/banner-5.png";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "antd";

const Carousel = () => {
  return (
    <>
      <div className="flex w-full  pt-[10px]  ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          navigation={true}
          centeredSlides={true}
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="w-full h-[470px] px-0 "
        >
          <SwiperSlide>
            <img
              src={s1}
              alt="example"
              style={{ width: "100%", height: "100%" }}
            />

            <div className="absolute top-[25%] left-[10%] text-center text-white text-transform: uppercase ">
              <div className="text-3xl text-[#303a7a] font-bold">
                HOT PRODUCTS
              </div>
              <div className="text-5xl ">save 50% for</div>
              <div className="text-xl">FIRST PURCHASE</div>
              <Button
                href="/hotproducts"
                className=" bg-[#fdb2bb]  border-none mt-10 text-white font-bold"
              >
                SHOP NOW
              </Button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <a href="/">
              <img
                src={b2}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              {" "}
              <img
                src={b4}
                alt="example"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={b5}
              alt="example"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>

        <div className="h-[200px] px-5 w-[40%]">
          <div>
            <a href="/">
              <img src={b4} alt="/" />
            </a>
          </div>
          <div className="pt-5">
            <a href="/">
              <img src={b3} alt="/" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
