import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

import { DataAccordion } from "@/components"

const POST_QUERY = `*[_type == "page" && slug.current == $slug][0]`;

// const { projectId, dataset } = client.config();

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = await client.fetch<SanityDocument>(POST_QUERY, await params, options);


// const doc = {
//   _type: 'post', // Matches the name in your schema
//   title: `New Post from here!`,

// }

// await client.create(doc).then((res) => {
//   console.log(`Document created with ID: ${res._id}`)
// })

  return (
    <main className="container mx-auto max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back
      </Link>

      
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="prose">
        {Array.isArray(page.body) && <PortableText value={page.body} />}
      </div>


<DataAccordion title="Page Data" data={page} />


    </main>
  );
}