"use server"
import ConnectDb from "../api/db"
import user from "../api/models/user"

export async function  signup(formdata){
   
   await ConnectDb()
    try{
    const name  = formdata.get("name")
    const password  = formdata.get("password")
    const email  = formdata.get("email")
    const newperson = new user({ "name" : name, "email": email, "password" : password }); // Correct instantiation
    await newperson.save()// Call the save method
    console.log("Data saved successfully");
    return {
        result : "success"
    }
    
    }catch(err){
      
      return {
        result : "fail"
    }
    }
    //redirect('/auth/login')
  };