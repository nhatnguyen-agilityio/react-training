import './App.css'
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
    <Profile name={user.name} imageUrl={user.imageUrl} imageSize={user.imageSize} />
    </>
  )
}

export default App
