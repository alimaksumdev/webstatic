import Container from 'components/Container'
import PostLayout from 'layouts/post'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import components from '../../components/MDXComponents'
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
        <PostLayout post={post}>
          <Component 
            components={
              {
                ...components
              } as any
            }
            />
        </PostLayout>
  )
}
