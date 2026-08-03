import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtUtils } from "./utils/jwt";
import { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTES = ['/login', '/signup']
const PUBLIC_ROUTES = ['/', '/about', '/properties']

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname

  const accessToken = request.cookies.get("accessToken")?.value
  const refreshToken = request.cookies.get("refreshToken")?.value

  const decodeAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null

  const decodeRefreshToken = refreshToken
    ? jwtUtils.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string)
    : null

  let userRole = null
  if (decodeAccessToken?.success && decodeAccessToken.data) {
    userRole = (decodeAccessToken.data as JwtPayload).role
  }

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/")
  )

  if (accessToken && decodeAccessToken?.success && isAuthRoute) {
    if (userRole === 'TENANT') return NextResponse.redirect(new URL('/tenant', request.url))
    if (userRole === 'LANDLORD') return NextResponse.redirect(new URL('/landlord', request.url))
    if (userRole === 'ADMIN') return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (pathName.startsWith('/tenant') && userRole !== 'TENANT') {
    return NextResponse.redirect(new URL('/not-found', request.url))
  } else if (pathName.startsWith('/landlord') && userRole !== 'LANDLORD') {
    return NextResponse.redirect(new URL('/not-found', request.url))
  } else if (pathName.startsWith('/admin') && userRole !== 'ADMIN') {
    return NextResponse.redirect(new URL('/not-found', request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}