import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Description = () => {
  const elementRef = useRef<null|any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add('animate-slideUpAndIn');
          observer.unobserve(elementRef.current); // Ngừng theo dõi sau khi animation hoàn thành
        }
      },
      { threshold: 0.01 } // Kích hoạt khi 50% phần tử hiển thị trong viewport
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
    <div className=" flex flex-col justify-start items-center mt-20" ref={elementRef}>
      <div className="flex flex-col justify-center items-center container w-3/4  ">
      <p className="text-3xl font-bold">FLUSSO VIETNAM SPECIALTY COFFEE XIN CHÀO!</p>
      <p className="text-xl my-5">
        Hàng ngày công việc của Flusso là từng bước xây dựng vùng trồng cà phê
        đặc sản Việt Nam tạo nên những hạt cà phê chất lượng không thua kém bạn
        bè quốc tế và không ngừng tìm kiếm khám phá những vùng đất xa xôi trên
        thế giới, đưa những hạt cà phê đầy thú vị ấy về xưởng rang của chúng
        tôi.{" "}
      </p>
      <p className="text-xl">
        Cuối cùng sau khâu chọn lọc tỉ mỉ, loại bỏ những hạt khiếm khuyết và
        rang một cách nhất quán, chúng tôi đóng gói một cách cẩn thận gửi đến
        tay bạn bằng cả tâm huyết và đam mê. Thật tiếc nếu chúng ta bỏ lỡ một
        hương vị độc đáo trong số đó!
      </p>
      <Link to="/story" className="text-orange-500 underline mt-4">Khám phá câu chuyện của chúng tôi</Link>
      </div>
    </div>
  );
};

export default Description;
