import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Part1 from "../../../components/Story/Shop/Part1";
import Part2 from "../../../components/Story/Shop/Part2";
import { Breadcrumb, FloatButton } from "antd";
import Main from "../../../components/Story/Shop";

const Shop = () => {
  return (
    <div>
      <Header id="1" sub="3" />     
      <Main/>
      <Footer />
      <FloatButton.BackTop style={{ marginBottom: "5%" }}/>
    </div>
  );
};

export default Shop;
