
import React, {useState} from "react";
import './../styles/App.css';

const productsArr = ['Samsung Galaxy Fold 4', 'Iphone 14 Pro','Pixel 5', 'Mi note 6','FireStick', 'OnePlus Nord'];

const App = () => {
  const [cartProducts, setCartProducts] = useState([])
  function handleClick(val){
    if(!cartProducts.includes(val)){
      setCartProducts(prev => [...prev, val])
    }    
  }
  function handleDelete(val){
    setCartProducts(cartProducts.filter(value => value !== val))
  }

  return (
    <div>
        <h1>List of Products</h1>
        <div className="container">
          {
            productsArr.map(item => <div className="item" key={item}>{item}<button className="add-btn" onClick={() => handleClick(item)}>Add Item</button></div>)
          }
        </div>
        <hr />
        <h1>Cart</h1>
        <div className="cart">
          {!cartProducts.length ? <p style={{color:'red', margin:'20px'}}>There are no items in the cart</p> 
          : cartProducts.map(item => {
                return <div className="cart-item" key={item}>{item}<button onClick={() => handleDelete(item)}>Remove</button></div>
              })}
        </div>
    </div>
  )
}

export default App
