
import React, {useState} from "react";
import './../styles/App.css';

const productsArr = ['Samsung Galaxy Fold 4', 'Iphone 14 Pro','Pixel 5', 'Mi note 6','Firestick', 'OnePlus Nord'];

const App = () => {
  const [cartProducts, setCartProducts] = useState([])
  const [count, setCount] = useState(1)
  function handleClick(val){
    setCartProducts(prev => [...prev, {id: count, product: val}])
    setCount(prev => prev+1)
  }
  function handleDelete(idx){
    setCartProducts(cartProducts.filter(val => val.id !== idx))
  }

  return (
    <div>
        <h1>List of Products</h1>
        <div className="container">
          {
            productsArr.map(item => <div className="item">
                <p>{item}</p>
                <button onClick={() => handleClick(item)}>Add Item</button>
              </div>)
          }
        </div>
        <hr />
        <h1>Cart</h1>
        {!cartProducts.length ? <p style={{color:'red', margin:'20px'}}>There are no items in the cart</p> :
        <ul className="cart">
          {
            cartProducts.map(item => {
              return <li className="cart-item" key={item.id}><p>{item.product}</p><button onClick={() => handleDelete(item.id)}>Remove</button></li>
            })

          }
        </ul>}
    </div>
  )
}

export default App
