import EntryCard, { Entry } from "./EntryCard"

function EmptyEntryList({ category }: { category: string }) {
  return (
    <p className="text-2xl text-center mt-4">
      Oops... No entries found for <span className="font-semibold">{category}</span>
    </p>
  )
}

export default function EntryList({ category, entries }: { category: string, entries: Entry[] }) {
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