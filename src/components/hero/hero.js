import styles from "./hero.module.scss";
import Button from "@/components/common/button/Button";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.content}>
      <img className={styles.logo} src="readingmood-logo.svg" alt="Readingmood logo" />
      <div className={styles.main}>
        <h1 className={styles.title}>Tell us what you&apos;re <span className={styles.mode}>reading</span> and we&apos;ll give you some songs.</h1>
        <input className={styles.input} type="text" placeholder="Enter book title"/>
        <Button primary className={styles.button}>Get songs</Button>
      </div>
      <div />
    </div>
  </div>
);

export default Hero;