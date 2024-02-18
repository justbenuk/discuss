import type { Post } from '@prisma/client'
import { db } from '..'

export type PostWithData = (Post & {
  topic: { slug: string },
  _count: { comments: number },
  user: { name: string }
})

export function fetchPostByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug: slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } }
    }
  })
}
