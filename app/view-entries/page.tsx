"use client"

import { useSearchParams } from 'next/navigation';

import EntryList from "./EntryList"
import BackButton from '../(components)/BackButton';
import { fetchEntries } from '../(util)/dataFetcher';
import { EntryDisplay } from '../(common)/(types)/EntryModel';

export default function EntryListViewer() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") || ""

  const entries: EntryDisplay[] = fetchEntries(category)

  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-2">{category}</h1>
      <BackButton link="/" />
      <EntryList category={category} entries={entries} />
    </main>
  )
}