// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
			<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400&display=swap" rel="stylesheet" />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#15803d" />

      <title>
        Brahma Kumaris - Mamma Avyakt Divas 2022 - Blessing Card
      </title>
      <meta
        name="description"
        content="Special Blessings..."
      />

      
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta
        name="title"
        content="Brahma Kumaris - Mamma Avyakt Divas 2022 - Blessing Card"
      />
      <meta
        name="description"
        content="Get your Special Blessings for this Mamma Avyakt Divas 2022"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Brahma Kumaris - Online Mamma Avyakt Divas 2022 - Blessing Card"
      />
      <meta
        property="og:description"
        content="Get your Special Blessings for this Mamma Avyakt Divas 2022"
      />
      <meta
        property="og:image"
        content="https://bk-avyakt-day.appdews.com/img/preview.png?"
      />

      {/* Twitter */}
   
      
      <meta
        property="twitter:image"
        content="https://bk-avyakt-day.appdews.com/img/preview.png"
      />
    </Head>
  );
};

export default MetaTags;