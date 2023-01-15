import { useState } from "react";

import styles from "./hero.module.scss";
import Button from "@/components/common/button/Button";
import { useReadingmoodStore } from "@/lib/store";

const SONGS_MOCK = [
  {
    title: "Song title",
    artist: "Artist",
    description: "Lorem ipsum je bas super tekst jer ne mozras da lupetas nego ono, dobijes ga out of the box"
  },
  {
    title: "Song title",
    artist: "Artist",
    description: "Lorem ipsum je bas super tekst jer ne mozras da lupetas nego ono, dobijes ga out of the box"
  },
  {
    title: "Song title",
    artist: "Artist",
    description: "Lorem ipsum je bas super tekst jer ne mozras da lupetas nego ono, dobijes ga out of the box"
  },
  {
    title: "Song title",
    artist: "Artist",
    description: "Lorem ipsum je bas super tekst jer ne mozras da lupetas nego ono, dobijes ga out of the box"
  },
  {
    title: "Song title",
    artist: "Artist",
    description: "Lorem ipsum je bas super tekst jer ne mozras da lupetas nego ono, dobijes ga out of the box"
  }
]

const MODES = {
  READING: "reading",
  LISTENING: "listening",
}

const Hero = () => {
  const { setSongs } = useReadingmoodStore();
  const [mode, setMode] = useState(MODES.READING);

  const changeMode = () => mode === MODES.READING ? setMode(MODES.LISTENING) : setMode(MODES.READING);
  const onButtonClick = () => {
    if (mode === MODES.LISTENING) {
      alert("Not available yet");
      return;
    }
    setSongs(SONGS_MOCK);
  }

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <img className={styles.logo} src="readingmood-logo.svg" alt="Readingmood logo" />
        <div className={styles.main}>
          <h1 className={styles.title}>Tell us what you&apos;re <span onClick={changeMode} className={styles.mode}>{mode}</span> and we&apos;ll give you some {mode === MODES.READING ? "songs" : "books"}.</h1>
          <input className={styles.input} type="text" placeholder={mode === MODES.READING ? "Enter book title" : "Enter song title"} />
          <Button
            primary
            className={styles.button}
            onClick={onButtonClick}
          >
            Get {mode === MODES.READING ? "songs" : "books"}
          </Button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;