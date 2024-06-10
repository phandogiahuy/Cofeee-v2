import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-100 font-sans font-bold h-fit  ">
      <div className="flex justify-around  items-center h-28">
        <div>
          <p>FLUSSO VIETNAM SPECIALTY COFFEE</p>
        </div>
        <div>
          <p className="text-sm">
            <EnvironmentOutlined style={{ fontSize: "20px" }} /> 30/6 đường 5
            phường Trường Thạnh, TP Thủ Đức, TP.HCM
          </p>
          <p className="text-sm">
            {" "}
            <MailOutlined style={{ fontSize: "20px" }} />{" "}
            phandogiahuy2000@gmail.com
          </p>
          <p className="text-sm">
            {" "}
            <PhoneOutlined style={{ fontSize: "20px" }} /> 0707323959
          </p>
        </div>
        <div className="space-x-8">
          <Link
            to={"https://www.facebook.com/giahuy.6200/"}
            className="hover:text-blue-500 text-lg"
          >
            <FacebookOutlined style={{ fontSize: "30px" }} />{" "}
          </Link>
          <Link
            to={"https://www.facebook.com/giahuy.6200/"}
            className="hover:text-blue-500 text-lg"
          >
            <InstagramOutlined style={{ fontSize: "30px" }} />{" "}
          </Link>
          <Link
            to={"https://www.facebook.com/giahuy.6200/"}
            className="hover:text-blue-500 text-lg"
          >
            <YoutubeOutlined style={{ fontSize: "30px" }} />{" "}
          </Link>
        </div>
      </div>
      <div className="bg-slate-200  flex justify-center items-center">
        Copyright ©2024 Phan Do Gia Huy
      </div>
    </footer>
  );
};

export default Footer;
