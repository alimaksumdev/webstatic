// import { CMS_NAME } from '../lib/constants';
import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/assets/images/intro-image.jpg')] bg-cover bg-center">
      <h1 className="text-center text-3xl md:text-6xl lg:text-8xl font-bold text-sky-50 tracking-tighter leading-tight drop-shadow-md md:px-8">
        SMP-SMA Ali Maksum
      </h1>
      <h4 className="text-center text-sm md:text-lg lg:text-xl text-slate-50 tracking-tight leading-tight drop-shadow-md px-2">
        Membentuk insan beriman kuat, taqwa yang kaafah, berakhlaq mulia,
        menguasai IPTEK yang mashlahah, beramal profesional.
      </h4>
      <div className="columns-2 flex-col my-2">
      <button
        id="navAction"
        className="mx-auto min-w-full px-2 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white hover:text-slate-100 no-underline font-semibold h-12 rounded-lg flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-600"
      >
        <Link href={'/posts/info-pendaftaran'}>Info Pendaftaran</Link>
      </button>
      <button
        id="navAction"
        className="mx-auto min-w-full px-2 bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-slate-50 no-underline font-semibold h-12 rounded-lg flex items-center justify-center dark:bg-slate-900 dark:highlight-white/20 dark:hover:bg-sky-600 dark:text-slate-100 dark:hover:text-slate-50"
      >
        <Link href={'/posts/about'}>Profil</Link>
      </button>
      </div>
    </section>
  );
};

export default Intro;
