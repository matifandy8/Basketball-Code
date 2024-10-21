import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Discover the key differences between the NBA and FIBA rules—the two
          most important basketball leagues in the world.
        </h1>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>NBA</h2>
          <p>
            The National Basketball Association (NBA) is a professional
            basketball league in the United States. It is the most popular
            professional basketball league in the world.
          </p>
          <Link href="/rules-nba" className={styles.link}>
            Rules
          </Link>
        </div>

        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>FIBA</h2>
          <p>
            The Federative International Basketball Association (FIBA) is a
            professional basketball league in the United States. It is the
            second most popular professional basketball league in the world.
          </p>
          <Link href="/rules-fiba" className={styles.link}>
            Rules
          </Link>
        </div>
      </section>
    </main>
  );
}
