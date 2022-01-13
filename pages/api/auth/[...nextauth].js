import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../lib/dataSource";
//CATCH ALL ROUTE(FILENAME [...NAME].js)-> All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.

export default NextAuth({
  session: {
    jwt: true,
  },
  jwt: {
    //https://next-auth.js.org/configuration/options#jwt
    secret: process.env.JWT_SECRET,
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        console.log("0P");
        //credentials je objekt koji se proslijeduje kod poziva signIn('credentials',objekt) funkcije
        //poozivi contenful?
        const user = await getUser(credentials.email, credentials.password);
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          //ovo vracamo pozivu signin funkcije
          console.log("Prosao login");
          return user;
        }
        // If you return null or false then the credentials will be rejected
        else return null;
      },
    }),
  ],

  /*The options displayed on the sign-up page are automatically generated based on the providers specified in the options passed to NextAuth.js. */
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  /*   callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  } */
});
