import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
        type: 'string',
        description: 'The description or summary of the post'
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    }
  },
}))

const contentLayerConfig = makeSource({
    contentDirPath: 'data',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
              {
                properties: {
                  className: ['anchor']
                }
              }
          ]
        ]
    }
});

export default contentLayerConfig;