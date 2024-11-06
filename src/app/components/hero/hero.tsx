import styles from "./hero.module.css";

export type HeroProps = {
  title: string;
  imageUrl: string;
};

export default function Hero({ title, imageUrl }: HeroProps) {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
