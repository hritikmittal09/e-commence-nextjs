import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation"
import  Jwt  from "jsonwebtoken"
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

export async function  middleware(req,res) {
  if (req.nextUrl.pathname.startsWith("/productDetails")) {
    if (req.cookies.get("auth")) {
      try {
        const authtoken = req.cookies.get("auth").value.toString();
        const { payload } = await jwtVerify(authtoken, secretKey);
        return NextResponse.next();
        
      } catch (error) {
        return NextResponse.redirect((new URL("/auth/login",req.url)))
        
        
      }
      
    }else{
        return NextResponse.redirect((new URL("/auth/login",req.url)))
    }
  }
}
