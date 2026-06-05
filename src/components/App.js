
import React, {useState} from "react";
import './../styles/App.css';

const productsArr = ['Samsung Galaxy Fold 4', 'Iphone 14 Pro','Pixel 5', 'Mi note 6','FireStick', 'OnePlus Nord'];

const App = () => {
  const [cartProducts, setCartProducts] = useState([])

  function handleClick(idx) {
    if (!cartProducts.includes(idx)) {
      setCartProducts(prev => [...prev, idx])
    }
  }

  function handleDelete(idx) {
    setCartProducts(cartProducts.filter(val => val !== idx))
  }

  return (
    <div>
      <h1>List of Products</h1>
      <div className="container">
        {productsArr.map((item, idx) => (
          <div className="item" key={idx}>
            <p>{item}</p>
            <button onClick={() => handleClick(idx)}>Add Item</button>
          </div>
        ))}
      </div>
      <hr />
      <div className="cart">
        <h1>Cart</h1>
        {!cartProducts.length
          ? <p style={{ color: 'red', margin: '20px' }}>There are no items in the cart</p>
          : <ul>
              {cartProducts.map(idx => (
                <li className="cart-item" key={idx}>
                  {productsArr[idx]}
                  <button onClick={() => handleDelete(idx)}>{cartProducts.length}</button>
                </li>
              ))}
            </ul>
        }
      </div>
    </div>
  )
}

export default App
