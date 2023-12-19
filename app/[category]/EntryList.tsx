"use client"

import { useRouter } from "next/navigation"
import EntryCard, { Entry } from "./EntryCard"

const entries: Entry[] = [
  {id: "001", title: "Short Title", description: "This is a short description."},
  {id: "002", title: "Very Very Very Very Very Long Title", description: "This is a very very very very very very very very very very very very very long description."},
  {id: "003", title: "Overfloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow", description: "Overfloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow."}
]

export default function EntryList() {
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