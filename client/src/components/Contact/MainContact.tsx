import { Button, Form, Input } from "antd";

const MainContact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Xử lý logic submit tại đây
  };
  return (
    <div
      style={{ background: "url(/contact/bg.jpg)", backgroundSize: "cover" }}
      className="h-[1000px] flex flex-col px-28 py-7 "
    >
      <div className="flex mt-4 flex-[3]">
        <div className="flex flex-col justify-around  flex-[1] ">
          <h1 className="font-semibold text-2xl">LIÊN HỆ</h1>
          <div>
            <p className="font-medium">Địa chỉ chúng tôi</p>
            <p className="font-semibold">
              Số 09 - BT10, đường Foresa 6D, khu đô thị Tasco, phường Xuân
              Phương, Nam Từ Liêm, Hà Nội
            </p>
          </div>
          <div>
            <p className="font-medium">Email chúng tôi</p>
            <p className="font-semibold">phandogiahuy2000@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Điện thoại</p>
            <p className="font-semibold">0707323959</p>
          </div>
          <div>
            <p className="font-medium">Thời gian làm việc</p>
            <p className="font-semibold">Thứ 2 đến Thứ 7 từ 8h đến 18h</p>
          </div>
        </div>
        <div className="flex-[1]">
          <h1 className="font-semibold text-2xl">GỬI THẮC MẮC CHO CHÚNG TÔI</h1>
          <div className="mt-16  p-3 bg-gradient-to-r shadow-[2px_0px_22px_10px_#4F8BAFC9] from-violet-200 to-pink-200 rounded-xl  ">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Vui lòng nhập tên của bạn!" },
                ]}
              >
                <Input placeholder="Tên của bạn" />
              </Form.Item>
              <div className="flex gap-4">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập email của bạn!",
                    },
                    { type: "email", message: "Email không hợp lệ!" },
                  ]}
                >
                  <Input placeholder="Email của bạn" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại của bạn!",
                    },
                  ]}
                >
                  <Input placeholder="Số điện thoại của bạn" />
                </Form.Item>
              </div>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
              >
                <Input.TextArea rows={4} placeholder="Nội dung" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Gửi cho chúng tôi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="self-start flex-[1] mt-2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.0623087980277!2d106.81793823791973!3d10.82761548825004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317520d53635ae13%3A0x3559353681e16316!2zMzAvNCDDjWNoIFRo4bqhbmgsIEtodSBwaOG7kSwgUXXhuq1uIDksIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1718020263337!5m2!1sen!2s"
          width="800"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        >

        </iframe>
      </div>
    </div>
  );
};

export default MainContact;
