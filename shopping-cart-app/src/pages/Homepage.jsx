import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import './Homepage.css'

const API_URL = "https://fakestoreapi.com/products"

const Homepage = () => {
  const [loading,setloading] = useState(false);
  const [posts,setposts] = useState([]);
 
  async function fetchproductdata (){
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
     // console.log(data);
      setposts(data);
      
    } catch (error) {
      console.log(error);
      setposts([]);
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchproductdata();
  },[]);

  return (
    <div className=' flex justify-center items-center h-full'> {
         loading ? (
           <div className="flex items-center justify-center h-screen">
            <div className="custom-loader"></div>
           </div>

) : (
  <div className='grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-x-5 space-y-10 min-h-[80vh]'>
    {posts.length > 0 ? (
      posts.map((post) => <Product post={post} key={post.id} />)
    ) : (
      <div className="flex justify-center items-center">
        <p>No data found</p>
      </div>
    )}
  </div>
)
}
     
   </div>
  );
}

export default Homepage
