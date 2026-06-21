"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  const handleSponsorClick = () => {
    window.dispatchEvent(new CustomEvent("open-sponsor-modal"));
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Toastex. All rights reserved.
        </p>
        <button className={styles.sponsorLink} onClick={handleSponsorClick}>
          Sponsor this project
        </button>
      </div>
    </footer>
  );
}
