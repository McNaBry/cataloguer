"use client"

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export type Entry = {
  id: string;
  title: string;
  description: string;
}

export default function EntryCard({ entry, router }: { entry: Entry, router: AppRouterInstance }) {
  function navigateToEntryPage() {
    router.push("/entry")
  }
  
  return (
    <div className="w-full h-fit py-4 px-3 my-2 rounded cursor-default flex flex-col justify-center hover:bg-brown-rose"
      onClick={navigateToEntryPage}>
      <span className="w-fit max-w-full bg-narvik py-1 px-2 mb-1.5">
        <p className="text-xl text-black text-ellipsis overflow-hidden">{entry.title}</p>
      </span>
      <p className="break-words">{entry.description}</p>
    </div>
  )
}