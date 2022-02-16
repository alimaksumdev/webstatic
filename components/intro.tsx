// import { CMS_NAME } from '../lib/constants';

const Intro = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('/assets/images/intro-image.png')] bg-cover bg-center">
      <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter leading-tight md:pr-8 drop-shadow-md backdrop-blur-">
        SMP-SMA Ali Maksum
      </h1>
      <h4 className="text-center text-md lg:text-lg text-white mt-5 md:pl-8 drop-shadow-md">
        Membentuk insan beriman kuat, taqwa yang kaafah, berakhlaq mulia,
        menguasai IPTEK yang mashlahah, beramal profesional.
      </h4>
    </section>
  );
};

export default Intro;
