import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const Post = defineDocumentType(() => ({
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

const Pengumuman = defineDocumentType(() => ({
  name: 'Pengumuman',
  filePathPattern: `pengumuman/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Judul pengumuman',
      required: true,
    },
    date: {
      type: 'date',
      description: 'Tanggal diumumkan',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (pengumuman) => `/${pengumuman._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (pengumuman) => `${pengumuman._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    }
  },
}))

const Berita = defineDocumentType(() => ({
  name: 'Berita',
  filePathPattern: `berita/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'Judul berita',
      required: true,
    },
    author: {
      type: 'string',
      description: 'Nama penulis',
      required: true
    },
    date: {
      type: 'date',
      description: 'Tanggal diposting',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Foto berita',
      required: true
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (berita) => `/${berita._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (berita) => `${berita._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    }
  },
}));

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