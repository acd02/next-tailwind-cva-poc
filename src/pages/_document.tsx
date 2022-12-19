import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html {...{ lang: 'en' }}>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link rel="stylesheet" type="text/css" href="/reset.css" />
        <link rel="stylesheet" type="text/css" href="/theme.css" />
      </Head>
      <body className="bg-main-bg">
        {/* see: https://stackoverflow.com/questions/48516766/css-doesnt-block-rendering-on-firefox-quantum */}
        {process.env.NODE_ENV === 'production' && <script>0</script>}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
