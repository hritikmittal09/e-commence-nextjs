import Image from "next/image";
import ProductCard from "./compunents/productCard";
import Products from "./api/products";



export default function Home() {
  return (
   <>
   <main className="flex flex-row gap-20 mt-10 flex-wrap" >
    {Products.map((Product, index )=>{
      return <ProductCard imageUrl={Product.imageUrl} title={Product.title} description={Product.dis} key={index}/>
    })}
   

   </main>
   </>
    
  );
}
