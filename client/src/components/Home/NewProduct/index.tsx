import { Carousel, Image } from "antd";

import { Link } from "react-router-dom";
import { sliderNewProduct } from "../../../data/sliderItem";
import { useEffect, useRef } from "react";

const NewProduct = () => {
  const elementRef = useRef<null | any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add("animate-slideUpAndIn");
          observer.unobserve(elementRef.current); // Ngừng theo dõi sau khi animation hoàn thành
        }
      },
      { threshold: 0 } // Kích hoạt khi 50% phần tử hiển thị trong viewport
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="py-[90px] px-[60px] bg-neutral-200 mt-9" ref={elementRef}>
      <Carousel autoplay effect="fade">
        {sliderNewProduct.map((item) => (
          <div className="">
            <div className="flex">
              <div className="flex-[2] flex flex-col items-center justify-center ">
                <Image src={item.src} width={600} />
                <p className="font-bold text-xl w-[620px] my-7">{item.title}</p>
                <p>{item.price}</p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center ">
                <p className="font-bold text-4xl">Cà phê mới trong Tháng</p>
                <p className="my-7 text-2xl">
                  Hàng tháng, menu cà phê của Flusso luôn được chúng tôi làm mới
                  bằng những loại cà phê theo mùa.
                </p>
                <Link
                  to="/newproduct"
                  className="underline font-semibold hover:text-neutral-400 "
                >
                  CÓ GÌ MỚI
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewProduct;
