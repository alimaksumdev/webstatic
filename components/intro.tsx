// import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/assets/images/intro-image.png')] bg-cover bg-center">
      <h1 className="text-center text-3xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-tight drop-shadow-md px-8">
        SMP-SMA Ali Maksum
      </h1>
      <h4 className="text-center text-sm md:text-lg text-white tracking-tighter leading-tight drop-shadow-md px-8">
        Membentuk insan beriman kuat, taqwa yang kaafah, berakhlaq mulia,
        menguasai IPTEK yang mashlahah, beramal profesional.
      </h4>
      <div className="flex">
      <button
        id="navAction"
        className="hover:underline bg-white text-gray-800 font-bold rounded-xl mt-4 lg:mt-0 py-4 px-8 mx-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Info Pendaftaran
      </button>
      <button
        id="navAction"
        className="hover:underline bg-white text-gray-800 font-bold rounded-xl mt-4 lg:mt-0 py-4 px-8 mx-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Tentang
      </button>
      </div>
    </section>
  );
};

export default Intro;
