import { Col, Row } from "antd";
import { useEffect, useRef } from "react";

const Infor = () => {
  const elementRef = useRef<null|any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add('animate-slideUpAndIn');
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
    <div className=" flex justify-center items-center mt-36" ref={elementRef}>
      <div className="flex flex-col items-center flex-1 ">
        <img src="/icon1.jpg" style={{ width: "100px" }} />
        <h2 className="my-2 font-bold text-amber-500">
          Vùng trồng chất lượng cao
        </h2>
        <p className="text-base">Tuyển chọn hạt cà phê 80+ CQI</p>
      </div>

      <div className="flex flex-col items-center  flex-1 ">
        <img src="/icon2.jpg" style={{ width: "100px" }} />
        <h2 className="my-2 font-bold text-amber-500">Cà phê rang mới</h2>
        <p className="text-base">Theo tiêu chuẩn SCA</p>
      </div>

      <div className="flex flex-col items-center  flex-1">
        <img src="/icon3.jpg" style={{ width: "100px" }} />
        <h2 className="my-2 font-bold text-amber-500">
          Giao hàng nhanh toàn quốc
        </h2>
        <p className="text-base">
          Miễn phí vận chuyển đơn hàng cà phê từ 500.000đ
        </p>
      </div>
    </div>
  );
};

export default Infor;
