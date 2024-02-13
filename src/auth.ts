import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_SECRET = process.env.GITHUB_SECRET

if(!GITHUB_CLIENT_ID || !GITHUB_SECRET){
  throw new Error('Missing Credentials')
}

export const {handlers: {GET, POST}, auth, signOut, signIn} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_SECRET
    })
  ],
  callbacks: {
    //Normally not needed, but nextauth is currently broken
    async session({session, user}: any){
      if(session && user){
        session.user.id = user.id
      }
      return session
    }
  }
})

