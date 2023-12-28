import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import EntryTag from "./EntryTag"
import { 
  EntryCategory, 
  EntryContent, 
  EntryTitle, 
  RawEntry, 
  TagMetadata 
} from "../(common)/(types)/EntryModel"
import { fetchEntryData, fetchTagsMetadata } from '../(util)/dataFetcher';

function EntryMarkdown({ markdown }: { markdown: EntryContent }) {
  return (
    <div className="w-full h-fit bg-sorrell-darker p-5 rounded shadow-md">
      <Markdown className="prose" remarkPlugins={[remarkGfm]}>
        {markdown}
      </Markdown>
    </div>
  )
}

function EntryTags({ category, tags }: { category: EntryCategory, tags: RawEntry['tags'] }) {
  const tagMetadata: TagMetadata[] = fetchTagsMetadata(category)
  return (
    <div className="w-full mb-2 flex flex-wrap overflow-auto">
      {tagMetadata.map((tag) => {
        return (
          <EntryTag 
            key={tag.name} 
            name={tag.name} 
            value={String(tags[tag.name] ?? "No value found")} 
            description={tag.description} 
          />
        )
      })}
    </div>
  )
}

export default function Entry({ category, title }: { category: EntryCategory, title: EntryTitle }) {
  const result: RawEntry = fetchEntryData(category, title)
  return (
    <div className="w-full lg:w-2/3 min-h-full h-fit mt-2 flex flex-col">
      <EntryTags category={category} tags={result.tags} />
      <EntryMarkdown markdown={result.markdown} />
    </div>
  )
}