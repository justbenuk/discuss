import CreatePostForm from "@/components/posts/create-post-form";
import { fetchPostByTopicSlug } from "@/db/queries/posts";
import PostList from "@/components/posts/post-list";

type topiocshowprops = {
  params: {
    slug: string
  }
}
export default async function SingleTopicPage({ params }: topiocshowprops) {
  const { slug } = params
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)}/>
      </div>
      <div><CreatePostForm slug={slug} /></div>
    </div>
  );
}
