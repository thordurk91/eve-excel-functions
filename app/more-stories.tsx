'use client'
import Link from "next/link";
import DateComponent from "./date";
import { Swiper, SwiperSlide } from 'swiper/react';
import Paper from '@mui/material/Paper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

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
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
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
      <div className="mb-32">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {morePosts.map((post) => (
          <SwiperSlide>
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
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
}
