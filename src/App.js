// An example of a small shopping cart which is used to add and 
// remove items and display the total number of items in the cart

import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = () => {
    setCartItems([...cartItems, { id: Date.now() }]);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return(
    <div className="App">
      <h1>Simple Shopping Cart</h1>
      <button onClick={addItem}>Add Item</button>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <p>Item ID: {item.id}</p>
            <button onClick={() => removeItem(item.id)}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
