"use client"

import { useSearchParams } from 'next/navigation';

import { Entry } from "./EntryCard"
import EntryList from "./EntryList"
import BackButton from '../(components)/BackButton';

function fetchEntryNames(category: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const json = require(`../../public/data/${cleanedCategory}/entries.json`)
    return json.entries
  } catch (error) {
    return []
  }
}

export default function EntryListViewer() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || ""

  const entries: Entry[] = fetchEntryNames(category)

  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-2">{category}</h1>
      <BackButton link="/" />
      <EntryList category={category} entries={entries} />
    </main>
  )
}