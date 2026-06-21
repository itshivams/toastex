"use client";

import { useState, useEffect } from "react";
import styles from "./SponsorModal.module.css";

export default function SponsorModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-sponsor-modal", handleOpen);
    return () => window.removeEventListener("open-sponsor-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsor-modal-title"
    >
      <div
        className={`${styles.modal} glass`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 id="sponsor-modal-title" className={styles.title}>
          Sponsor <span className="gradient-text">Toastex</span>
        </h3>
        <div className={styles.content}>
          <p className={styles.description}>
            Please include your <strong>name</strong>, <strong>email</strong>, and a <strong>message for the developer</strong> in the notes field on the payment page.
          </p>
          <p className={styles.subtext}>
            This lets me add you to the <strong>My Sponsors</strong> section.
          </p>
        </div>
        <div className={styles.actionGroup}>
          <a
            href="https://razorpay.me/@itshivam"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
            style={{ width: "100%", textDecoration: "none" }}
          >
            Proceed to Sponsor
          </a>
        </div>
      </div>
    </div>
  );
}
