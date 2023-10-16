import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/login", "/register", "/"];
const protectedRoutes = ["/services", "/cart"];
const rolesRedirect: Record<string, unknown> = {
  super_admin: "http://localhost:3000/super-admin",
  admin: "http://localhost:3000/admin",
  tourist: "http://localhost:3000/tourist",
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }

  const role = token?.role as string;
  if (
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "super_admin" && pathname.startsWith("/super-admin")) ||
    (role === "tourist" && pathname.startsWith("/tourist"))
  ) {
    return NextResponse.next();
  }

  if (
    (role === "tourist" && protectedRoutes.includes(pathname)) ||
    (role === "super_admin" && protectedRoutes.includes(pathname)) ||
    (role === "admin" && protectedRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    // Handle access to the root route after logging in.
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect("http://localhost:3000");
}

export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/login",
    "/register",
    //tourist routes
    "/cart",
    "/services",
    "/tourist/:page*",
    //super admin routes
    "/super-admin/:page*",
    //admin routes
    "/admin/:page*",
  ],
};
