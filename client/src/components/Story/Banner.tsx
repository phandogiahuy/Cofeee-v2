import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{
        background: "url(/cauchuyen.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[630px] flex justify-center items-center flex-col "
    >
      <div className="flex justify-center items-center flex-col">
        <p className="text-lg text-slate-200 ">
          Từ những vùng nguyên liệu uy tín{" "}
          <span className="text-red-500">Việt Nam </span>và
          <span className="text-red-500"> Thế giới</span>
        </p>
        <div className="my-8">
        <p className="text-3xl text-slate-200 font-semibold">
          Flusso chọn lọc tỉ mỉ - Rang xay nhất quán - Đóng gói thủ công
        </p>
        <p className="text-3xl text-slate-200 font-semibold ">
          Gửi đến bạn những cốc cà phê tươi mới - tinh tế hơn mỗi ngày!
        </p>
        </div>
        <Button style={{backgroundColor:"black",color:"white"}}>
          <Link to={"/all-product"} className="uppercase text-base font-bold   ">Khám phá ngay </Link>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
