import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="sticky top-0 z-30 bg-opacity-50 h-[72px] bg-gray-900 backdrop-filter backdrop-blur  firefox:bg-opacity-90">
      <Link href="/">
        <a className=" text-xl">Title</a>
      </Link>
      .
    </h2>
  )
}

export default Header
