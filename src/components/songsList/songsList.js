import styles from "./songsList.module.scss";

const SongsList = ({songs, book}) => (
  <div className={styles.wrapper}>
    <p className={styles.description}>Playlist which aligns with the theme of the book &quot;{book}&quot;:</p>
    <div className={styles.songList}>
      {
        songs.map((song, index) => (
          <div key={index} className={styles.song}>
            <div>
              <p className={styles.title}>{song.songTitle}</p>
              <p className={styles.artist}>{song.artist}</p>
              <p className={styles.why}>Why this song:</p>
              <p className={styles.whyText}>{song.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default SongsList;