# Cataloguer

## Introduction
_Catalogue_
> A complete list of items, typically one in alphabetical or other systematic order.

Cataloguer is a website to display my reviews for different categories of things (i.e. Coffee, Tea, etc) in a _simple and beautiful_ interface. The entire website is made entirely using the NextJS framework and the files for my reviews are stored in the `public` folder (as it was the simplest solution I could find to replace the need for a database).

## Colour scheme
An actual physical catalogue would most likely be associated with the colour of brown (either from wood, yellowed paper or folders). Hence, the entire colour scheme was centered around a light, brown colour as I found dark brown to be too off-putting as the dominant colour. Complementary colours such as Narvik and green were derived from websites' recommendations and a [complementary colour tool](https://www.canva.com/colors/color-wheel/). Different shades of brown were obtained by lightening or darkening the primary brown colour I chose.

## Data files
Currently, the necessary files are stored in the `data` folder under the `public` folder so that the files are available even if the website is a static export. The list of available categories are stored in the `categories.json` file and can be modified to include more.

```JSON
{
  "categories": [
    "Anime",
    "Coffee",
    "Tea"
  ]
}
```

For each category in this list, a new folder must be created under `data`. For example, `Coffee` would require `data/coffee` and `Asian Dramas` would require `data/asian_dramas`. Folder names must strictly be in *lowercase* and spaces are to be replaced with underscores.

### Retrieving the list of reviews
To retrieve the list of reviews associated with each category, an `entries.json` file is created under the respective folders. It contains the `title` of each review and the `summary` to display. The `title` will be used to retrieve the markdown file and is *case sensitive*.

```JSON
{
  "entries": [
    { "title": "New Town Coffee", "summary": "Better than Old Town Coffee" },
    { "title": "Old Town Coffee", "summary": "The OG coffee" }
  ]
}
```

### Retrieving the review
Two files are needed when retrieving the review:
1. It's corresponding markdown file. (A review with the title `Old Town Coffee` would have a markdown file called `Old Town Coffee.md`.
2. A unique `tags.json` file that exists under the folder of each category.

For each review's markdown file, it consists of two parts:
1. The tags, which are stored as the YAML block entry.
2. The markdown content.

_Example review written with markdown_
```markdown
---
Acidity: 5
Sweetness: 10
Place of Purchase: The World of Coffee
---
## Old Town Coffee Review
Really good stuff.
```

The `tags.json` file is used to standardize the tags which are relevant to each category (`acidity` would not be relevant to `Movies`). These tags are used to parse the YAML block entry and display their respective values. If any additional tags are specified in the markdown file, they will be ignored and if any tags are missing, a default `No value found` will be displayed.

Each entry in the tag list will consist of a `name` which will be used for parsing the YAML block entry and a `description` which is displayed as a tooltip.

```JSON
{
  "tags": [
    { "name": "Acidity", "description": "The acidity of this coffee." },
    { "name": "Sweetness", "description": "The sweetness of this coffee." },
    { "name": "Place of Purchase", "description": "The best place to purchase this coffee." }
  ]
}
```

### Displaying the review
The markdown file is retrieved as a string and is parsed using the [gray-matter](https://www.npmjs.com/package/gray-matter) package. The relevant data is extracted into an object with two attributes:
1. `tags` which is a `Record` that contains multiple key (tag name) - value (tag value) pairs.
2. `markdown` which contains the raw markdown string.

Using the tag names provided by `tags.json`, the relevant tags are extracted from the object and the raw markdown string is passed into a `Markdown` component that was imported from the [react-markdown](https://github.com/remarkjs/react-markdown) package.

With this, the relevant data can be displayed for the review.

## Using this project as your own
This website can be easily repurposed for your own use. The only files that need to be modified are within the `public/data` folder.
1. In the data folder
  - Modifiy `categories.json` if you wish to add a new category.
  -  Add a new folder for that category.
2. In the category folder
  - Add a `tags.json` file containing the tags and their descriptions.
  - Add an `entries.json` file containing the titles of the entries and their summaries.
  - Add a markdown file for the new review you wish to write.
  - Enjoy :)
