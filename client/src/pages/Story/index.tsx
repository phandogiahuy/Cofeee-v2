import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Story/Banner'
import ForUs from '../../components/Story/ForUs'
import Timelines from '../../components/Story/Timeline'
import { FloatButton } from 'antd'
import Main from '../../components/Story'

const Story = () => {
  return (
    <div className='flex flex-col' >
      <Header id="1"  />
      <Main/>
      <Footer/>
      <FloatButton.BackTop style={{ marginBottom: "5%" }}/>
    </div>
  )
}

export default Story