import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="fixed top-0 z-40 w-full bg-slate-50/80 shadow-md backdrop-blur dark:bg-slate-900/80">
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between pb-0 pt-2">
        <div className="flex px-2 md:px-4">
          <button type="button">
            <Link href={'/'} passHref>
              <Image
                src="/assets/images/favicon.svg"
                alt="PP Ali Maksum"
                width={40}
                height={40}
              />
            </Link>
          </button>
          <div className="text-sm ml-1">
            <Link href={'/'}>Yayasan Pondok Pesantren Ali Maksum</Link>
            <br />
            <Link href={'/'}>Krapyak Yogyakarta</Link>
          </div>
        </div>
        {/* <div className="md:hidden">
          <button
            id="nav-toogle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale:105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div
          id="nav-content"
          className="z-20 mt-2 hidden w-full flex-grow p-4 lg:mt-0 lg:flex lg:w-auto lg:items-center lg:p-0"
        >
          {/* <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3 inline-block py-2 px-4 text-black font-bold no-underline">
              Sekolah Menengah Pertama
            </li>
            <li className="mr-3 inline-block text-black no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4">
              Sekolah Menengah Atas
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  )
}

export default Header
