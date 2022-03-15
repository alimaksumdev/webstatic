import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang="id">
      <Head>
      <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta name="google-site-verification" content="BUTvzstLYCF_WJbyVVLaTtInF99uyDCvYI2wROIM9tE" />
      </Head>
      <body className='text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
