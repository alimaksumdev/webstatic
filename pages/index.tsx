import Container from 'components/Container'
import Intro from 'components/Intro'
import { compareDesc, format, parseISO } from 'date-fns'
import PostCard from 'components/PostCard'
import { allPosts, Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <Container>
      <Intro />
      {/* <div className='mx-auto mt-4 max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl'>
        <div className="text-2xl 2xl:text-3xl font-light my-2 mx-2 md:mx-0">
          Berita Terbaru
        </div>
        <div className="grid auto-cols-auto grid-cols-2 gap-2 p-1 md:grid-cols-3 md:gap-3 lg:max-w-4xl 2xl:max-w-6xl 2xl:grid-cols-4 mx-2 md:mx-0">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div> */}
    </Container>
  )
}
