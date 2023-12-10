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

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <div className="w-full h-fit py-4 px-3 my-2 rounded cursor-default flex flex-col justify-center hover:bg-brown-rose">
      <span className="w-fit max-w-full bg-narvik py-1 px-2 mb-1.5">
        <p className="text-xl text-black text-ellipsis overflow-hidden">{entry.title}</p>
      </span>
      <p className="break-words">{entry.description}</p>
    </div>
  )
}

function EntryList() {
  return (
    <div className="w-full lg:w-1/2 p-2 flex flex-col">
      {entries.map((entry, indx) => {
        return (
          <div key={entry.id}>
            <EntryCard entry={entry} />
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
    return (
      <main className="h-full p-24 flex flex-col items-center content-center">
        <h1 className="font-emerl text-5xl mb-2">Category 1</h1>
        <EntryList />
      </main>
    )
}