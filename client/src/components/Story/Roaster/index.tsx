import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="px-64 py-3">
        <center className="font-bold text-2xl">XƯỞNG RANG FLUSSO</center>
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Trang Chính</Link>,
            },
            {
              title: <Link to={"/story"}>Câu Chuyện Cà Phê</Link>,
            },
            {
              title: <p>Xưởng Rang Flusso</p>,
            },
          ]}
          style={{ fontSize: "20px", marginLeft: "30%" }}
        />
        <h1 className="font-semibold text-4xl mt-16">XƯỞNG RANG FLUSSO</h1>
        <Part1 />
        <Part2 />
      </div>
    </div>
  );
};

export default Main;
