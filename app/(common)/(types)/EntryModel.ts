export type EntryTitle = string;
export type EntryCategory = string;
export type EntryContent = string;

// Raw entry data extracted from its markdown file.
export type RawEntry = {
  tags: Record<string, any>;
  markdown: EntryContent;
}

// Summarized version of entry. Used for displaying in a list.
export type EntryDisplay = {
  title: EntryTitle;
  summary: string;
}

// Entry tag.
export type EntryTag = {
  name: string;
  value: string;
}

// Tag metadata found in tags.json.
export type TagMetadata = {
  name: string;
  description: string;
}

// Model of a full entry.
export type EntryModel = {
  title: EntryTitle;
  tags: EntryTag[];
  markdown: EntryContent;
}