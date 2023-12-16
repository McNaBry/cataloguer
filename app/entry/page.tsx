import './entry.css'

import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownContent() {
  const file = fs.readFileSync("data/test.md")
  const result = matter(file)
  return (
    <Markdown className="prose" remarkPlugins={[remarkGfm]}>{result.content}</Markdown>
  )
}

function EntryCard() {
  return (
    <div className="w-full lg:w-2/3 h-fit bg-brown-rose border-solid border-2 border-slate-950 p-5 rounded ring-black/5">
      <MarkdownContent />
    </div>
  )
}

export default function Entry() {
  return (
    <main className="h-full flex flex-col items-center content-center">
      <h1 className="font-emerl text-4xl mb-2">My Lie in April</h1>
      <EntryCard />
    </main>
  )
}