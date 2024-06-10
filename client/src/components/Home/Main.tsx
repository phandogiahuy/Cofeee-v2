import { Carousel, Divider } from "antd";
import { sliderItem } from "../../data/sliderItem";
import Description from "./Description";
import ItemCategory from "./ItemCategory";
import Infor from "./Infor";
import NewProduct from "./NewProduct";
import { useEffect, useRef, useState } from "react";

const Main = () => {
  const slideRefs = useRef<[] | any>([]);
  const onChange = (current: number) => {
    slideRefs.current.forEach((ref: any, index: any) => {
      if (index === current) {
        ref.classList.remove("animate-slideUpAndIn", "opacity-0");
        void ref.offsetWidth; // Xóa class animation cũ // Kích hoạt reflow để animation hoạt động lại
        ref.classList.add("animate-slideUpAndIn"); // Thêm class animation mới
      } else {
        ref.classList.remove("animate-slideUpAndIn");
        ref.classList.add("opacity-0");
      }
    });
  };
  useEffect(() => {
    slideRefs.current[0].classList.remove("opacity-0");
  },[])

  return (
    <div className="font-sans h-max mb-4">
      <div className="">
        <Carousel autoplay arrows infinite={false} afterChange={onChange}>
          {sliderItem.map((item, index) => (
            <div className="relative " key={index}>
              <img src={item.src} style={{ imageRendering: "pixelated" }} />
              <div
                className="flex flex-col ml-8 absolute top-64 left-56 w-96 opacity-0 "
                ref={(el) => (slideRefs.current[index] = el)}
              >
                <p className="font-bold text-5xl text-fuchsia-50 leading-snug">
                  {item.title}
                </p>
                <p className="text-fuchsia-50 text-lg font-semibold ">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Description />
      <Infor />
      <ItemCategory />
      <NewProduct />
    </div>
  );
};

export default Main;
