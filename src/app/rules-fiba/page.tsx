import Hero from "../components/hero/hero";
import styles from "./rules.module.css";
import Image from "next/image";
import rules from "../data/rulesFiba.json";
import Link from "next/link";

export default function RulesFiba() {
  return (
    <div>
      <Hero title="FIBA Rules" imageUrl="/images/bg-fiba.jpg" />
      <div className={styles.rules}>
        <div className={styles.rulesContent}>
          <h2 className={styles.rulesTitle}>General Rules</h2>
          <div className={styles.rulesList}>
            {rules?.rulesList.map((item: any) => (
              <div key={item.id} className={styles.rulesListItem}>
                <div className={styles.rulesListItemImage}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={400}
                    height={300}
                    className={styles.rulesListItemImage}
                  />
                </div>
                <div className={styles.rulesListItemText}>
                  <h3 className={styles.rulesListItemTitle}>
                    {item.text.title}
                  </h3>
                  <p className={styles.rulesListItemDescription}>
                    {item.text.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p>
              For more information, please visit:{" "}
              <Link
                href="https://about.fiba.basketball/en/services/resource-hub/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                https://about.fiba.basketball/en/services/resource-hub/downloads
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
