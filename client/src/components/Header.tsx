import { Link } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Affix, Popover } from "antd";

interface HeaderProps {
  id: string;
  sub?: string;
}

const Header = ({ id, sub }: HeaderProps) => {
  const contentStory = (
    <div className="text-base font-medium px-5">
      <p>
        <Link
          to={"/story/area"}
          className={
            id === "1" && sub === "1"
              ? `text-blue-700 font-bold text-base`
              : ` text-base`
          }
        >
          VÙNG NGUYÊN LIỆU
        </Link>
      </p>
      <p className="my-4">
        <Link
          to={"/story/roaster"}
          className={
            id === "1" && sub === "2"
              ? `text-blue-700 font-bold text-base`
              : ` text-base`
          }
        >
          XƯỞNG RANG FLUSSO
        </Link>
      </p>
      <p>
        <Link
          to={"/story/shop"}
          className={
            id === "1" && sub === "3"
              ? `text-blue-700 font-bold text-base`
              : ` text-base`
          }
        >
          QUÁN CÀ PHÊ FLUSSO
        </Link>
      </p>
    </div>
  );
  const contentLibrary = (
    <div className="text-base font-medium px-5">
      <p>
        <Link
          to={"/library/cach-pha"}
          className={
            id === "3" && sub === "4"
              ? `text-blue-700 font-bold text-base`
              : ` text-base`
          }
        >
          HƯỚNG DẪN CÁCH PHA
        </Link>
      </p>
      <p className="my-2">
        <Link
          to={"/library/lam-chu"}
          className={
            id === "3" && sub === "5"
              ? `text-blue-700 font-bold text-base`
              : ` text-base`
          }
        >
          LÀM CHỦ QUÁN CÀ PHÊ
        </Link>
      </p>
    </div>
  );

  return (
    <div className="  ">
      <Affix>
        <header className="bg-slate-100 py-4 font-sans">
          <div className="container mx-auto flex justify-between items-center">
            <div className="logo">
              <img src="/logo.jpg" alt="Fuso Logo" className="h-10" />
            </div>
            <nav className="flex space-x-10 font-bold">
              <Link to="/" className="hover:text-orange-300 text-lg">
                Trang Chủ
              </Link>
              <Popover placement="bottom" content={contentStory} arrow={true}>
                <Link
                  to="/story"
                  className={
                    id === "1"
                      ? `text-orange-600 font-bold text-xl`
                      : `hover:text-orange-300 text-lg`
                  }
                >
                  Câu Chuyện Cà Phê
                </Link>
              </Popover>

              <Link
                to="/product"
                className={
                  id === "2"
                    ? `text-orange-600 font-bold text-xl`
                    : `hover:text-orange-300 text-lg`
                }
              >
                Sản Phẩm
              </Link>
              <Popover placement="bottom" content={contentLibrary} arrow={true}>
                <Link
                  to="/library"
                  className={
                    id === "3"
                      ? `text-orange-600 font-bold text-xl`
                      : `hover:text-orange-300 text-lg`
                  }
                >
                  Thư viện
                </Link>
              </Popover>
              <Link
                to="/contact"
                className={
                  id === "4"
                    ? `text-orange-600 font-bold text-xl`
                    : `hover:text-orange-300 text-lg`
                }
              >
                Liên Hệ
              </Link>
              <Link
                to="/training"
                className={
                  id === "5"
                    ? `text-orange-600 font-bold text-xl`
                    : `hover:text-orange-300 text-lg`
                }
              >
                Đào Tạo
              </Link>
            </nav>
            <div className="flex items-center space-x-8">
              <SearchOutlined style={{ fontSize: "24px" }} />
              <ShoppingCartOutlined style={{ fontSize: "24px" }} />
              <UserOutlined style={{ fontSize: "24px" }} />
            </div>
          </div>
        </header>
      </Affix>
    </div>
  );
};

export default Header;
