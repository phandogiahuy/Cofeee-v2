import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Part1 from "./Part1";
import Part2 from "./Part2";

const Main = () => {
  return (
    <div>
      <div className="px-64 py-3">
        <center className="font-bold text-2xl">VÙNG NGUYÊN LIỆU HỮU CƠ</center>
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Trang Chủ</Link>,
            },
            {
              title: <Link to={"/story"}>Câu Chuyện Cà Phê</Link>,
            },
            {
              title: <p>Vùng Nguyên Liệu</p>,
            },
          ]}
          style={{ fontSize: "20px", marginLeft: "30%" }}
        />
        <h1 className="font-semibold text-4xl mt-16">
          VÙNG NGUYÊN LIỆU HỮU CƠ
        </h1>
        <Part1 />
        <Part2 />
      </div>
    </div>
  );
};

export default Main;
