import { Breadcrumb, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="py-12 px-64">
      <center>
        <h1 className="font-bold text-3xl">ĐÀO TẠO</h1>
      </center>
      <Breadcrumb
        items={[
          {
            title: <Link to={"/"}>Trang Chủ</Link>,
          },
          {
            title: <p>Đào Tạo</p>,
          },
        ]}
        style={{ fontSize: "20px", marginLeft: "42%" }}
      />
      <div className="mt-12">
        <h1 className="font-semibold text-5xl">ĐÀO TẠO</h1>
        <center>
          <Image src="/training/bg1.jpg" />
        </center>
      </div>
      <p>
        Bạn muốn trở thành một Barista, Chủ Quán Cà Phê, Thợ Rang Cà Phê, hay
        Chuyên Gia Cà Phê, việc liên tục học hỏi và phát triển kỹ năng là quan
        trọng. Hãy chọn các khóa học phù hợp với mục tiêu nghề nghiệp của bạn và
        luôn nỗ lực để trở thành chuyên gia trong lĩnh vực này.
      </p>
      <div className="mt-3">
        <p className="font-bold">
          1.Khóa học <span className="text-sky-600">SCA Brewing:</span>{" "}
        </p>
        <p>
          Quá trình chiết xuất cà phê là quá trình kết hợp nhuần nhuyễn giữa
          sáng tạo, pha cà phê thủ công và khoa học. Khóa học hướng dẫn bạn hiểu
          sâu hơn về cà phê và pha cà phê thủ công.
        </p>
      </div>
      <div className="mt-3">
        <p className="font-bold">
          2.Khóa học <span className="text-sky-600">Sensory Skills:</span>
        </p>
        <p>
          Khóa học giới thiệu các yếu tố cần thiết của việc đánh giá giác quan
          theo cách thức thực tế và tương tác, nghiên cứu cách giác quan của con
          người ảnh hưởng đến nhận thức và cách áp dụng kiến ​​thức này khi đánh
          giá các đặc tính tự nhiên của cà phê.
        </p>
      </div>
      <div className="mt-3">
        <p className="font-bold">
          3.Khóa học <span className="text-sky-600">SCA Barista Skills:</span>{" "}
        </p>
        <p>
          Khóa học sẽ hướng dẫn kỹ năng thủ công làm Espresso và pha chế các đồ
          uống trên nền Espresso và kỹ năng đánh sữa và Latte Art.
        </p>
      </div>
      <div className="mt-3">
        <p className="font-bold">
          4.Khóa học <span className="text-sky-600">SCA Roasting:</span>
        </p>
        <p>
          Bạn sẽ được hướng dẫn quá trình rang cà phê cơ bản trực tiếp và khám
          phá sâu hơn về mùi vị đặc trưng của mỗi mẻ rang.
        </p>
      </div>
      <div className="mt-3">
        <p className="font-bold">
          5.Khóa học <span className="text-sky-600">SCA Green Been:</span>{" "}
        </p>
        <p>
          Khóa học Green Been Foundation giới thiệu về nhân xanh và sơ chế cà
          phê.
        </p>
      </div>
      <p className="mt-6">
        Nếu bạn vẫn còn những thắc mắc về khóa học, đừng ngần ngại để lại thông
        tin liên hệ <Link to={"/contact"} className="text-purple-950 font-bold">tại đây</Link>, chúng tôi sẽ sớm liên
        hệ và tư vấn chi tiết cho bạn!
      </p>
      <center className="mt-8"><Image src="/training/bg2.jpg"/></center>
    </div>
  );
};

export default Main;
