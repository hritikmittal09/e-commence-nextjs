"use server";
import { cookies } from "next/headers";
import  Jwt  from "jsonwebtoken";
import ConnectDb from "../api/db";
import user from "../api/models/user";
import product from "../api/models/prodcts";
import { redirect } from "next/navigation";


export async function signup(formdata) {
  await ConnectDb();
  try {
    const name = formdata.get("name");
    const password = formdata.get("password");
    const email = formdata.get("email");
    const isAdmin = formdata.get("isAmin")
    const existUser = await user.findOne({ email: email });
    if (existUser) {
      return {
        result: "User already exist",
      };
    }
    const newperson = new user({
      name: name,
      email: email,
      password: password,
      isAdmin : isAdmin == 'on'? true : false
    });
    console.log(isAdmin); // Correct instantiation
    await newperson.save(); // Call the save method
    console.log("Data saved successfully");
    return {
      result: "success",
    };
  } catch (err) {
    return {
      result: "something went wrong",
    };
  }
  //redirect('/auth/login')
}

export async function login(formdata) {
  await ConnectDb();
  try {
    const name = formdata.get("name");
    const password = formdata.get("password");
    const email = formdata.get("email");
    const existUser = await user.findOne({ email: email });
    const ispassMatch = password == existUser.password
    if (existUser && ispassMatch) {
      console.log("userid",existUser._id.toString());
      const paylod = {
        userId : existUser._id.toString(),
        isAdmin : existUser.isAdmin
      }
      const option = {
        expiresIn: '1d'
      }
      const authtoken =await Jwt.sign(paylod, process.env.SECRET_KEY)
      cookies().set("auth", authtoken)
      return {
        result: "success",
      };
      
      
    }
  } catch (err) {
    return {
      result: "something went wrong",
    };
  }
  //redirect('/auth/login')
}



 export async function AddProduct(formdata){
 ConnectDb()
 
  const name = formdata.get('name')
  const dis = formdata.get('dis')
  const price = formdata.get('price')
  const img = formdata.get('img')
  const newProduct = new product({"dis" : dis, "price" : price, "image" : img, "title" :name})
  await newProduct.save()
  console.log("product save sucessfully");



 }
