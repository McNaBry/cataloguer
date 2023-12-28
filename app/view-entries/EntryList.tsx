import { EntryCategory, EntryDisplay } from "../(common)/(types)/EntryModel"
import EntryCard from "./EntryCard"

function EmptyEntryList({ category }: { category: EntryCategory }) {
  return (
    <p className="text-2xl text-center mt-4">
      Oops... No entries found for <span className="font-semibold">{category}</span>
    </p>
  )
}

export default function EntryList({ category, entries }: { category: EntryCategory, entries: EntryDisplay[] }) {
  const entryList = entries.map((entry, indx) => {
    return (
      <div key={entry.title}>
        <EntryCard category={category} entry={entry} />
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