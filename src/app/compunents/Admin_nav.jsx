import React from 'react'
import Link from 'next/link'

const Admin_nav = () => {
  
    return (
        <div className=' flex flex-row   bg-black w-full'>
            <div className=' items-end  w-full' >
            <button 
            type="submit"
            className=" w-40  py-2 px-4  m-6 float-end bg-yellow-500   mr-5 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Link href={"/addProducts"} className="">Add Products</Link>
          </button></div>
    
          
        </div>
  )
}

export default Admin_nav
