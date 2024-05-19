import Image from "next/image";
import ProductCard from "./compunents/productCard";
//import Products from "./api/products";

import product from "./api/models/prodcts";
import ConnectDb from "./api/db";
import { revalidatePath } from "next/cache";



export default async function  Home() {
  revalidatePath("/")
 await ConnectDb()
  const Products =  await product.find()
  
  
   

  
  return (
   <>
   <main className="flex flex-row gap-20 mt-10 flex-wrap" >
    {Products.map((Product, index )=>{
      return <ProductCard imageUrl={Product.image} productId = {Product._id.toString()} title={Product.title} description={Product.price} key={index} />
    })}
   

   </main>
   </>
    
  );
}
