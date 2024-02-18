import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicsList from "@/components/topics/topics-list";
import { Divider } from "@nextui-org/react";
import type { Metadata } from "next";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";

export const metadata: Metadata = {
  title: "Discuss - Simple Social Media",
  description: "Created me Nextjs, Prisma and TailwindCSS",
};

export default function Home() {

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={() => fetchTopPosts()} />
      </div>
      <div className="border shadow py-2 px-2">
        <TopicCreateForm />
        <Divider className="my-4"/>
        <h3 className="text-lg">Topics</h3>
        <TopicsList />

      </div>
    </div>
  );
}
