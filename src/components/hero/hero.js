import { useState } from "react";

import styles from "./hero.module.scss";
import Button from "@/components/common/button/Button";
import { useReadingmoodStore } from "@/lib/store";
import { toast } from "react-toastify";

const MODES = {
  READING: "reading",
  LISTENING: "listening",
}

const Hero = () => {
  const { setSearchValue, setSongs } = useReadingmoodStore();
  const [mode, setMode] = useState(MODES.READING);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeMode = () => mode === MODES.READING ? setMode(MODES.LISTENING) : setMode(MODES.READING);
  const handleInputChange = (e) => setInputValue(e.target.value);

  const onButtonClick = async () => {
    if (!inputValue) {
      setSongs([]);
      toast.error("Come on, give us a book title! Input can not be empty.");
      toast.clearWaitingQueue();
      return;
    }

    if (mode === MODES.LISTENING) {
      toast("This feature is not available yet");
      toast.clearWaitingQueue();
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/get-songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: inputValue }),
      });

      const data = await response.json();
      const { existing, output } = data;

      if (!existing) {
        setSearchValue("");
        setSongs([]);
        setIsLoading(false);
        toast.error("We are not familiar with that book so we can't recommend any songs. :(");
        toast.clearWaitingQueue();
        return;
      }

      const songs = JSON.parse(output.text).list;

      setSearchValue(inputValue);
      setSongs(songs);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      toast.error("Something went wrong. Please try again");
      toast.clearWaitingQueue();
    }
  }

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <img className={styles.logo} src="readingmood-logo.svg" alt="Readingmood logo" />
        <div className={styles.main}>
          <h1 className={styles.title}>Tell us what you&apos;re <span onClick={changeMode} className={styles.mode}>{mode}</span> and we&apos;ll give you some {mode === MODES.READING ? "songs" : "books"}.</h1>
          <input
            className={styles.input}
            type="text"
            placeholder={mode === MODES.READING ? "Enter book title" : "Enter song title"}
            onChange={handleInputChange}
          />
          <Button
            primary
            className={styles.button}
            onClick={onButtonClick}
            disabled={isLoading}
          >
            {
              isLoading ?
                "Thinking... 🤔" :
                `Get ${mode === MODES.READING ? "songs" : "books"}`
            }
          </Button>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;