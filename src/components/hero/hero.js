import { useState } from "react";

import styles from "./hero.module.scss";
import Button from "@/components/common/button/Button";

const MODES = {
  READING: "reading",
  LISTENING: "listening",
}

const Hero = () => {
  const [mode, setMode] = useState(MODES.READING);

  const changeMode = () => mode === MODES.READING ? setMode(MODES.LISTENING) : setMode(MODES.READING);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <img className={styles.logo} src="readingmood-logo.svg" alt="Readingmood logo" />
        <div className={styles.main}>
          <h1 className={styles.title}>Tell us what you&apos;re <span onClick={changeMode} className={styles.mode}>{mode}</span> and we&apos;ll give you some {mode === MODES.READING ? "songs" : "books"}.</h1>
          <input className={styles.input} type="text" placeholder={mode === MODES.READING ? "Enter book title" : "Enter song title"} />
          <Button primary className={styles.button}>Get {mode === MODES.READING ? "songs" : "books"}</Button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;