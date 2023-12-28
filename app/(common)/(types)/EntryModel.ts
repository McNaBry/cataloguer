export type EntryCategory = string;

// Entry tag.
export type EntryTag = {
  name: string;
  value: string;
}

// Tag metadata found in tags.json.
export type TagMetadata = {
  name: EntryTag['name'];
  description: string;
}

// Model of a full entry.
export type EntryModel = {
  title: string;
  tags: EntryTag[];
  markdown: string;
}

// Raw entry data extracted from its markdown file.
export type RawEntry = {
  tags: Record<string, any>;
  markdown: string;
}

// Summarized version of entry. Used for displaying in a list.
export type EntryDisplay = {
  title: EntryModel['title'];
  summary: string;
}