// import { CMS_NAME } from '../lib/constants';
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[url('/assets/images/intro-image.jpg')] bg-cover bg-center py-2">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter text-sky-50 drop-shadow-md md:px-8 md:text-6xl lg:text-8xl">
        SMP-SMA Ali Maksum
      </h1>
      <h4 className="px-2 text-center text-sm leading-tight tracking-tight text-slate-50 drop-shadow-md md:text-lg lg:text-xl">
        Membentuk insan beriman kuat, taqwa yang kaafah, berakhlaq mulia,
        menguasai IPTEK yang mashlahah, beramal profesional.
      </h4>
      <div className="my-2 columns-2 flex-col">
        <Link href={'/posts/info-pendaftaran'}>
          <a
            id="navAction"
            className="dark:highlight-white/20 mx-auto flex h-12 min-w-full items-center justify-center rounded-lg bg-slate-900 px-2 font-semibold text-white no-underline hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-600"
          >
            Info Pendaftaran
          </a>
        </Link>
        <Link href={'/posts/about'}>
          <a
            id="navAction"
            className="dark:highlight-white/20 mx-auto flex h-12 min-w-full items-center justify-center rounded-lg bg-sky-500 px-2 font-semibold text-slate-50 no-underline hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-sky-600 dark:hover:text-slate-50"
          >
            Profil
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Intro
