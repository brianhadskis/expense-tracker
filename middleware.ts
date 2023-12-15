import { withAuth } from "next-auth/middleware";
import { NAVIGATION } from "./config";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isLoggedIn = !!token;
      const protectedNav = NAVIGATION.filter((nav) => nav.loginRequired);
      const isProtected = protectedNav.some((nav) =>
        req.nextUrl.pathname.startsWith(nav.href)
      );

      if (isProtected && !isLoggedIn) {
        return false;
      }

      return true;
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
