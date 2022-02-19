import Link from 'next/link';

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center hover:text-indigo-500">
          <div><Link href={'/'}><img className='w-10 p-1 mr-2' src="/assets/images/favicon.svg" alt="PP Ali Maksum" /></Link></div>
          <div className='text-sm'>
            <Link href={'/'}>Yayasan Pondok Pesantren Ali Maksum</Link>
            <br />
            <Link href={'/'}>Krapyak Yogyakarta</Link>
          </div>
        </div>
        <div className="lg:hidden pr-4">
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
        </div>
        <div
          id="nav-content"
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3 inline-block py-2 px-4 text-black font-bold no-underline">
              Sekolah Menengah Pertama
            </li>
            <li className="mr-3 inline-block text-black no-underline font-bold hover:text-gray-800 hover:text-underline py-2 px-4">
              Sekolah Menengah Atas
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Daftar
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Header;
