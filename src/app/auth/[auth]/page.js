
"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from "next/navigation";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { login, signup } from '@/app/serverActions/actions';


const ClientSingnUp = async (formdata)=>{
const res =  await signup(formdata)
if (res.result== "success") {
  toast.success('Sign up success', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: undefined,
    });
    
}else{
  toast.error(res.result, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: undefined,
    });
}

}


const ClientLoginUp = async (formdata)=>{
  const res =  await login(formdata)
  if (res.result== "success") {
    toast.success('login  success go to home page now', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: undefined,
      });
      setTimeout(()=>{
        redirect("/")
      },50)
      
  }else{
    toast.error(res.result, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: undefined,
      });
  }
  
  }



const  SignupForm =  ({params}) => {
  
    return (
    <div   className="flex items-center justify-center  mb-72 mt-20">
      <div className="bg-white rounded-lg  p-6 w-full max-w-md">
        

        <h2 className="text-xl font-bold mb-4 text-center">{params.auth== 'login'? 'Log In': "Sign Up"}</h2>
        <form className="space-y-4" action={params.auth == 'login'? ClientLoginUp : ClientSingnUp}>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text" name='name'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email" name='email' 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password" name='password'
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {params.auth!="login" && <input name='isAmin' type='checkbox' className=' mx-5'/>}
          {params.auth != "login" && <label>Signup As Admin</label>}
          <div>
          <button
        type="submit"
        className="w-full py-2 px-4  bg-yellow-500  text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Summit
      </button>
      
    
           <ToastContainer/>
          </div>
        </form>
     
      </div>
    </div>
  );
};

export default SignupForm;
