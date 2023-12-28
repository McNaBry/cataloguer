import matter from 'gray-matter'

export function fetchEntryData(category: string, title: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const markdownFile = require(`../../public/data/${cleanedCategory}/${title}.md`)
    const parsedFile = matter(markdownFile.default)
    return { tags: parsedFile.data, markdown: parsedFile.content }
  } catch (error) {
    return { tags: [], markdown: "" }
  }
}

export function fetchTagsMetadata(category: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const file = require(`../../public/data/${cleanedCategory}/tags.json`)
    return file.tags
  } catch (error) {
    return []
  }
}

export function fetchEntries(category: string) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const json = require(`../../public/data/${cleanedCategory}/entries.json`)
    return json.entries
  } catch (error) {
    return []
  }
}

export function fetchCategories() {
  try {
    const json = require(`../../public/data/categories.json`)
    return json.categories
  } catch (error) {
    return []
  }
}