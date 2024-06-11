import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainContact from '../../components/Contact'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Main from '../../components/Contact'

const Contact = () => {
  return (
    <div>
        <Header id="4"/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Contact