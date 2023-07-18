import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {connectToDB} from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID + "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET + "",
    })
  ],
  // @ts-ignore
  async session({session}) {

  },
  // @ts-ignore
  async signIn({profile}) {
    try {
      //   check si el usuario ya existe ✅

      //   sino ❌ crear uno nuevo ✅

      return true;
    } catch (error) {
      console.log(error);
      return false
    }
  }
})
export {handler as GET, handler as POST};