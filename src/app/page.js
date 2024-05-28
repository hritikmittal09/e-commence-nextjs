import Image from "next/image";
import ProductCard from "./compunents/productCard";
//import Products from "./api/products";

import product from "./api/models/prodcts";
import ConnectDb from "./api/db";
import { revalidatePath } from "next/cache";
import { isAdminAuth } from "./serverActions/actions";
import Admin_nav from "./compunents/Admin_nav";



export default async function  Home() {
  revalidatePath("/")
 await ConnectDb()
  const Products =  await product.find()
  
  
  
   

  
  return (
   <>
   {await isAdminAuth() && <Admin_nav/>}
   <main className="flex flex-row gap-20 mt-10 flex-wrap  mb-52" >
    {Products.map((Product, index )=>{
      return <ProductCard imageUrl={Product.image} productId = {Product._id.toString()} title={Product.title} description={Product.price} key={index} />
    })}
   

   </main>
   </>
    
  );
}
