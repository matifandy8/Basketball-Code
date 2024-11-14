import Hero from "../components/hero/hero";
import styles from "./rules.module.css";

export default function RulesNba() {
  return (
    <div>
      <Hero title="NBA Rules" imageUrl="/images/bg-nba.webp" />
      <div className={styles.rules}>
        <div className={styles.rulesContent}>
          <h2 className={styles.rulesTitle}>General Rules</h2>
          <div className={styles.rulesList}>
            <div className={styles.rulesListItem}>
              <div className={styles.rulesListItemImage}>
                <img
                  alt="court nba"
                  data-ll-status="loaded"
                  src="/images/NBA-basketball-court-dimensions.jpg"
                />
              </div>
              <div className={styles.rulesListItemText}>
                <span>1.</span>
                <div className={styles.rulesListItemTextContent}>
                  <h3 className={styles.rulesListItemTextTitle}>
                    COURT DIMENSIONS
                  </h3>
                  <p className={styles.rulesListItemTextDescription}>
                    The NBA basketball court is 94 feet long and 50 feet wide.
                    The height of the hoop is 7 feet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
