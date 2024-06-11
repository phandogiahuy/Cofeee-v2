import { Breadcrumb, Button, Divider, Image } from "antd";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="py-14 px-60 ]">
      <div className="flex  items-center flex-1 ">
        <div className="mr-24">
          <h1 className="font-bold text-6xl">HƯỚNG DẪN CÁCH PHA </h1>
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>Trang Chủ</Link>,
              },
              {
                title: <Link to={"/library"}>Thư Viện Cà Phê</Link>,
              },
              {
                title: <p>Hướng Dẫn Cách Pha</p>,
              },
            ]}
            style={{ fontSize: "20px" }}
          />
        </div>
        <p className="text-xl  flex-1">
          Trong pha chế mỗi sự kết hợp có thể tạo nên những note hương đáng giá,
          nhưng sự sáng tạo nào cũng đều dựa trên nền tảng nguyên tắc. Cùng
          Flusso kiến tạo nên những công thức pha chế tuyệt vời ngay chính gian
          bếp, cửa hàng của bạn!
        </p>
      </div>
      <div className="mt-12">
        <Image src="/library/Brew/bg1.jpg" />
      </div>
      <div className="py-20 flex flex-wrap justify-between items-baseline gap-y-10">
        <div>
          <Image src="/library/Brew/syphon.jpg" width={425} />
          <h1 className="font-semibold text-2xl">SIPHON</h1>
          <Divider />
          <button>
            <Link
              to={"https://www.youtube.com/watch?v=eIr5qfIxmJU"}
              className="text-sm font-bold hover:opacity-20"
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
        <div>
          <Image src="/library/Brew/phin.jpg" width={425} />
          <h1 className="font-semibold text-2xl">PHIN</h1>
          <Divider />
          <button>
            <Link
              to={"https://www.youtube.com/watch?v=hdNIzHvuqEg"}
              className="text-sm font-bold hover:opacity-20 "
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
        <div>
          <Image src="/library/Brew/es.jpg" width={425} />
          <h1 className="font-semibold text-2xl">ESPRESSO</h1>
          <Divider />
          <button>
            <Link
              to={"https://www.youtube.com/watch?v=-WWYqiolECk"}
              className="text-sm font-bold hover:opacity-20"
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
        <div>
          <Image src="/library/Brew/french.jpg" width={425} />
          <h1 className="font-semibold text-2xl">FRENCH PRESS</h1>
          <Divider />
          <button>
            <Link
              to={"https://www.youtube.com/watch?v=mVtwpbeCZAo"}
              className="text-sm font-bold hover:opacity-20"
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
        <div>
          <Image src="/library/Brew/cold.jpg" width={425} />
          <h1 className="font-semibold text-2xl">COLD BREW</h1>
          <Divider />
          <button>
            <Link
              to={"https://www.youtube.com/watch?v=CMkJaSh8dQ8"}
              className="text-sm font-bold hover:opacity-20"
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
        <div>
          <Image src="/library/Brew/pour.jpg" width={425} />
          <h1 className="font-semibold text-2xl">POUR OVER</h1>
          <Divider />
          <button className="">
            <Link
              to={"https://www.youtube.com/watch?v=VuM_A0ovB4o"}
              className="text-sm font-bold hover:opacity-20"
            >
              ĐỌC THÊM
            </Link>
          </button>
        </div>
      </div>
      <Divider />
      <div className="flex justify-center items-center">
        <div className="w-[40%] mr-11">
          <h1 className="text-3xl font-bold text-green-700">ĐÀO TẠO CHUYÊN SÂU</h1>
          <p className="my-7 text-amber-800 font-medium">
            Bạn đã xem hết hướng dẫn công thức pha chế của chúng tôi nhưng vẫn
            chưa thỏa mãn niềm đam mê sáng tạo trong lĩnh vực pha chế cà phê mà
            bạn yêu thích? Thật tuyệt vời, chắc hẳn bạn đang có cho mình rất
            nhiều ý tưởng mới mẻ và nhiều dự định trong tương lai. Và nếu bạn
            đang gặp khó khăn trong việc hiện thực hóa từng ý tưởng đó, đừng
            ngần ngại chia sẻ với chúng tôi. Tại Flusso, chúng tôi không ngại
            chia sẻ toàn bộ kiến thức từ pha chế, vận hành, nhân xanh, thử nếm,
            rang và đánh giá chất lượng cà phê.
          </p>
          <Button style={{fontSize:"15px",width:"100%",backgroundColor:"#937031",fontWeight:"500",color:"white"}} >ĐỌC THÊM</Button>
        </div>
        <div className="w-[60%]">
          <Image src="/library/Brew/bg2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Main;
