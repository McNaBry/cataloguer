"use client"

import { useRouter } from "next/navigation";

export type Entry = {
  title: string;
  summary: string;
}

export default function EntryCard({ category, entry }: { category: string, entry: Entry }) {
  const router = useRouter()
  
  function navigateToEntryPage() {
    router.push(`/entry?category=${category}&title=${entry.title}`)
  }
  
  return (
    <div className="w-full h-fit py-4 px-3 my-2 rounded cursor-default flex flex-col justify-center hover:bg-brown-rose"
      onClick={navigateToEntryPage}>
      <span className="w-fit max-w-full bg-narvik py-1 px-2 mb-1.5">
        <p className="text-xl text-black text-ellipsis overflow-hidden">{entry.title}</p>
      </span>
      <p className="break-words">{entry.summary || "No Summary Found :("}</p>
    </div>
  )
}