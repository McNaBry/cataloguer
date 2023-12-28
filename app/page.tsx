import CategorySelector from "./CategorySelector"

export default function Home() {
  return (
    <main className="relative h-full p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-2">cataloguer.</h1>
      <div className="w-100 flex flex-col">
        <CategorySelector />
      </div>
    </main>
  )
}
