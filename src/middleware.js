import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation"

export function middleware(req,res) {
  if (req.nextUrl.pathname.startsWith("/productDetails")) {
    if (req.cookies.get("auth")) {
      return NextResponse.next();
    }else{
        return NextResponse.redirect((new URL("/auth/login",req.url)))
    }
  }
}
