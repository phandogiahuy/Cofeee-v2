import React from "react";
import { Link } from "react-router-dom";

const SubIntroduce = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] bg-slate-50">
      <h1 className="font-bold text-6xl">VÀNH ĐAI CÀ PHÊ</h1>
      <p className="w-[42%] text-xl my-6">
        Mỗi vùng trồng cà phê lại có những đặc điểm khí hậu và thổ nhưỡng khác
        nhau. Bên cạnh những yếu tố như truyền thống hay mức độ phát triển của
        nền nông nghiệp, cà phê đến từ mỗi vùng trồng sẽ mang những hương vị đặc
        trưng khác nhau. Mọi điều thú vị vẫn còn đang ở phía trước.
      </p>
      <Link
        to={"/story"}
        className="text-2xl font-medium text-sky-500 smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 "
      >
        KHÁM PHÁ VÀNH ĐAI CÀ PHÊ
      </Link>
    </div>
  );
};

export default SubIntroduce;
