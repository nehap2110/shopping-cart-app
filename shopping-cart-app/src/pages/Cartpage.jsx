import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Cartitem from '../components/Cartitem'
import { Link } from 'react-router-dom'

const Cartpage = () => {
   const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cart && cart.length > 0) {
      const total = cart.reduce(
        (accumulator, currVal) => accumulator + currVal.price,
        0
      );
      console.log(total);
      setTotalAmount(total);
    } else {
      setTotalAmount(0);
    }
  }, [cart]);
  
  return (
    <div className='w-[70%] mx-auto '>
     {cart && cart.length > 0 ? (
  <div className='flex  mx-auto w-full '>
    {/* Cart Items */}
    <div className='mx-auto w-full'>
      {cart.map((item, index) => (
        <Cartitem key={item.id} itemIndex={index} item={item} />
      ))}
    </div>

    {/* Summary Section */}
    <div className='flex flex-col w-[50%] justify-between mt-6 mb-5'>
      <div >
        <h2 className='text-xl font-bold '>Your Cart</h2>
        <h3 className='text-4xl text-green-800 uppercase font-bold'>Summary</h3>
        <p className='text-xl'>Total items: {cart.length}</p>
      </div>
      <div className='space-y-2.5'>
        <p className='font-bold text-2xl'>Total amount: {totalAmount}</p>
        <button type="button" className='bg-green-900 text-white rounded-full px-2 p-1 text-lg'>Check Now</button>
      </div>
    </div>
  </div>
) : (
  <div className='flex flex-col justify-center items-center space-y-2.5 h-[100vh]'>
    <p className='text-xl font-bold '>Your cart is empty.</p>
    <Link to="/">
      <button type="button" className=' bg-green-900 text-white text-xl rounded-full px-3 py-1'>Shop Now</button>
    </Link>
  </div>
)}

      
    </div>
  )
}

export default Cartpage
