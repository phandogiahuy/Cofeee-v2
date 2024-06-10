
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

import {  FloatButton } from 'antd'
import Main from '../../../components/Story/Roaster'

const Roaster = () => {
  return (
    <div>
        <Header id="1" sub="2" />
        <Main/>
        <Footer/>
        <FloatButton.BackTop style={{ marginBottom: "5%" }}/>
    </div>
  )
}

export default Roaster