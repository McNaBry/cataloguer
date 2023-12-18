interface TagProps {
  tagKey: string,
  tagContent: string
}

function TagButton({ content }: { content: string }) {
  return (
    <button className="w-fit block bg-narvik text-black px-3 py-1 mr-2 mb-2
    whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer 
    rounded-full shadow-md">
      {content}
    </button>
  )
}

export default function Tag({ tagKey, tagContent }: TagProps) {
  const cleanedKey = tagKey.split("_").join(" ")
  return (
    <TagButton content={cleanedKey + ": " + tagContent} />
  )
}