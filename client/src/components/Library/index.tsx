import HomeBrew from "./HomeBrew"
import Introduce from "./Introduce"
import SubIntroduce from "./SubIntroduce"


const Main = () => {
  return (
    <div className="py-6 mt-9">
      <center><h1 className="font-bold text-6xl">THƯ VIỆN CÀ PHÊ CỦA BẠN</h1></center>
      <Introduce/>
      <SubIntroduce/>
      <HomeBrew/>
    </div>
  )
}

export default Main
