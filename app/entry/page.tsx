import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import testTags from "../../data/testTags.json"

function retrieveMarkdown() {
  const file = fs.readFileSync("data/testContent.md")
  const result = matter(file)
  return result
}

function EntryContent({ markdown }: { markdown: string }) {
  return (
    <div className="w-full h-fit bg-sorrell-darker p-5 rounded shadow-md">
      <Markdown className="prose" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  )
}

function Tag({ tagContent }: { tagContent: string }) {
  return (
    <span className="w-fit block bg-narvik text-black px-3 py-1 mr-2 mb-2
    whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer 
    rounded-full shadow-md">
      {tagContent}
    </span>
  )
}

function EntryTags({ tagData }: { tagData: Record<string, any> }) {
  return (
    <div className="w-full mb-2 flex flex-wrap overflow-auto">
      {testTags.tags.map((tag) => {
        return (
          <Tag key={tag} tagContent={tag.split("_").join(" ") + ": " + String(tagData[tag])} />
        )
      })}
    </div>
  )
}

function EntryCard() {
  const result = retrieveMarkdown()
  console.log(result.data)
  return (
    <div className="w-full lg:w-2/3 min-h-full h-fit flex flex-col">
      <EntryTags tagData={result.data} />
      <EntryContent markdown={result.content} />
    </div>
  )
}

export default function Entry() {
  return (
    <main className="h-full flex flex-col items-center content-center">
      <h1 className="font-emerl text-5xl mb-4">My Lie in April</h1>
      <EntryCard />
    </main>
  )
}