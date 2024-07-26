'use client'
import Link from "next/link";
import DateComponent from "./date";
import Paper from '@mui/material/Paper';

function PostPreview({
  title,
  date,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <div>
      <h3 className="text-xl md:text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 italic">
        <DateComponent dateString={date} />
      </div>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        More Posts
      </h2>
      <div className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-0 md-gap-2">
        {morePosts.map((post) => (
          <Paper className="p-4 mr-2 mb-2">
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </Paper>
        ))}
      </div>
    </section>
  );
}
