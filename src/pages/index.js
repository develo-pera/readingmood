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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Playlist />
      </main>
    </>
  )
}
