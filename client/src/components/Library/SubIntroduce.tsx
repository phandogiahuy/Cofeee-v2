import React from "react";
import { Link } from "react-router-dom";

const SubIntroduce = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] bg-slate-50">
      <h1 className="font-bold text-6xl">LÀM CHỦ QUÁN CÀ PHÊ</h1>
      <p className="w-[44%] text-xl my-6">
        Tầm nhìn đã sáng tỏ, các nguồn lực đã sẵn sàng và bạn sắp đi một bước
        lớn trên hành trình trở thành chủ của một quán cà phê mơ ước. Chắc chắn
        rồi, bạn rất hào hứng nhưng vẫn còn đó một số việc chưa thể hoàn thành.
        Và đôi lúc, chúng sẽ khiến bạn cảm thấy choáng ngợp. Chúng tôi cũng đã
        từng ở đó, đã từng trải qua nhiều khó khăn và học được rất nhiều bài học
        quý giá suốt những năm làm việc trong lĩnh vực cà phê. Và giờ chúng tôi
        ở đây để cùng bạn đi qua những thời điểm quan trọng này. Bởi vì mọi thứ
        bạn cần để phục vụ một ly cà phê xuất sắc… tất cả đều nằm trong tay
        Flusso.
      </p>
      <Link
        to={"/library/lam-chu"}
        className="text-2xl font-medium text-sky-500 smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 "
      >
        LÀM CHỦ QUÁN CÀ PHÊ
      </Link>
    </div>
  );
};

export default SubIntroduce;
