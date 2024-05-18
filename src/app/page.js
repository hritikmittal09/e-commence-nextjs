import Image from "next/image";
import ProductCard from "./compunents/productCard";
//import Products from "./api/products";
import ConnectDb from "./api/db";
import product from "./api/models/prodcts";



export default async function  Home() {
  ConnectDb()
  const Products =  await product.find({})
  
   

  
  return (
   <>
   <main className="flex flex-row gap-20 mt-10 flex-wrap" >
    {Products.map((Product, index )=>{
      return <ProductCard imageUrl={Product.image} title={Product.title} description={Product.dis} key={index}/>
    })}
   

   </main>
   </>
    
  );
}
