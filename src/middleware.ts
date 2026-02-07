import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string }[]) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value);
          });
        },
      },
    }
  );

  await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/app")) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      const signIn = new URL("/signin", request.url);
      signIn.searchParams.set("redirect", pathname);
      return NextResponse.redirect(signIn);
    }
  }

  return response;
}

export const config = {
  matcher: ["/app/:path*"],
};
