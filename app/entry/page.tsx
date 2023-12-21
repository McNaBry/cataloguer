"use client"

import Entry from "./Entry"
import { useSearchParams } from 'next/navigation'

export default function EntryViewer() {
  const searchParams = useSearchParams()

  const category = searchParams.get("category") || ""
  const title = searchParams.get("title") || ""

  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-4">{title}</h1>
      <Entry category={category} title={title} />
    </main>
  )
}