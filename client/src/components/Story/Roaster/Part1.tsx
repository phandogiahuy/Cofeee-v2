import { Image } from "antd";
import React from "react";

const Part1 = () => {
  return (
    <div>
      <h2 className="mt-2 font-semibold text-2xl">
        1. Chọn Lọc Tỉ Mỉ - Xưởng Rang Tiêu Chuẩn:
      </h2>
      <p className="mt-2">
        Đặt tiêu chuẩn cho từng cốc cà phê khi đến tay khách hàng gói gọn sự
        tinh tế, hương vị độc đáo và chúng tôi hiểu rằng bí thuật nằm ở chất
        lượng hạt cà phê và những mẻ rang tiêu chuẩn. Tại Xưởng rang của Flusso,
        mỗi ngày, mỗi nhân viên đảm nhận công việc chuyên biệt từ kiểm soát chất
        lượng nhân xanh đầu vào, nhặt hạt, cupping nếm thử, rang cà, đến đóng
        gói.
      </p>
      <p className="my-4">
        Nội tại mỗi hạt cà phê đều mang trong mình muôn vàn sắc vị. Vì thế, để
        giữ nguyên hương vị tinh tế, tại Flusso chúng tôi rang hạt dựa trên tiêu
        chuẩn SCA về nhiệt độ, thời gian, độ ẩm đều được căn chỉnh chuẩn xác,
        nói không với tẩm hương vị, không chất bảo quản như một sự tôn trọng
        trọn vẹn cho tình yêu cà phê.
      </p>
      <Image src="/roaster/roaster1.jpg" />
    </div>
  );
};

export default Part1;
