import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ItemCategory = () => {
  const elementRef = useRef<null|any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elementRef.current.classList.add("animate-slideUpAndIn");
          observer.unobserve(elementRef.current); // Ngừng theo dõi sau khi animation hoàn thành
        }
      },
      { threshold: 0 } // Kích hoạt khi 50% phần tử hiển thị trong viewport
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="flex justify-evenly mt-24 " ref={elementRef}>
      <Row gutter={[24, 8]}>
        <Col
          className="gutter-row"
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Link to={"/speciality"}>
            <Card
              hoverable
              style={{ maxWidth: 930 }}
              cover={<img alt="special" src="/special.jpg" />}
            >
              <Meta
                title="CÀ PHÊ SPECIALITY"
                description="Những hạt cà phê với điểm số cao và dải hương vị cực kỳ đáng giá, đến từ những vùng trồng nổi tiếng nhất trên thế giới."
                style={{ fontWeight: "bold", fontSize: "16px" }}
              />
            </Card>
          </Link>
        </Col>
        <Col
          className="gutter-row"
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Link to={"/vietnam"}>
            <Card
              hoverable
              style={{ maxWidth: 930 }}
              cover={<img alt="vn" src="/vn.jpg" />}
            >
              <Meta
                title="CÀ PHÊ VIỆT NAM"
                description="Cũng là những hạt cà phê vô cùng xuất sắc. Nhưng tuyệt vời nhất là nó được trồng trên chính mảnh đất của chúng ta."
                style={{ fontWeight: "bold", fontSize: "16px" }}
              />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ItemCategory;
