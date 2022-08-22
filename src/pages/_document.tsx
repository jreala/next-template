import {Html, Head, Main, NextScript, DocumentProps} from 'next/document';

export default function Document(props: DocumentProps) {
  const currentLocale = props.__NEXT_DATA__.locale || 'en';
  return (
    <Html lang={currentLocale}>
      <Head />
      <body className="dark:bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
