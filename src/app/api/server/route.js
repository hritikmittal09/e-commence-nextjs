import { NextResponse } from "next/server"
import ConnectDb from "../db.js";

export  async function GET(){ 
try {
    ConnectDb()
    
  return  NextResponse.json({
       status : "Successfully conncted to db"
    })
} catch (error) {
    console.log(error);
}
}