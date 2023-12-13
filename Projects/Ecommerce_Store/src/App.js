import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Product from './component/Product'
import Cart from './component/Cart'

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
