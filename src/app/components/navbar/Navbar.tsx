import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>Basketball Code</span>
        </Link>
      </h1>
      <div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/rules-nba">Rules NBA</Link>
          </li>
          <li className={styles.link}>
            <Link href="/rules-fiba">Rules FIBA</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
