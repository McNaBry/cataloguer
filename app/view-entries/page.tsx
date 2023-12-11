"use client"

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useSearchParams, useRouter } from 'next/navigation'

type Entry = {
  id: string;
  title: string;
  description: string;
}

const entries: Entry[] = [
  {id: "001", title: "Short Title", description: "This is a short description."},
  {id: "002", title: "Very Very Very Very Very Long Title", description: "This is a very very very very very very very very very very very very very long description."},
  {id: "003", title: "Overfloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow", description: "Overfloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow."}
]

function EntryCard({ entry, router }: { entry: Entry, router: AppRouterInstance }) {
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

function EntryList() {
  const router = useRouter()
  return (
    <div className="w-full lg:w-1/2 p-2 flex flex-col">
      {entries.map((entry, indx) => {
        return (
          <div key={entry.id}>
            <EntryCard entry={entry} router={router} />
            {indx < entries.length - 1 
              ? <hr className="h-0.5 bg-narvik"/>
              : null 
            }
          </div>
        )
      })}
    </div>
  )
}

export default function EntryViewer() {
  const searchParams = useSearchParams()
  var category = searchParams.get('category') ?? "Category"

  if (category == "") {
    category = "Category"
  }

    return (
      <main className="h-full flex flex-col items-center content-center">
        <h1 className="font-emerl text-5xl mb-2">{category}</h1>
        <EntryList />
      </main>
    )
}