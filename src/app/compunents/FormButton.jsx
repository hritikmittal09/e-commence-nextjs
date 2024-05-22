"use client"
import React from 'react'
import {useFormStatus} from "react-dom"

const FormButton = () => {
  const status = useFormStatus()
  
  
  return (
    <div>
        
      <button
        type="submit"
        className="w-full py-2 px-4  bg-yellow-500  text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Summit
      </button>
    
      
    </div>
  )
}

export default FormButton


 