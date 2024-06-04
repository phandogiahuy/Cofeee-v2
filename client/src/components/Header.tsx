import { Link } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo"></div>
        <nav className="flex justify-around">
          <div className="">
            {" "}
            <Link to="/" className="text-gray-800 hover:text-black">
              TRANG CHỦ
            </Link>{" "}
          </div>
          <div className="">
            {" "}
            <Link
              to="/cau-chuyen-ca-phe"
              className="text-gray-800 hover:text-black"
            >
              CÂU CHUYỆN CÀ PHÊ
            </Link>{" "}
          </div>
          <div className="link-wrapper">
            {" "}
            <Link to="/dung-cu" className="text-gray-800 hover:text-black">
              DỤNG CỤ
            </Link>{" "}
          </div>
          <div className="link-wrapper">
            {" "}
            <Link to="/dao-tao" className="text-gray-800 hover:text-black">
              ĐÀO TẠO
            </Link>{" "}
          </div>
          <div className="link-wrapper">
            {" "}
            <Link to="/thu-vien" className="text-gray-800 hover:text-black">
              THƯ VIỆN
            </Link>{" "}
          </div>
          <div className="link-wrapper">
            {" "}
            <Link to="/lien-he" className="text-gray-800 hover:text-black">
              LIÊN HỆ
            </Link>{" "}
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <SearchOutlined className="text-gray-800" />
          <ShoppingCartOutlined className="text-gray-800" />
          <UserOutlined className="text-gray-800" />
        </div>
      </div>
    </header>
  );
};

export default Header;
