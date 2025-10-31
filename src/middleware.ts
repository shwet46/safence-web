import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  if (isAuthPage) {
    if (isAuth) {
      return Response.redirect(new URL("/", req.url));
    }
    return null;
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }

    return Response.redirect(
      new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
    );
  }
}

export const config = {
  matcher: ["/protected/:path*", "/login"],
};