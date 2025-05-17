import React from 'react';
import styles from './LandingBottom.module.css';

export default function LanndingBottom() {
  return (
    <>
      <div className={styles.topBar}>
        <button className={styles.sortButton}>Популярні ⌄</button>
      </div>

      <div className={styles.eventGrid}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={styles.eventCard}>
            <div className={styles.eventImage} />
            <h3 className={styles.eventTitle}>Lorem ipsum</h3>
            <p className={styles.eventDesc}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit…
            </p>
          </div>
        ))}
      </div>

      <div className={styles.moreButtonWrapper}>
        <button className={styles.moreButton}>
          Переглянути більше подій
        </button>
      </div>
    </>
  );
}

