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

  // const getToken = async () => {
  //   const client_id = '744f16b2998b4d30aea18eea70f582af';
  //   const client_secret = 'e408e700ddd7408bb73f4a2d3d7a1fa7';
  //
  //
  //   const response = await fetch("https://accounts.spotify.com/api/token" + "", {
  //     method: "POST",
  //     headers: {
  //       'Authorization': 'Basic ' + btoa(new Buffer(client_id + ':' + client_secret)),
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: "grant_type=client_credentials",
  //   });
  //   const data = await response.json();
  //   console.log("DATA", data);
  //
  //   // request.post(authOptions, function(error, response, body) {
  //   //   if (!error && response.statusCode === 200) {
  //   //     var token = body.access_token;
  //   //   }
  //   // });
  // }

  const onButtonClick = async () => {
    if (mode === MODES.LISTENING) {
      toast("This feature is not available yet");
      toast.clearWaitingQueue();
      return;
    }

    if (!inputValue) {
      setSongs([]);
      toast.error("Come on, give us a book title! Input can not be empty.");
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
          {/*<button onClick={getToken}>Get token</button>*/}
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;