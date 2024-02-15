'use server'
import type { Post } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect} from 'next/navigation'
import { z } from 'zod'
import { auth } from '@/auth'
import { db } from '@/db'
import paths from '@/paths'

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10)
})

type CreatePostFormState = {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[]
  }
}

export async function CreatePost(formState: CreatePostFormState, formData: FormData): Promise<CreatePostFormState>{

  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content')
  })

  //check if the form is a success
   if(!result.success){
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  //check if user is logged in
  const session = await auth()
  if(!session || session.user){
    return{
      errors: {
        _form: ['You must be signed in']
      }
    }
  }
   return {
    errors: {}
  }
  //TODO: Revalidate the topic show page
}
