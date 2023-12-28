import matter from 'gray-matter'

import { EntryTitle, EntryCategory, RawEntry, EntryDisplay } from "../(common)/(types)/EntryModel"

export function fetchEntryData(category: EntryCategory, title: EntryTitle): RawEntry {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const markdownFile = require(`../../public/data/${cleanedCategory}/${title}.md`)
    const parsedFile = matter(markdownFile.default)
    return { tags: parsedFile.data, markdown: parsedFile.content }
  } catch (error) {
    return { tags: [], markdown: "" }
  }
}

export function fetchTagsMetadata(category: EntryCategory) {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const file = require(`../../public/data/${cleanedCategory}/tags.json`)
    return file.tags
  } catch (error) {
    return []
  }
}

export function fetchEntries(category: EntryCategory): EntryDisplay[] {
  try {
    const cleanedCategory = category.toLowerCase().split(" ").join("_")
    const json = require(`../../public/data/${cleanedCategory}/entries.json`)
    return json.entries
  } catch (error) {
    return []
  }
}

export function fetchCategories(): EntryCategory[] {
  try {
    const json = require(`../../public/data/categories.json`)
    return json.categories
  } catch (error) {
    return []
  }
}