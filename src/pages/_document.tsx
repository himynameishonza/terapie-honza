import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="pinterest" content="nopin" />
      </Head>
      <body className="overflow-x-hidden bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
