import Link from "next/link";
import { draftMode } from "next/headers";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';
import Paper from '@mui/material/Paper';

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";
import SocialIcons from "./social-icons";

import { getAllPosts } from "@/lib/api";

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 caret-transparent">
        Eve x Excel.
      </h1>
      <div className="flex flex-row items-center mt-5 md:pl-8">
        <SocialIcons />
      </div>
    </section>
  );
}
function FunctionsSection() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    <Link href="/functions">
      <h2 className="mb-8 text-2xl md:text-6xl font-bold leading-tight transition-transform	hover:translate-x-2">
        View available functions <ArrowForwardIcon fontSize="large"/>
      </h2>
    </Link>
    </section>
  );
}

function Welcome() {
  return (
    <Paper>
    <section className="mb-20 mt-16 p-8">
      <h2 className="mb-8 text-6xl md:text-8xl font-bold tracking-tighter leading-tight mt-4">Welcome!</h2>
      <p className="text-xl md:text-2xl mb-4 md:mb-0">This website contains information about the Eve Addin for Microsoft Excel.</p>
      <p className="text-xl md:text-2xl mb-4">You can view the full list of available functions, posts about useful techniques and updates alongside links to samples.</p>
      <p>If you need any help with the addin feel free to hop into #spreadsheets on the <Link href="https://discord.com/invite/eveonline" className="underline hover:decoration-2">official Eve discord</Link></p>
    </section>
    </Paper>
  )
}

function Requirements() {
  return (
    <section className="grid md:grid-cols-2 mt-16 mb-16 md:mb-28 gap-2">
      <Paper className="p-6">
        <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
          Requirements
        </h2>
        <div className="ml-2 text-xl md:text-2xl">
          <p className="mb-2">Supported versions of Excel</p>
          <ul className="list-disc ml-2 mb-3 pl-4">
            <li className="ml-1 pl-1">Desktop: Microsoft Office M365</li>
            <li className="ml-1 pl-1">Web: Microsoft account for the free Excel Web</li>
          </ul>
          <p className="text-lg">Retail versions of Excel are <u>not supported</u></p>
        </div>
      </Paper>
      <Paper className="p-6">
      <div className="flex flex-col">
        <h2 className="mb-8 text-xl md:text-4xl font-bold tracking-tighter leading-tight">
          Examples
        </h2>
        <Link className="hover:underline text-xl md:text-2xl mb-2" href="https://web.ccpgamescdn.com/aws/eveonline/files/EVE_x_MS_Excel-workbook-sample.xlsx">
          <DownloadIcon className="mr-2"/>Initial release sample sheet
        </Link>
        <Link className="hover:underline text-xl md:text-2xl mb-2" href="https://1drv.ms/x/c/dcb7d3a74e9f696e/EQs193BZsGpBgWtUkwZkBuQB8q7gD_j4rwIJsU0RwxHbUQ?e=hSFnTc">
          <LinkIcon className="mr-2" />Blueprint and personal stocks
        </Link>
      </div>
      </Paper>
    </section>
  );
}

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
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
    <section className="mb-16 md:mb-20">
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight mt-4">
        Latest Post
      </h2>
      
    <Paper className="p-2">
      <div className="flex md:flex-row ">
        <div className="mr-2 hidden lg:block">
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
        <div className="ml-4 mr-4 mt-3">
          <h3 className="mb-4 text-2xl lg:text-4xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text italic">
            <Date dateString={date} />
          </div>
        </div>
        <div>
        </div>
      </div>
    </Paper>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
      <div className="container mx-auto px-5">
        <Intro />
        <Welcome />
        <FunctionsSection />
        <Requirements />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        <MoreStories morePosts={morePosts} />
      </div>
  );
}
