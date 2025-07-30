"use client";
import Link from "next/link";
import FunctionList from '../functions-list'
export default function Home({allPostsData} : any) {
//flex min-h-screen flex-col items-center px-5

  return (
    <main className="container mx-auto px-5 mb-16">
        <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Eve x Excel
        </Link>
        .
        </h2>
        <div className="flex flex-col items-center mx-auto px-5">
            <div className="flex place-items-center">
                
            </div>
            <div className="relative flex place-items-center z-[-1]">
            </div>
            <div className="infobox rounded-xl flex-col z-10 w-auto items-center justify-center font-mono text-sm lg:flex mt-4 flex justify-center border border-gray-300 pb-6 px-6 pt-8 backdrop-blur-2xl">
                <p>
                Eve x Excel functions parameters 1.8
                </p>
                <br></br>
                <p>
                CTRL+F or use the autocomplete below
                </p>
                <p className="text-center mt-1">
                inside excel a [variable] is an optional parameter. <br></br>ommitted here but visible in the card
                </p>
                <p className="mt-2"><a className="underline italic" href="https://esi.evetech.net/ui/?version=latest#/">View technical details about endpoints in ESI</a></p>
            </div>
        </div>
        <FunctionList />
    </main>
  )
}
