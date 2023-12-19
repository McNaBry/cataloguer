import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import EntryList from "./EntryList"

import categoryList from "../../data/categories.json"

// Statically generates the dynamic routes at build time instead. 
export async function generateStaticParams() {
  return categoryList.categories.map((category) => ({category: category}))
}

export default function EntryViewer({ params }: { params: { category: string } }) {
  var category = params.category

  return (
    <main className="p-10 flex flex-col items-center justify-center">
      <h1 className="font-emerl text-5xl mb-2">{category}</h1>
      <Link href="/" className="w-fit h-fit">
        <button className="w-full h-full bg-button py-0.5 pl-1 pr-3 border-b-4 border-button-dark flex justify-center items-center hover:bg-button-hover rounded">
          <ArrowSmallLeftIcon className="h-8 w-8 text-slate-200" />
          <span className="font-semibold">Back</span>
        </button>
      </Link>
      <EntryList />
    </main>
  )
}