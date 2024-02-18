import { redirect } from "next/navigation"
import PostList from "@/components/posts/post-list"
import { searchPosts } from "@/db/queries/posts"
type SearchProps = {
  searchParams: {
    term: string
  }
}
export default function SearchPage({ searchParams }: SearchProps) {
  const { term } = searchParams

  if (!term) {
    return redirect('')
  }

  return (
    <div>
      <PostList fetchData={() => searchPosts(term)} />
    </div>
  )
}
