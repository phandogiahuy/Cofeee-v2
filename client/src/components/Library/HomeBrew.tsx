import { AuditOutlined, BulbOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse, Image } from "antd";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

const HomeBrew = () => {
  return (
    <div>
      <div className="flex justify-center items-center py-28 ">
        <div className="w-[28rem] mr-32">
          <h1 className="font-bold text-6xl leading-snug">
            PHA CÀ PHÊ TẠI NHÀ
          </h1>
          <p className="my-8 text-xl">
            Cho dù bạn đang pha cà phê theo cách nào, bằng dụng cụ gì, chúng tôi
            sẽ giúp bạn trở thành chuyên gia với nó. Bạn sẽ master những công
            thức và kỹ thuật pha một cách đơn giản và dễ dàng nhất. Với hướng
            dẫn của Flusso, bạn sẽ mở khóa toàn bộ dải hương vị của những loại
            cà phê ngon nhất trên thế giới.
          </p>
          <Link
            to={"/"}
            className="text-2xl font-medium text-sky-500 smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[100%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0"
          >
            XEM HƯỚNG DẪN PHA
          </Link>
        </div>
        <div className="">
          <Image src="/library/li2.jpg" width={540} height={540} />
        </div>
      </div>
      <div className="py-8 px-96">
        <Collapse
          style={{ width: "100%" }}
          className=" bg-slate-50"
          bordered={false}
          expandIcon={({ isActive }) => (
            <PlusOutlined
              rotate={isActive ? 70 : 0}
              style={{ fontSize: "30px" }}
            />
          )}
          expandIconPosition={"end"}
          accordion
        >
          <Panel
            header={
              <h1 className="  text-2xl font-semibold text-sky-700">
                <BulbOutlined /> HÀNH TRÌNH ĐẾN VỚI NỀN VĂN MINH CỦA HẠT CÀ PHÊ
              </h1>
            }
            key="1"
          >
            <div className="py-6">
              <p className="text-xl font-normal">
                Trên thế giới, có nhiều câu chuyện kể về cách mà hạt cà phê lần
                đầu tiên đến với con người. Đó là đồ uống của thiên thần Gabriel
                ban cho nhà tiên tri Mohammed giúp ông có sức mạnh chiến đấu với
                quân thù. Một truyền thuyết khác lại nói về vua Solomon đã ban
                cà phê cho những người dân bị bệnh và chữa lành cho họ. Nhưng
                nổi tiếng hơn cả, có lẽ vẫn là Kaldi cũng những chú dê nhảy múa.
              </p>
              <p className="text-xl font-normal my-10">
                Kaldi là một anh chàng chăn dê du mục. Một hôm, anh bắt gặp
                những chú dê trong đàn ăn một loại quả từ bụi cây và sau đó
                chúng bắt đầu… tăng động. Kaldi cũng muốn thử một vài quả và
                nhận thấy mình có chút hiếu động hơn. Tin rằng đã tìm được một
                loại trái cây đặc biệt, anh mang chúng tới tu viện địa phương để
                hỏi. Sau khi nghe xong câu chuyện về những con dê nhảy múa, vị
                trụ trì của tu viện đã nghĩ rằng đây là loại trái cây của ma quỷ
                nên ông ném những trái này vào lửa. Hương thơm đượm nồng của hạt
                bắt đầu tỏa ra và ngay sau đó vị trụ trì quyết định lại: nó trở
                thành loại trái cây của thần thánh.
              </p>
              <p className="text-xl font-normal">
                Đất nước Yemen là nơi đầu tiên cây cà phê được đưa vào canh tác
                (mặc dù trước đó nó mọc dại ở Ethiopia). Chính phủ của 2 nước
                thậm chí còn ban hành lệnh cấm mang cây hoặc hạt ra khỏi lãnh
                thổ để ngăn không cho cà phê được trồng bên ngoài Ethiopia hoặc
                Yemen cho tới tận khoảng năm 1600.
              </p>
              <p className="text-xl font-normal my-10">
                Cái tên “Cà phê” bắt nguồn từ tiếng Ả Rập: “Qahwah” và nó có
                nghĩa là rượu. Sau đó nó trở thành “Kahveh” trong tiếng Thổ Nhĩ
                Kỳ rồi “Koffie” trong tiếng Hà Lan. Và đó, chính là tiền thân
                của từ “Coffee” trong tiếng Anh
              </p>
              <p className="text-xl font-normal">
                Được các nước Hồi Giáo ủng hộ, cà phê trở nên phổ biến và được
                lưu hành khắp vùng Biển Đỏ. Các quán cà phê nhanh chóng được mở
                ra và trở thành những trung tâm trao đổi tin tức. Thịnh hành là
                vậy, tuy nhiên cà phê sẽ không thể phát triển nếu không tới được
                Châu Âu. Tại thành phố cảng Mocha ở bờ biển Tây Nam của Yemen,
                nơi cà phê chính thức được giới thiệu và đưa sang Lục Địa Già,
                bắt đầu thời kỳ hoàng kim và trở thành vật phẩm được tiêu thụ
                nhiều thứ 2 trên thế giới.
              </p>
            </div>
          </Panel>
          <Panel
            header={
              <h1 className="  text-2xl font-semibold text-sky-700">
                <BulbOutlined /> BA THỜI KỲ PHÁT TRIỂN CỦA NGÀNH CÀ PHÊ THẾ GIỚI
              </h1>
            }
            key="2"
          >
            <div className="py-6">
              <p className="text-xl font-normal">
                Thế giới chúng ta đã chứng kiến các xu hướng cà phê đến và đi
                trong suốt nhiều thế kỷ. Tại mỗi thời kỳ, con người lại có cái
                nhìn về cà phê theo mỗi cách khác nhau. Thuật ngữ “làn sóng cà
                phê” được sử dụng vào năm 1999 và nó đã giúp đem đến cái nhìn rõ
                nét hơn về quá trình phát triển của nền công nghiệp cà phê qua
                mỗi thời kỳ.
              </p>
              <p className="text-xl font-normal my-10">
                Làn sóng thứ 1: Là khi cà phê bắt đầu được sử dụng rộng rãi và
                trở nên phổ biến. Những thương hiệu cà phê lớn trong thời kỳ này
                không tập trung mạnh vào chất lượng và tính minh bạch của nguồn
                nguyên liệu. Cà phê chỉ đơn giản là một đồ uống, không có gì đặc
                biệt. Nó giống như một sản phẩm nhân tạo đến nỗi thậm chí nhiều
                người còn không biết rằng hạt cà phê đến từ một cái cây ngoài
                đời thực.{" "}
              </p>
              <p className="text-xl font-normal">
                Làn sóng thứ 2: Đây là thời kỳ trải nghiệm sự sáng tạo của đồ
                uống cà phê. Đúng vậy, vào thời điểm này, mọi người muốn cho
                thêm cái gì đó vào cà phê và làm nó… đỡ khó uống hơn. Thương
                hiệu tiên phong ở thời kỳ này chính là Starbucks. Bằng cách cho
                thêm sữa hoặc siro vào espresso khiến ly cà phê đỡ đắng và có
                mùi vị sinh động hơn. Cách làm này đã khiến mọi người tỏ ra
                thích thú và quan tâm hơn tới loại đồ uống này. Tuy nhiên, đúng
                là như vậy: mọi người chỉ đam mê những ly cà phê có hương vị hay
                ho chứ không quan tâm đến bản thân hạt cà phê.
              </p>
              <p className="text-xl font-normal my-10">
                Trong suốt thời kỳ của làn sóng thứ 1 và thứ 2, bạn chỉ có thể
                mua được cà phê tại các siêu thị ở dạng bột xay sẵn và nếu tích
                lũy đủ may mắn, bạn có thể mua được gói cà phê siêu mới có ngày
                rang cách đó khoảng 6 tháng.
              </p>
              <p className="text-xl font-normal">
                Làn sóng thứ 3: Bắt nguồn từ một cộng đồng của những nhà rang
                xay và quán cà phê tập trung vào khai thác tố chất của hạt cà
                phê. Họ tiếp cận những nguồn nguyên liệu được canh tác tốt hơn,
                thử nghiệm với cách rang nhẹ hơn và tìm thấy những hương vị
                nguyên bản trong hạt cà phê. Cách làm này đã trở nên phổ biến và
                được đón nhận khắp nơi trên thế giới. Những người thưởng thức
                bắt đầu nhận ra rằng cà phê không chỉ có vị đắng và mùi cháy
                khét. Những tổ chức như SCAA, CQI được thành lập làm nền tảng
                cho phong cách rang và pha cà phê của thời kỳ này.
              </p>
            </div>
          </Panel>
          <Panel
            header={
              <h1 className=" text-2xl font-semibold text-sky-700 ">
                <BulbOutlined /> CÀ PHÊ SPECIALITY
              </h1>
            }
            key="3"
          >
            <div className="py-6">
              <p className="text-xl font-normal">
                Specialty giống như một danh hiệu cho cà phê vậy. Một loại cà
                phê đạt được Specialty khi nó được 3 chuyên gia thử nếm có chứng
                chỉ Q Grader đánh giá và chấm ít nhất 80 trên thang 100 điểm.
                Nếu đạt đủ tiêu chuẩn trên nó sẽ được cấp giấy chứng nhận là một
                Specialty Coffee.
              </p>
              <p className="text-xl font-normal my-10">
                Điều đó có nghĩa là, nếu bạn có một loại cà phê tốt hơn, dù
                không thua kém gì so với một loại cà phê Specialty khác, tuy
                nhiên nó lại không được 3 Q Grader đánh giá. Thì đúng vậy, đó
                không phải là Specialty Coffee! Nhưng bạn có thể coi nó là mang
                chất lượng của Specialty (tất nhiên là chỉ với riêng bạn).
              </p>
              <p className="text-xl font-normal">
                Để đạt được mức điểm trên 80, trước hết đối với hạt nhân xanh,
                nó phải được thông qua kiểm tra bằng mắt để đếm những hạt lỗi.
                Quy định là trong 350g nhân xanh, cà phê Specialty phải không có
                bất kỳ lỗi sơ cấp nào và ít hơn 5 lỗi thứ cấp. Sau đó hạt sẽ
                được rang theo đúng tiêu chuẩn, các chuyên gia thử nếm sẽ tiến
                hành cupping và chấm điểm cho từng thuộc tính của cà phê như
                hương thơm, vị, tính acid, body và độ cân bằng.{" "}
              </p>
              <p className="text-xl font-normal my-10">
                Cà phê Specialty thường được trồng ở các vùng cao, cần nhiều sự
                quan tâm, chăm sóc của người nông dân. Một khi đạt chất lượng
                cao hơn, nó sẽ được bán với giá trị cao hơn và đem lại cho người
                nông dân những điều kiện sống tốt hơn để chuyên tâm với những
                cây cà phê của mình.
              </p>
              <p className="text-xl font-normal">
                Cho tới nay, đã có hơn 120 giống cây cà phê khác nhau được phát
                hiện và được xếp vào 3 nhóm chính là Arabica, Robusta và
                Liberica. Trong đó, Arabica và Robusta là 2 giống cây chiếm sản
                lượng chủ yếu trong nguồn nguyên liệu cà phê trên toàn thế giới.
              </p>
            </div>
          </Panel>
          <Panel
            header={
              <h1 className=" text-2xl font-semibold text-sky-700">
                <BulbOutlined /> SƠ CHẾ CÀ PHÊ
              </h1>
            }
            key="4"
          >
            <div className="py-6">
              <p className="text-xl font-normal">
                Khi hoàn thành việc thu hoạch, quả cà phê sẽ ngay lập tức đi vào
                công đoạn sơ chế và làm khô trước khi đến tay các nhà rang.
              </p>
              <p className="text-xl font-normal my-10">
                Tại công đoạn này, quả cà phê sẽ luôn được đưa vào một bể chứa
                nước để làm sạch bụi bẩn và vớt loại bỏ những quả nổi trên mặt
                nước - những quả bị hỏng và có kết cấu không nguyên vẹn. Sau đó
                chúng sẽ được thực hiện các công việc khác nhau tùy theo mỗi
                phương pháp sơ chế được áp dụng. Có 3 phương pháp sơ chế cà phê
                phổ biến nhất, đó là sơ chế Washed (Ướt), Natural (Khô/Tự nhiên)
                và Honey (hay còn được gọi là Semi-Washed hoặc Pulped Natural)
              </p>
              <p className="text-xl font-normal">
                Nhìn chung, sơ chế cà phê gồm 2 công việc chính đó là: loại bỏ
                các lớp của quả cà phê và làm khô hạt cà phê. Sự khác biệt chính
                giữa các phương pháp sơ chế cà phê nằm ở thử tự thực hiện các
                công việc này.
              </p>
              <p className="text-xl font-normal my-10">
                Nếu là Sơ chế Ướt (Washed), quả cà phê sẽ được loại bỏ toàn bộ
                các lớp vỏ, thịt quả và lớp màng nhầy bằng các loại máy tách và
                nghiền nhưng vẫn giữ lại lớp vỏ trấu (Parchment - lớp vỏ mỏng
                bọc quanh để bảo vệ hạt). Sau đó, chúng sẽ được nghỉ 1 ngày
                trước khi đem phơi nắng. Người nông dân vẫn thường trải đều hạt
                ra sân nhưng đối với những nông hộ chế biến ở mức chất lượng cao
                hoặc specialty, cà phê bắt buộc phải được trải đều và phơi trên
                dàn. Sau thời gian phơi kéo dài từ 2 đến 3 tuần, khi hạt cà phê
                sẽ đạt tới độ ẩm lý tưởng 10-12%, chúng sẽ được đưa vào kho nghỉ
                ngơi từ 4-8 tuần trước khi hoàn thành bằng việc tách nốt lớp vỏ
                trấu. Phương pháp sơ chế Washed sẽ cho cà phê hương vị rất sáng
                và clean.
              </p>
              <p className="text-xl font-normal">
                Đối với Sơ chế Tự nhiên (Natural), sau khi được rửa sạch bụi bẩn
                ngoài, quả cà phê sẽ tiến thẳng ra sân phơi. Khác với Sơ chế
                Washed, cà phê được để nguyên quả và xếp thành từng luống khi
                phơi khi đi theo Sơ chế Natural. Dưới ánh nắng, quả cà phê sẽ
                dần khô quắt lại giống như trái nho khô. Trong suốt quá trình
                phơi kéo dài từ 3-4 tuần này, quá trình lên men bên trong quả
                diễn ra, hạt cà phê sẽ liên tục hấp thụ đường và các hương vị từ
                thịt quả vào bên trong hạt. Cho tới khi đạt đến độ ẩm lý tưởng,
                quả khô sẽ được đưa vào máy tách để loại bỏ những lớp bên ngoài,
                chỉ giữ lại phần hạt và hoàn thành công đoạn sơ chế. Phương pháp
                Sơ chế Natural cho cà phê hương trái cây mạnh mẽ với độ ngọt
                cao. Bên cạnh việc được xem là một kiểu sơ chế rất khó kiểm
                soát, sơ chế Natural lại được công nhận là có tiềm năng để tạo
                ra một ly cà phê xuất sắc nhất.
              </p>
              <p className="text-xl font-normal my-10">
                Phương pháp Sơ chế Honey đầu tiên được làm tại Costa Rica. Quả
                cà phê sẽ được loại bỏ phần vỏ và thịt quả nhưng được giữ lại
                phần chất nhầy để cùng phơi khô. Nó giống như kiểu một nửa
                Washed và một nửa Natural, vậy nên phương pháp Sơ chế Honey còn
                được gọi bằng những cái tên khác nhau như Semi-Washed, Semi-Dry
                hay Pulped Natural. Người nông dân có thể chủ động trong việc
                giữ lại bao nhiêu chất nhầy theo mục đích. Từ đó Honey lại chia
                ra thành White/Yellow/Red/Black Honey tượng trưng cho lượng chất
                nhầy được giữ lại từ ít đến nhiều. Chính vì vậy, sơ chế Honey
                đem đến cho cà phê một dải hương vị phức tạp và đa dạng đâu đó
                nằm giữa Washed và Natural.
              </p>
            </div>
          </Panel>
          <Panel
            header={
              <h1 className=" text-2xl font-semibold text-sky-700 ">
                <BulbOutlined /> THẾ GIỚI CÀ PHÊ TRONG TƯƠNG LAI
              </h1>
            }
            key="5"
          >
            <div className="py-6">
              <p className="text-xl font-normal">
                Cà phê ngày càng được tiêu thụ nhiều hơn và mức cầu đã dần vượt
                qua mức cung. Hạt Robusta với sản lượng dồi dào sẽ trở thành
                nguồn nguyên liệu chính trong ngành cà phê. Rồi trái đất nóng
                lên khiến vành đai cà phê ngày càng mở rộng. Tương lai, do thay
                đổi khí hậu, rất có thể ta sẽ được chứng kiến nhiều vùng trồng
                được cà phê mới toanh xuất hiện. Nhưng đó không phải là những gì
                chúng ta sẽ nói trong hôm nay.
              </p>
              <p className="text-xl font-normal my-10">
                Flusso nghĩ rằng, với mọi thế mạnh nổi trội của mình, trong
                tương lai gần, làn sóng Specialty Coffee sẽ ngày càng lớn mạnh.
                Ở Việt Nam, những thế hệ trẻ sẽ thưởng thức cà phê theo cách
                khác đi so với những thế hệ trước đây. Họ tin vào những hương vị
                nguyên bản của hạt cà phê mà không phải là những chất tạo mùi,
                tạo vị được thêm nếm vào.
              </p>
              <p className="text-xl font-normal">
                Khi thế hệ này lớn lên, Specialty (hay ít nhất là những loại cà
                phê chất lượng cao, được canh tác chuẩn mực) sẽ được lựa chọn
                như một lẽ tất yếu bởi nó tốt cho sức khỏe và thú vị hơn nhiều
                so với những hương vị đơn giản của cà phê truyền thống. Cà phê ở
                thời điểm hiện tại đang rất tốt nhưng nó sẽ không dừng lại ở
                đây. Và chắc chắn nó sẽ còn tiếp tục tiến xa hơn trong tương
                lai.
              </p>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default HomeBrew;
