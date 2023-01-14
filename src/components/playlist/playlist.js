import styles from "./playlist.module.scss";
import Ad from "@/components/common/ad/ad";

const ads = [
  {
    img: "/ads/renfter-ad.jpg",
    url: "https://renfter.com/",
  },
  {
    img: "/ads/renfter-ad-lenders.jpg",
    url: "https://renfter.com/nft-owners",
  }
]

const Playlist = () => (
  <div className={styles.playlist}>
    <div className={styles.content}>
      <Ad image={ads[0].img} url={ads[0].url} />
    </div>
  </div>
);

export default Playlist;