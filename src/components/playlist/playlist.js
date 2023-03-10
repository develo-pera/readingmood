import styles from "./playlist.module.scss";
import Ad from "@/components/common/ad/ad";
import { useReadingmoodStore } from "@/lib/store";
import SongsList from "@/components/songsList/songsList";

const ads = [
  {
    img: "/ads/renfter-ad.jpg",
    url: "https://renfter.com/",
  },
  {
    img: "/ads/renfter-ad-lenders.jpg",
    url: "https://renfter.com/nft-owners",
  },
  {
    img: "/ads/eth-bgd-ad.jpg",
    url: "https://belgradeblockchainweek.com/#eth-belgrade",
  },
]

const Playlist = () => {
  const { searchValue, songs } = useReadingmoodStore();
  const getRandomAd = () => {
    const randomAdIndex = Math.floor(Math.random() * ads.length)
    return (
      <Ad image={ads[randomAdIndex].img} url={ads[randomAdIndex].url} />
    )
  };

  return (
    <div className={styles.playlist}>
      <div className={styles.content}>
        {
          !songs.length ?
            getRandomAd() :
            <SongsList songs={songs} book={searchValue} />
        }
      </div>
    </div>
  );
}

export default Playlist;