function EntryCard() {
  return (
    <div className="w-full md:w-1/2 h-full bg-brown-rose border-solid border-2 border-slate-950 p-3 rounded ring-black/5">
      <p>Hello. This is a wonderful description</p>
    </div>
  )
}

export default function Entry() {
  return (
    <main className="h-full p-24 flex flex-col items-center content-center">
      <h1 className="font-emerl text-4xl mb-2">My Lie in April</h1>
      <EntryCard />
    </main>
  )
}