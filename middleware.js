import { NextResponse } from "next/server";

export function middleware(req) {
  // Allow Next static assets without auth
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt")
  ) {
    return NextResponse.next();
  }

  // Read Basic Auth header
  const auth = req.headers.get("authorization") || "";
  const [scheme, encoded] = auth.split(" ");

  // Expected credentials from env vars
  const USER = process.env.BASIC_USER || "";
  const PASS = process.env.BASIC_PASS || "";

  if (scheme === "Basic" && encoded) {
    const decoded = atob(encoded); // "username:password"
    const [user, pass] = decoded.split(":");
    if (user === USER && pass === PASS) {
      return NextResponse.next();
    }
  }

  // Ask browser to prompt for credentials
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

// Apply to every route (except the static ones we allowed above)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
