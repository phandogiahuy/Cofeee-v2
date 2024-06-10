import React from "react";

const ForUs = () => {
  return (
    <div className="flex flex-col mt-12">
      <p className="font-semibold text-2xl self-center">VỀ CHÚNG TÔI</p>
      <div className="flex items-center justify-evenly mt-4 ">
        <div className="flex flex-col items-center relative group ">
          <img src="/icon1.jpg" width={70} />
          <p className="text-xl font-bold text-orange-300">
            Vùng trồng chất lượng
          </p>
          <p>Tuyển chọn hạt cà phê 80+ CQI</p>
          <div className=" w-[48px] h-[48px] bg-orange-200 transition-all duration-500 rounded-full absolute top-5 left-28 transform -translate-x-1/2 -translate-y-1/2 opacity-85   group-hover:-translate-x-3  group-hover:opacity-0"></div>
        </div>
        <div className="flex flex-col justify-center items-center relative group ">
          <img src="/icon2.jpg" width={70} />
          <p className="text-xl font-bold text-orange-300">Cà phê rang mới</p>
          <p>Theo tiêu chuẩn SCA</p>
          <div className=" w-[48px] h-[48px] bg-orange-200 transition-all duration-500 rounded-full absolute top-5 left-28 transform -translate-x-16 -translate-y-1/2 opacity-85   group-hover:-translate-x-12  group-hover:opacity-0"></div>
        </div>
        <div className="flex flex-col justify-center items-center  relative group">
          <img src="/icon4.jpg" width={70} />
          <p className="text-xl font-bold text-orange-300">Minh bạch rõ ràng</p>
          <p>Kiểm duyệt nghiêm ngặt</p>
          <div className=" w-[48px] h-[48px] bg-orange-200 transition-all duration-500 rounded-full absolute top-5 left-28 transform -translate-x-14 -translate-y-1/2 opacity-85   group-hover:-translate-x-10  group-hover:opacity-0"></div>
        </div>
        <div className="flex flex-col justify-center items-center relative group ">
          <img src="/icon5.jpg" width={70} />
          <p className="text-xl font-bold text-orange-300">Giao hàng nhanh</p>
          <p>Dù bạn ở bất kỳ đâu!</p>
          <div className=" w-[48px] h-[48px] bg-orange-200 transition-all duration-500 rounded-full absolute top-5 left-20 transform -translate-x-9 -translate-y-1/2 opacity-85   group-hover:-translate-x-6 group-hover:opacity-0"></div>
        </div>
      </div>
      <div
        style={{
          background: "url(/cauchuyen/cauchuyen1.jpg)",
          backgroundSize: "cover",
        }}
        className="mt-48  h-[1100px] relative flex justify-center w-[100%] "
      >
        <img
          src="/cauchuyen/cauchuyen2.jpg"
          width={1300}
          className="absolute -top-[10%] -translate-x-50  "
        />
        <p className="self-end w-2/4 min-w-9 mb-[3%] text-lg font-semibold rounded bg-neutral-700 text-white p-5">
          Hàng ngày công việc của Flusso là từng bước xây dựng vùng trồng cà phê
          đặc sản Việt Nam tạo nên những hạt cà phê chất lượng không thua kém
          bạn bè quốc tế và không ngừng tìm kiếm khám phá những vùng đất xa xôi
          trên thế giới, đưa những hạt cà phê đầy thú vị ấy về xưởng rang của
          chúng tôi. Cuối cùng sau khâu chọn lọc tỉ mỉ, loại bỏ những hạt khiếm
          khuyết và rang một cách nhất quán, chúng tôi đóng gói một cách cẩn
          thận gửi đến tay bạn bằng cả tâm huyết và đam mê. Thật tiếc nếu chúng
          ta bỏ lỡ một hương vị độc đáo trong số đó!{" "}
        </p>
      </div>
    </div>
  );
};

export default ForUs;
