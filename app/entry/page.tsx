"use client"

import BackButton from "../(components)/BackButton"
import Entry from "./Entry"
import { useSearchParams } from 'next/navigation'

export default function EntryViewer() {
  const searchParams = useSearchParams()

  const category = searchParams.get("category") || ""
  const title = searchParams.get("title") || ""

  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-1">{title}</h1>
      <BackButton link={`/view-entries?category=${category}`} />
      <Entry category={category} title={title} />
    </main>
  )
}