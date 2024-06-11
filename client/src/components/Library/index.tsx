import { Link } from "react-router-dom"
import HomeBrew from "./HomeBrew"
import Introduce from "./Introduce"
import SubIntroduce from "./SubIntroduce"
import { Breadcrumb } from "antd"


const Main = () => {
  return (
    <div className="py-6 mt-9">
      <center><h1 className="font-bold text-6xl">THƯ VIỆN CÀ PHÊ CỦA BẠN</h1></center>
      <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Trang Chủ</Link>,
            },
            {
              title: <p>Thư Viện Cà Phê</p>,
            },
          ]}
          style={{ fontSize: "20px", marginLeft: "42%" }}
        />
      <Introduce/>
      <SubIntroduce/>
      <HomeBrew/>
    </div>
  )
}

export default Main
