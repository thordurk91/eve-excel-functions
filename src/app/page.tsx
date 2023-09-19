import Image from 'next/image'
import FunctionList from './functionList'
export default function Home({allPostsData} : any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
      

      <div className="relative flex place-items-center z-[-1]">
        <Image
          className="relative dark:invert"
          src="/EVE_online_logo.svg"
          alt="EVE Excel Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex-col z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex mt-4 flex w-full justify-center border-b border-gray-300 bg-slate-100 pb-6 px-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <p>
          Eve x Excel functions parameters
        </p>
        <br></br>
        <p>
          CTRL+F to find the function you are looking for
        </p>
      </div>
      <FunctionList />
    </main>
  )
}
