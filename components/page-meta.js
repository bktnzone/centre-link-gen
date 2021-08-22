// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
			<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400&display=swap" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#b91c1c" />

      <title>
        Brahma Kumaris - Online Raksha Bandhan 2021 - Blessing Card
      </title>
      <meta
        name="description"
        content="Special Blessings..."
      />

      
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta
        name="title"
        content="Brahma Kumaris - Online Raksha Bandhan 2021 - Blessing Card"
      />
      <meta
        name="description"
        content="Get your Special Blessings for this Raksha Bandhan from Brahma Kumaris"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Brahma Kumaris - Online Raksha Bandhan 2021 - Blessing Card"
      />
      <meta
        property="og:description"
        content="Get your Special Blessings for this Raksha Bandhan from Brahma Kumaris"
      />
    <meta
        property="og:image"
        content="https://bk-rakshab.appdews.com/img/raksha-banner.png"
      />

      {/* Twitter */}
   
      
      <meta
        property="twitter:image"
        content="https://bk-rakshab.appdews.com/img/raksha-banner.png"
      />
    </Head>
  );
};

export default MetaTags;