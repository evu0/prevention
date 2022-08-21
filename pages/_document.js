import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
    <Head>
      <meta
      name="description"
      content="Arabic, patient-friendly version of United States Preventive Services Taskforce recommendations"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}