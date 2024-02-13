'use server'
import * as auth from '@/auth'

//sign in user
export async function SignIn() {
  return auth.signIn('github')
}
