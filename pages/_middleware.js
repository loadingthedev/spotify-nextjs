import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //token will exit if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  // console.log(pathname);

  // if (pathname === "/login" && token) {
  //   return NextResponse.redirect("/");
  // }
  //Allow the user to request if the user is true..
  // 1.It is a request fro next auth session & provider fetching
  // 2.token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //Redirect them to login page user don't have token and requesting to protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
