import { ArrowLeftOutlined, ArrowRightOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Button, Image, Timeline } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Timelines = () => {
  return (
    <div className="p-20">
      <p className="text-2xl font-bold">HÀNH TRÌNH HY VỌNG</p>
      <div className="mt-14">
        <Timeline mode="alternate">
          <Timeline.Item
            label={<Image src="/cauchuyen/timeline1.jpg" width={535} style={{marginTop:"10px"}} />}
            color="red"
          >
            <div className="p-4 flex items-center">
              <div className="flex-[1]">
                <ArrowRightOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="flex-[7]">
                <h3 className="font-bold text-2xl">
                  Giấc mơ cà phê đặc sản Việt Nam
                </h3>
                <p className="text-lg my-6 font-semibold">
                  Từ những ngày đầu tiên 2020, chúng tôi đã không ngừng nghiên
                  cứu và nhận ra rằng, tại Việt Nam, chúng ta hoàn toàn có thể
                  xây dựng vùng trồng cà phê đặc sản và chất lượng không hề thua
                  kém vùng trồng khác trên thế giới. Flusso biết rằng để làm
                  được điều đó cần xây dựng một nền móng kết nối bền vững, và đó
                  cũng là điều chúng tôi đang không ngừng nỗ lực mỗi ngày, nâng
                  tầm “cà phê sạch Việt Nam” trở thành “cà phê đặc sản Việt Nam”
                  từ sự kết nối - tôn trọng - công bằng - đồng hành chung tay
                  cùng người nông dân Việt.
                </p>
                <Link
                  to="/story/area"
                  className="font-bold text-xl underline text-orange-400"
                >
                  Khám phá vùng nguyên liệu
                </Link>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item
            label={<Image src="/cauchuyen/timeline2.jpg" width={550} style={{marginTop:"10px"}}  />}
            color="green"
          >
            <div className="p-6 flex items-center">
              <div className="flex-[7]">
                <h3 className="font-bold text-2xl">
                  Vòng quanh thế giới qua tách cà phê
                </h3>
                <p className="text-lg my-6  font-semibold">
                  Đằng sau mỗi tách cà phê là một hành trình từ khắp mọi miền
                  đất nước, là những câu chuyện về vùng đất, về khí hậu và con
                  người nơi đó. Tại Xưởng rang Flusso, bạn không chỉ tìm thấy cà
                  phê đặc sản Việt Nam mà còn có những lot cà phê với số điểm
                  cao và dải hương vị cực kỳ đáng giá đến từ những vùng trồng
                  nổi tiếng trên thế giới. Bằng sự cầu toàn tỉ mỉ và niềm đam mê
                  bất tận, chúng tôi luôn đặt ra tiêu chuẩn mẻ rang sau luôn tốt
                  hơn mẻ rang trước, và dưới kỹ thuật rang dựa trên tiêu chuẩn
                  SCA từng note hương cà phê được giữ vị nguyên bản, nét tinh tế
                  riêng biệt.
                </p>
                <Link
                  to="/story/roaster"
                  className="font-bold text-xl underline text-orange-400"
                >
                  Khám phá Xưởng rang Flusso
                </Link>
              </div>
              <div className="flex-[1]">
                <ArrowLeftOutlined style={{ fontSize: "50px" }} />
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item
            label={<Image src="/cauchuyen/timeline3.jpg" width={520} style={{marginTop:"10px"}}  />}
            color="gray"
          >
            <div className="p-4 flex items-center ">
              <div className="flex-[1]">
                {" "}
                <ArrowRightOutlined style={{ fontSize: "50px" }} />{" "}
              </div>
              <div className="flex-[7]">
                <h3 className="font-bold text-2xl">
                  Trở thành một phần mỗi ngày của bạn!
                </h3>
                <p className="text-lg my-6 font-semibold">
                  Chúng tôi yêu và hiểu từng hạt cà phê mình rang, điều đó cũng
                  nói lên rằng hơn ai hết chúng tôi biết cách pha phù hợp và
                  biến tấu, kết hợp các loại cà phê, nguyên liệu để tạo nên món
                  thức uống hoàn chỉnh, độc đáo hơn mỗi lần bạn ghé thăm. Chúng
                  tôi hy vọng được trở thành một phần trong mỗi ngày của bạn,
                  nơi quán cà phê với không gian sân vườn thiên nhiên xanh ngát,
                  một bản nhạc du dương vừa đủ bên một cốc cà phê thú vị, tất
                  thảy sẽ khiến bạn quên đi những mệt nhoài của ngày dài bận
                  rộn! Như một thế giới cà phê thu nhỏ, tại Flusso bạn có thể
                  chọn lựa hương vị yêu thích bất kỳ từ những hạt cà phê chất
                  lượng từ Việt Nam đến Thế giới, luôn sẵn sàng tại Xưởng rang
                  của chúng tôi.
                </p>
                <Link
                  to="/story/shop"
                  className="font-bold text-xl underline text-orange-400"
                >
                  Khám phá Quán cà phê Flusso
                </Link>
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item></Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default Timelines;
