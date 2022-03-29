import Container from 'components/Container'
import PostLayout from 'layouts/post'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '../../components/MDXComponents'
import Head from 'next/head'
// import { format, parseISO } from 'date-fns'

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export default function PostPage({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code)
  return (
    <>
    <Container>
      <Head>
      <title>{post.title} -  PP Ali Maksum Krapyak</title>
      </Head>
      <article className="mx-auto mt-16 mb-8 px-4 min-h-screen lg:max-w-2xl prose lg:prose-lg prose-headings:text-slate-900 dark:prose-headings:text-slate-50 text-slate-900 dark:text-slate-50 prose-blockquote:text-slate-900 dark:prose-blockquote:text-slate-50 dark:prose-strong:text-slate-50">
        <h1>{post.title}</h1>
        {/* <p className="text-sm">
          {format(parseISO(post.date), 'dd MMMM yyyy')}
        </p> */}
        <div className='my-4'>{post.description}</div>
        <Component 
          components={
            {
              ...components
            } as any
          }
        />
      </article>
    </Container>
  </>
  )
}
