import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import PlausibleProvider from "next-plausible";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  const title = "n4.gg - Random String Generator";
  const description =
    "A simple UI for generating cryptographically secure random strings, integers, and UUID's.";
  const imageMetaURL = "https://random.n4.gg/logo.png";
  const name = "Random String Generator by n4.gg";

  return (
    <PlausibleProvider domain="random.n4.gg">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageMetaURL} />
        <meta name="twitter:image" content={imageMetaURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#111" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="apple-mobile-web-app-title" content={name} />
        <meta name="application-name" content={name} />
      </Head>

      <Component {...pageProps} />
    </PlausibleProvider>
  );
};

export default MyApp;
