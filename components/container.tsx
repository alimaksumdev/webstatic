import { ReactNode, FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "PP Ali Maksum",
    description: "Pondok Pesantren Ali Maksum Krapyak",
    ...customMeta,
  };

  return (
    <div className="mx-auto px-5 antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>{meta.title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

// const Container: FunctionComponent = ({ children, ...customMeta }: Props) => {
//   const meta = {
//     title: 'PP Ali Maksum',
//     description: 'Pondok Pesantren Ali Maksum Krapyak',
//     ...customMeta
//   }
//   return (
//     <div>
//       <Head>
//         <title>{meta.title}</title>
//       </Head>
//       <Header />
//       {children}
//       <Footer />
//     </div>
//   )
// }

// export default Container
