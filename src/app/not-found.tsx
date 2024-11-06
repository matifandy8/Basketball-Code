import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.notfound__title}> 404 - Page Not Found</h1>
      <p className={styles.notfound__description}>
        The page you are looking for does not exist.
      </p>

      <Link href="/" className={styles.notfound__link}>
        Go back to the home page
      </Link>
    </div>
  );
}
