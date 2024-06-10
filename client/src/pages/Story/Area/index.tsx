import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import { FloatButton } from "antd";

import Main from "../../../components/Story/Area";
const Area = () => {
  return (
    <div>
      <Header id="1" sub="1" />
      <Main />
      <Footer />
      <FloatButton.BackTop style={{ marginBottom: "5%" }} />
    </div>
  );
};

export default Area;
