import { Image } from "antd";
import React from "react";

const Part2 = () => {
  return (
    <div>
      <h2 className="mt-2 font-semibold text-2xl">
        2. Tiêu chuẩn rang SCA - Hương Vị Tinh Tế
      </h2>
      <p className="mt-2">
        Đỉnh cao của cà phê đặc sản là hương vị tinh tế trong từng hạt cà, và
        Xưởng Rang có vai trò giữ nguyên được bản chất và nâng tầm hương vị qua
        kỹ thuật rang chuẩn.
      </p>
      <p className="">
        <ul className="list-disc px-10 mt-2 text-sm">
          <li>
            Chọn lọc nguồn cung cấp nhân xanh uy tín trên khắp thế giới mang
            hương vị cà phê đặc sản đến gần với người tiêu dùng
          </li>
          <li>
            Tỉ mỉ chọn lựa hạt cà đạt chuẩn, không lỗi mốc, không khiếm khuyết
            trước khi rang.
          </li>
          <li>
            Sử dụng thiết bị rang hiện đại đảm bảo chất lượng mỗi mẻ rang hương
            vị đồng nhất.
          </li>
          <li>
            Không tẩm gia vị, không sử dụng chất bảo quản, rang mới mỗi ngày đảm
            bảo hương vị sạch và nguyên chất.
          </li>
          <li>Kỹ thuật, nhiệt độ, độ ẩm, thời gian dựa trên tiêu chuẩn SCA.</li>
        </ul>
      </p>
      <Image src="/roaster/roaster2.jpg" />
    </div>
  );
};

export default Part2;
