import Container from 'components/Container'
import { Post } from 'contentlayer/generated'
import { PropsWithChildren } from 'react'
// import { format, parseISO } from 'date-fns'

export default function PostLayout({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  return (
    <Container
      title={`${post.title} - PP. Ali Maksum`}
      description={post.description}
    >
      <article className="prose mx-auto mt-16 mb-8 min-h-screen px-4 text-slate-900 prose-headings:text-slate-900 prose-blockquote:text-slate-900 dark:text-slate-50 dark:prose-headings:text-slate-50 dark:prose-blockquote:text-slate-50 dark:prose-strong:text-slate-50 lg:prose-lg lg:max-w-2xl">
        <h1>{post.title}</h1>
        <div className="my-4">{post.description}</div>
        {/* <p className="text-sm text-slate-800 dark:text-slate-200">
            ⏲ {format(parseISO(post.date), 'dd MMMM yyyy')}
          </p> */}
        {children}
      </article>
    </Container>
  )
}
