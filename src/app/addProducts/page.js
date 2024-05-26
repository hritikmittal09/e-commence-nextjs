import React from 'react'
import { AddProduct } from '../serverActions/actions'

function page() {
  return (
    <div>
      <div   className="flex items-center justify-center  mb-72 mt-20">
      <div className="bg-white rounded-lg  p-6 w-full max-w-md">
        

        <h2 className="text-xl font-bold mb-4 text-center">Add Products</h2>
        <form className="space-y-4" action= {AddProduct} >

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image(web link )
            </label>
            <input
              type="text" name='img'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              name
            </label>
            <input
              type="text" name='name' 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              description
            </label>
            <input
              type="text" name='dis'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text" name='price'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
          <button
        type="submit"
        className="w-full py-2 px-4  bg-yellow-500  text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Product
      </button>
      
    
           
          </div>
        </form>
     
      </div>
    </div>
    </div>
  )
}

export default page
