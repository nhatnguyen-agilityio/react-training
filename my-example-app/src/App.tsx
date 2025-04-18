import './App.css'
import Copyright from './components/copyright'
import FancyText from './components/fancyText'
import InspirationGenerator from './components/inspirationGenerator'
import Product from './components/Product'
// import MyButton from './components/button'
import Profile from './components/profile'
// import Products from './components/products'
import Contact from './components/Contact'
import EffectExample from './components/EffectExample'
import ChatRoom from './components/ChatRoom'
import Accordion from './components/Accordtion'
import Toolbar from './components/Toolbar'
import ContextExample from './components/ContextExample'

const user = {
  name: 'John Doe',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function App() {
  return (
    <>
    {/* <MyButton /> */}
    {/* <Profile />
    <Products /> */}
    {/* <Product /> */}
    {/* <Profile name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize} /> */}

    {/* <FancyText title text="Welcome to my app!!!" />
    <InspirationGenerator>
      <Copyright year={2025} />
    </InspirationGenerator>
    </> */}
      {/* <Contact /> */}
      {/* <EffectExample /> */}
      {/* <ChatRoom /> */}
    {/* <Accordion /> */}
    {/* <Toolbar /> */}
    <ContextExample />
    </>
  )
}

export default App
