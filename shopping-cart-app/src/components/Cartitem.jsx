import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/Cartslice';
import toast from 'react-hot-toast';


const Cartitem = ({item,itemindex}) => {

  const dispatch = useDispatch();
  function removefromcart(){
    dispatch(remove(item.id));
    toast.error("item removed");
  }
  
  return (
    <div className='flex border-b w-[70%] p-1 mt-6 mb-5 space-x-6'>

      <div className='h-[180px]'><img src = {item.image}className='w-full h-full' /></div>

      <div className='flex flex-col space-y-3'>
        <div className='text-gray-800 font-bold text-lg'>{item.title}</div>
        <div className='text-gray-500 text-sm'>{item.description.slice(0,50) + "..."}</div>
        <div className='flex justify-around items-center'>
           <div className='text-green-800 font-bold text-lg'>${item.price}</div>
           <div className='relative h-[40px] w-[40px] rounded-full bg-red-600 flex items-center justify-center'>
              <MdDelete className='h-[20px] w-[20px] absolute text-white' onClick={removefromcart}/>
           </div>
          
         
        </div>
      </div>
      
      
    </div>
  )
}

export default Cartitem
