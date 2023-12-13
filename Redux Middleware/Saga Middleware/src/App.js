import './App.css'
import addToCart from './redux/action'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const product = {
    name: 'I Phone',
    type: 'phone',
    price: '100000',
    color: 'red',
  }
  return (
    <div className='App'>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default App
