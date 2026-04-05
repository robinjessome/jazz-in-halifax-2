import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client"

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  _type, // Crucial for routing logic
  title, 
  slug, 
  publishedAt
}`;

const options = { next: { revalidate: 30 } };

// Map Sanity _type to your frontend route folders
  const routeMap: Record<string, string> = {
    post: "post",
    article: "articles",
  };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => {
          const routePrefix = routeMap[post._type] || "blog";
          return (
            
            <li className="hover:underline" key={post._id}>
              <Link href={`${routePrefix}/${post.slug.current}`}>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  );
}