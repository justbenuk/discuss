'use server'
import type { Topic } from '@prisma/client'
import { db } from '@/db'
import { redirect } from 'next/navigation'
import { z } from 'zod'
//as its a server component we import this auth
import { auth } from '@/auth'
import paths from '@/paths'
import { revalidatePath } from 'next/cache'

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, { message: 'Must be lower case letters or ashes without spaces' }),
  description: z.string().min(10),

})

type formStateProps = {
  errors: {
    name?: string[],
    description?: string[]
    _form?: string[]
  }
}
export async function CreateTopic(formState: formStateProps, formData: FormData): Promise<formStateProps> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description')
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this']
      }
    }
  }

  let topic: Topic

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description
      }
    })

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    } else {
      return {
        errors: {
          _form: ['Sorry! Something went wrong']
        }
      }
    }
  }


  revalidatePath('/')
  redirect(paths.topicShow(topic.slug))
}
