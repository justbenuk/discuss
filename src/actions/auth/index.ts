'use server'

import * as auth from '@/auth'

//sign in user
export async function signIn() {
  return auth.signIn('github')
}

//signout user
export async function signOut() {
  return auth.signOut()
}


