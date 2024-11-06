import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        title="Discover the key differences between the NBA and FIBA rules—the two
          most important basketball leagues in the world."
        imageUrl="/images/court-basketball.jpg"
      />

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionTextContainer}>
            <h2 className={styles.sectionTitle}>NBA</h2>
            <p className={styles.sectionText}>
              The National Basketball Association (NBA) is a professional
              basketball league in the United States. It is the most popular
              professional basketball league in the world.
            </p>
            <Link href="/rules-nba" className={styles.link}>
              Rules
            </Link>
          </div>
          <div className={styles.sectionImageContainer}>
            <Image
              src="/images/nba.jpg"
              alt="NBA logo"
              className={styles.sectionImage}
              priority
              quality={100}
              width={400}
              height={400}
              sizes="(max-width: 400px) 100vw, 400px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10%",
              }}
            />
          </div>
        </div>

        <div className={styles.sectionContent}>
          <div className={styles.sectionImageContainer}>
            <Image
              src="/images/fiba.jpg"
              alt="FIBA logo"
              className={styles.sectionImage}
              priority
              quality={100}
              width={400}
              height={400}
              sizes="(max-width: 400px) 100vw, 400px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10%",
              }}
            />
          </div>
          <div className={styles.sectionTextContainer}>
            <h2 className={styles.sectionTitle}>FIBA</h2>
            <p className={styles.sectionText}>
              The French International Basketball Association (FIBA) is a
              professional basketball league in France. It is the second most
              popular professional basketball league in the world.
            </p>
            <Link href="/rules-fiba" className={styles.link}>
              Rules
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
