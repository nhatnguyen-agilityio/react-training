import './App.css'
import Copyright from './components/copyright'
import FancyText from './components/fancyText'
import InspirationGenerator from './components/inspirationGenerator'
import Product from './components/Product'
// import MyButton from './components/button'
import Profile from './components/profile'
// import Products from './components/products'

const user = {
  name: 'John Doe',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function App() {
  return (
    <>
    <h1>Welcome to my app</h1>
    {/* <MyButton /> */}
    {/* <Profile />
    <Products /> */}
    {/* <Product /> */}
    {/* <Profile name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize} /> */}

    <FancyText title text="Welcome to my app!!!" />
    <InspirationGenerator>
      <Copyright year={2025} />
    </InspirationGenerator>
    </>
  )
}

export default App
