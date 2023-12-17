import './entry.css'

import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownContent() {
  const file = fs.readFileSync("data/test.md")
  const result = matter(file)
  return (
    <Markdown className="prose" remarkPlugins={[remarkGfm]}>
      {result.content}
    </Markdown>
  )
}

function EntryContent() {
  return (
    <div className="w-full h-fit bg-sorrell-darker p-5 rounded shadow-md">
      <MarkdownContent />
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

function EntryTags() {
  return (
    <div className="w-full mb-2 flex flex-wrap overflow-auto">
      <Tag tagContent='Really long long long long tag: 55555' />
      <Tag tagContent='Really long long long tag: 55555' />
      <Tag tagContent='Really long long long long long long long long long long long long long long long long tag: 55555' />
    </div>
  )
}

function EntryCard() {
  return (
    <div className="w-full lg:w-2/3 min-h-full h-fit flex flex-col">
      <EntryTags />
      <EntryContent />
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