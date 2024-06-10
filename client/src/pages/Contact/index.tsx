import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainContact from '../../components/Contact/MainContact'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <Header id="4"/>
        <div className="px-64 py-3">
        <center className="font-bold text-2xl">Liên hệ</center>
        <Breadcrumb
          items={[
            {
              title: <Link to={"/"}>Trang Chính</Link>,
            },
            {
              title: <p>Liên hệ</p>,
            },
          ]}
          style={{ fontSize: "20px", marginLeft: "42%" }}
        />
        </div>
        <MainContact/>
        <Footer/>
    </div>
  )
}

export default Contact