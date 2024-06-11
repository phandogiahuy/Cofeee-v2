import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="py-12 px-64">
      <center>
        <h1 className="font-bold text-3xl">LÀM CHỦ QUÁN CÀ PHÊ</h1>
      </center>
      <Breadcrumb
        items={[
          {
            title: <Link to={"/"}>Trang Chủ</Link>,
          },
          {
            title: <Link to={"/library"}>Thư Viện Cà Phê</Link>,
          },
          {
            title: <p>Làm Chủ Quán Cà Phê</p>,
          },
        ]}
        style={{ fontSize: "20px", marginLeft: "30%" }}
      />
      <div className="mt-10 ">
        <h1 className="font-bold text-5xl">LÀM CHỦ QUÁN CÀ PHÊ</h1>
        <p className="mt-4">
          Tầm nhìn đã sáng tỏ, các nguồn lực đã sẵn sàng và bạn sắp đi một bước
          lớn trên hành trình trở thành chủ của một quán cà phê mơ ước. Chắc
          chắn rồi, bạn rất hào hứng nhưng vẫn còn đó một số việc chưa thể hoàn
          thành. Và đôi lúc, chúng sẽ khiến bạn cảm thấy choáng ngợp. Chúng tôi
          cũng đã từng ở đó, đã từng trải qua nhiều khó khăn và học được rất
          nhiều bài học quý giá suốt những năm làm việc trong lĩnh vực cà phê.
          Và giờ chúng tôi ở đây để cùng bạn đi qua những thời điểm quan trọng
          này. Bởi vì mọi thứ bạn cần để phục vụ một ly cà phê xuất sắc… tất cả
          đều nằm trong tay Flusso.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-3xl">CHẤT LƯỢNG CÀ PHÊ</h1>
        <p className="mt-4">
          Chất lượng cà phê chính là thông điệp mà người chủ quán muốn truyền
          tải. Phục vụ một ly cà phê ngon là cách hiệu quả nhất để nói với những
          người khách hàng của mình rằng bạn trân trọng họ nhiều đến thế nào.
          Flusso thích được đi cùng với những người như thế – những người chủ
          quán đặt chất lượng cà phê ở vị trí cốt lõi của sự phát triển. Bởi vì
          bạn muốn khách hàng phải nhớ đến mình bằng những ly cà phê tuyệt vời,
          nên chúng tôi cũng muốn bạn nghĩ về Flusso với điều tương tự. Trong
          kho cà phê của Flusso là những loại hạt xuất sắc đến từ Việt Nam và
          khắp các vùng trồng nổi tiếng thế giới. Những loại cà phê mang hương
          vị ấn tượng để đảm bảo rằng khách hàng của bạn sẽ phải hoàn toàn hài
          lòng về chất lượng. Chúng tôi hiểu từng hạt cà phê của mình và tỉ mỉ
          rang nó mỗi ngày với sự nhất quán tuyệt đối. Cà phê sẽ luôn ở trạng
          thái tốt nhất khi giao đến bạn. Để bạn có thể dành thời gian quý giá
          cho những điều quan trọng hơn: như phục vụ đồ uống ngon cho những
          khách hàng của mình.
        </p>
      </div>
      <div className="mt-10">
      <h1 className="font-semibold text-3xl">TƯ VẤN, ĐÀO TẠO & VẬN HÀNH</h1>
        <p className="mt-4">
          Một trong những điều thú vị nhất khi làm việc trong ngành cà phê, đó
          là bạn sẽ dần yêu cà phê nhưng là theo cách của một tín đồ. Bạn sẽ
          luôn có trong mình một khao khát đi chia sẻ tình yêu này cho càng
          nhiều người càng tốt. Chúng tôi sẽ hướng dẫn bạn mọi thứ… Từ những quy
          trình chế biến tại farm, cách thử nếm cà phê, những phương pháp pha cà
          phê nghệ thuật, espresso; cho đến cả cách bạn sẽ tối ưu quầy bar của
          mình như thế nào. Và tất nhiên không thể thiếu những câu chuyện cà phê
          lôi cuốn bạn sẽ muốn chia sẻ với khách hàng của mình. Những kiến thức
          đó đã được chúng tôi hệ thống lại trong một giáo trình dễ hiểu để
          truyền đạt lại cho bạn với một mục tiêu duy nhất: Giúp bạn nhận được
          đầy đủ công cụ để có thể phục vụ mỗi khách hàng bằng những ly cà phê
          thực sự ấn tượng và đáng nhớ.
        </p>
      </div>
      <div className="mt-10">
      <h1 className="font-semibold text-3xl">MÁY VÀ DỤNG CỤ PHA CÀ PHÊ</h1>
        <p className="mt-4">
          Tại Flusso, chúng tôi có cơ hội được trải nghiệm với rất nhiều máy pha
          cà phê và dụng cụ pha chế. Điều đó có nghĩa là chúng tôi hiểu rất rõ
          về mỗi loại thiết bị hay dụng cụ pha này. Có rất nhiều lựa chọn cho
          bạn, nhưng chúng tôi ở đây để đảm bảo rằng bạn sẽ nhận được đầy đủ mọi
          thông tin cần thiết trước khi đưa ra quyết định. Để bạn có thể lựa
          chọn được những thiết bị phù hợp và hiệu quả nhất cho mô hình và kinh
          phí quán cà phê của mình. Chính bởi vì những thiết bị này sẽ là trung
          tâm của không gian quán nên chúng cũng sẽ là một phần của những trải
          nghiệm thân thuộc, những dấu mốc, kỷ niệm đáng nhớ của bạn và khách
          hàng. Có một điều chắc chắn rằng: rất nhiều khách hàng của bạn sẽ đến
          và quay trở lại chỉ để thưởng thức cà phê được pha từ những thiết bị
          này.
        </p>
      </div>
      <div className="mt-16">
        <p>Chắc chắn rồi, quán cà phê của bạn được xây dựng dựa trên tầm nhìn của bạn. Và chúng tôi ở đây, không gì khác ngoài một người bạn đồng hành đáng tin cậy để giúp bạn biến điều đó trở thành hiện thực.</p>
      </div>
    </div>
  );
};

export default Main;
