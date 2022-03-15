import Image from 'next/image'
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

export default function PostList(post) {
  return (
    <button type='button' className="text-left">
      <Link href={post.url}>
        <Image
          src={`/assets/images/thumbnail.webp`}
          width={480}
          height={360}
          className="rounded-xl"
        />
      </Link>
      <Link href={post.url}>
        <div className="font-md md:text-lg font-medium hover:text-indigo-900 dark:hover:text-indigo-300">
          <a>
            {post.title}
          </a>
        </div>
      </Link>
      <time
        dateTime={post.date}
        className="block text-xs text-gray-600 md:text-sm"
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </button>
  )
}
