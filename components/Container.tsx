import { ReactNode, FunctionComponent } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
};

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "PP. Ali Maksum",
    description: "Yayasan Pondok Pesantren Ali Maksum Krapyak, Yogyakarta dengan lembaga formal SMP dan SMA Ali Maksum",
    image: "https://alimaksum.com/assets/images/logo.svg",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="mx-auto">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://alimaksum.com${router.asPath}`} />
        <link rel="canonical" href={`https://alimaksum.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Pondok Pesantren Ali Maksum Krapyak" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alimaksum_com" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
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
