import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <div>
       <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

      <NavLink to = "/">
        <div className='ml-5'>
       <img src="https://tse4.mm.bing.net/th/id/OIP.u-1dWGTM7biu51ZxKpOIiAHaFL?pid=Api&P=0&h=220" className='h-14 rounded-4xl'/>
        </div>
      </NavLink>
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to = '/'>
             <p>Home</p>
          </NavLink>
            <NavLink to='/cart' >
            <div className='relative'>
                <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 && <span className='absolute -top-1 -right-4 bg-green-800 text-xs w-5 h-5  flex justify-center items-center animate-bounce text-white rounded-full'>{cart.length}</span>
              }

            </div>
           
            </NavLink>
            
        </div>
      
    </nav>
    </div>
   
  )
}

export default Navbar
