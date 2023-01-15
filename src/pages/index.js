import Head from "next/head";

import styles from "./index.module.scss";
import Hero from "@/components/hero/hero";
import Playlist from "@/components/playlist/playlist";

export default function Home() {
  const title = "Readingmood";
  const description = "Tell us what you're reading and we'll give you list of songs that goes along with the theme of the book and vice-versa.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:decription" content={description} />
        <meta property="og:image" content="/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_APP_URL}/og-image.jpg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Playlist />
      </main>
    </>
  )
}
