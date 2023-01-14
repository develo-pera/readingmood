import styles from "./ad.module.scss";

const Ad = ({image, url}) => (
  <div className={styles.ad}>
    <a href={url} target="_blank" rel="noreferrer noopener">
      <img src={image} alt="Advertisement image" />
    </a>
    <p className={styles.disclaimer}>* Paid ad</p>
    <p className={styles.callToAction}>Want to place your ad here? <a href="#">Contact us</a></p>
  </div>
);

export default Ad;