import Main from '../../components/Home/Main'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { FloatButton } from 'antd'


const Home = () => {
  return (
    <div className='flex flex-col' >
      <Header/>
      <Main/>
      <Footer/>
      <FloatButton.BackTop style={{ marginBottom: "5%" }}/>
    </div>
  )
}

export default Home