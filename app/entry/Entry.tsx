import matter from 'gray-matter'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import EntryTag, { Tag } from "./EntryTag"

interface RawEntry {
  tags: Record<string, any>;
  markdown: string;
}

function retrieveMarkdown(category: string, title: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join(" ")
    const markdownFile = require(`../../public/data/${cleanedCategory}/${title}.md`)
    const parsedFile = matter(markdownFile.default)
    return { tags: parsedFile.data, markdown: parsedFile.content }
  } catch (error) {
    return { tags: [], markdown: "" }
  }
}

function retrieveTagsMetadata(category: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join(" ")
    const file = require(`../../public/data/${cleanedCategory}/tags.json`)
    return file.tags
  } catch (error) {
    return []
  }
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

function EntryTags({ category, tagData }: { category: string, tagData: Record<string, any> }) {
  const tags: Tag[] = retrieveTagsMetadata(category)
  return (
    <div className="w-full mb-2 flex flex-wrap overflow-auto">
      {tags.map((tag) => {
        return (
          <EntryTag 
            key={tag.name} 
            name={tag.name} 
            value={String(tagData[tag.name] ?? "No value found")} 
            description={tag.description} 
          />
        )
      })}
    </div>
  )
}

export default function Entry({ category, title }: { category: string, title: string }) {
  const result:RawEntry = retrieveMarkdown(category, title)
  return (
    <div className="w-full lg:w-2/3 min-h-full h-fit mt-2 flex flex-col">
      <EntryTags category={category} tagData={result.tags} />
      <EntryContent markdown={result.markdown} />
    </div>
  )
}