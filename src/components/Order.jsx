import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Order = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1> Order Placement Page</h1>
      <div>
        <h2>Menu</h2>
        <div>
          <img src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" alt="Item" width={450} />
          <Typography variant='h5'>Biriyani</Typography>
          <p>$170.00</p>
          <Button onClick={() => addItemToCart({ name: 'Item Name', price: 10.00 })} variant='contained'color='error' >
            Add to Cart
          </Button>    <Button variant='contained'>Buy Now</Button>
        </div>
        <br /><br />

        <div>
          <img src="https://img.etimg.com/thumb/msid-80475957,width-640,height-480,imgsize-772499,resizemode-4/pizza.jpg" alt="Item" width={450}/>
          <Typography variant='h5'>Pizza</Typography>
          <p>$250.00</p>
          <Button onClick={() => addItemToCart({ name: 'Item Name', price: 10.00 })} variant='contained' color='error'>
            Add to Cart
          </Button>&nbsp;    <Button variant='contained'>Buy Now</Button>
        </div>
        <br /><br /><br /><br />


        {/* Add more menu items here */}
      </div>
      {/* <div>
        
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => removeItemFromCart(index)}>Remove</button>
          </div>
        ))}
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <button disabled={cart.length === 0} onClick={() => alert('Buying not implemented yet')}>
          Buy Now
        </button>
      </div> */}
      
    </div>
  );
};

export default Order;