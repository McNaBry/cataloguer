"use client"

import { Combobox } from "@headlessui/react"
import { useState } from "react"

const categories: string[] = [
  "Alcohol",
  "Coffee",
  "Anime",
  "Korean Drama"
]

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Cataloguer</h1>
      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options>
          {filteredCategories.map((category) => (
            <Combobox.Option key={category} value={category}>
              {category}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </main>
  )
}
