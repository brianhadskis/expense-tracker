import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "@/lib/db";
import { NAVIGATION } from "./config";

export const authConfig = {
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedNav = NAVIGATION.filter((nav) => nav.loginRequired);
      const isProtected = protectedNav.some((nav) =>
        nextUrl.pathname.startsWith(nav.href)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/api/auth/signin", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);

        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
