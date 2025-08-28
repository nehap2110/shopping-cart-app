import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-hot-toast'
import { add,remove } from '../redux/slices/Cartslice'

const Product = ({post}) => {
  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  function addtocart(){
    dispatch(add(post));
    toast.success("add items to cart");
  }
  function removeitem(){
    dispatch(remove(post.id));
    toast.error("item removed");
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl
    '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
            {post.title}
        </p>
      </div>
      <div> 
        <p className='w-40 text-gray-400 font-normal text-[12px] text-left'>
            {post.description.slice(0,50) + "..."}
        </p>
        
      </div>
      <div className='h-[180px]'>
        <img src = {post.image} className='w-full h-full'/>
      </div>

      <div className='flex justify-between gap-11 items-center mt-5 w-full '>

        <div className='text-green-700 text-lg font-semibold '>${post.price}</div>
      <div className='outline border-blue-900 border-1 text-sm font-semibold  rounded-full py-1 px-1.5 hover:text-white hover:bg-blue-950 transition duration-300 ease-in'>
        {
           cart.some((p)=>p.id === post.id) ?
           (<button onClick={removeitem} className='uppercase'>Remove Item</button>):
           (<button onClick={addtocart} className='uppercase'>Add Item</button>)
        }
    </div>
      
      </div>
   
     

    </div>
  )
}

export default Product
