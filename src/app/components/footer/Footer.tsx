import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a
            href="https://github.com/matifandy8/Basketball-Code"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.logoText}>Basketball Code</span>
          </a>
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://matias-fandino.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Matias Fandiño
          </a>
        </p>
      </div>
    </footer>
  );
}
