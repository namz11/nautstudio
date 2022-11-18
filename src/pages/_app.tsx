import React from "react";
import "@styles/globals.scss";
import "@styles/mySwiper.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Naut Studio - Namit Rajput</title>
        <link rel="icon" href="/logo.jpeg" />

        {/* TODO update list */}
        <meta
          name="keywords"
          content="architecture, interior, design, interior design, naut, naut studio, naut studios, namit, namit rajput"
        />
        {/* TODO update description */}
        <meta name="description" content="Naut Studio Pvt. Ltd." />
        <meta name="author" content="Narmit Mashruwala" />
      </Head>

      <div id="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
