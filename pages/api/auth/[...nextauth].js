import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

//CATCH ALL ROUTE(FILENAME [...NAME].js)-> All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  /*NextAuth.js automatically creates simple, unbranded authentication pages for handling Sign in, Sign out, Email Verification and displaying error messages.

The options displayed on the sign-up page are automatically generated based on the providers specified in the options passed to NextAuth.js. */
  pages: {
    signIn: "/login",
    signOut: "/",
  },
});
