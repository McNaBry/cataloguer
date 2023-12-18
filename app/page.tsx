"use client"

import { Combobox, Transition } from "@headlessui/react"
import { useState } from "react"
import Link from 'next/link'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import categoryList from "../data/categories.json"

function CategoryOption({ category }: { category: string }) {
  return (
    <Combobox.Option 
      value={category}
      className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
        active ? "bg-brown-rose text-white" : "text-gray-900"
      }`}>
        {({ selected, active }) => (
          <>
            <span className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}>
              {category}
            </span>

            {selected ? (
              <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                active ? 'text-white' : 'text-teal-600'
              }`}>
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )}
    </Combobox.Option>
  )
}

interface CategoryOptionListProps {
  filteredCategories: string[];
  query: string;
}

function CategoryOptionList({ filteredCategories, query }: CategoryOptionListProps) {
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Combobox.Options className="absolute max-h-60 w-full py-1 mt-1.5 rounded-md bg-narvik ring-1 ring-black/5 cursor-default">
        {filteredCategories.length == 0 && query !== '' ? (
          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
            Nothing found.
          </div>
        ) : (
          filteredCategories.map((category) => (
            <CategoryOption key={category} category={category} />
          ))
        )}
      </Combobox.Options>
    </Transition>
  )
}

function CategorySelector() {
  const categories = categoryList.categories
  // Stores selected option.
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0])
  // Dynamically stores what user is searching in input.
  const [query, setQuery] = useState<string>("")

  const filteredCategories = query === ""
    ? categories
    : categories.filter((category) => {
        return category.toLowerCase().includes(query.toLowerCase())
      }) 

  return (
    <>
      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
        <div className="relative w-full">
          <Combobox.Input onChange={(event) => setQuery(event.target.value)} 
            className="w-full bg-narvik px-4 py-2 text-black rounded focus:outline-none" />
          <Combobox.Button className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <ChevronUpDownIcon
              className="h-5 w-5 text-slate-700"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <CategoryOptionList filteredCategories={filteredCategories} query={query} />
      </Combobox>
      <Link href={`/view-entries?category=${selectedCategory}`} className="flex justify-center">
        <button className="bg-button py-2 px-2.5 mt-2 border-b-4 border-button-dark font-semibold hover:bg-button-hover rounded">
          Access Catalog
        </button>
      </Link>
    </>
  )
}

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
