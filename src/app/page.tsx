import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Discover the key differences between the NBA and FIBA rules—the two
          most important basketball leagues in the world. Whether you&apos;re a
          coach, player, or fan, understanding these small but crucial
          differences can deepen your appreciation and knowledge of the game.
        </h1>
      </main>
    </div>
  );
}
