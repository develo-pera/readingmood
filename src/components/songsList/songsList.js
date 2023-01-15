import styles from "./songsList.module.scss";

const SongsList = ({songs, book}) => (
  <div className={styles.wrapper}>
    <p className={styles.description}>Playlist which aligns with the theme of the book "{book}":</p>
    <div className={styles.songList}>
      {
        songs.map(song => (
          <div className={styles.song}>
            <div>
              <p className={styles.title}>{song.title}</p>
              <p className={styles.artist}>{song.artist}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default SongsList;