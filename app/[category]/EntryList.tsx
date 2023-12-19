import fs from 'fs'
import matter from 'gray-matter'

import EntryCard, { Entry } from "./EntryCard"

function EmptyEntryList({ category }: { category: string }) {
  return (
    <p className="text-2xl text-center mt-4">
      Oops... No entries found for <span className="font-semibold">{category}</span>
    </p>
  )
}

function fetchEntryNames(category: string) {
  if (!fs.existsSync(`data/${category}/entries.json`)) {
    return []
  }
  const data = fs.readFileSync(`data/${category}/entries.json`)
  const json = JSON.parse(matter(data).content)
  return json.entries
}

export default function EntryList({ category }: { category: string }) {
  const entries: Entry[] = fetchEntryNames(category)

  const entryList = entries.map((entry, indx) => {
    return (
      <div key={entry.title}>
        <EntryCard entry={entry} />
        {indx < entries.length - 1 
          ? <hr className="h-0.5 bg-narvik"/>
          : null 
        }
      </div>
    )
  })

  return (
    <div className="w-full lg:w-1/2 p-2 flex flex-col">
      {entryList.length == 0 
        ? <EmptyEntryList category={category} /> 
        : entryList }
    </div>
  )
}