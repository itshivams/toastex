"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

const DOCS_ROUTES = [
  { path: "/docs", label: "Getting Started" },
  { path: "/docs/variants", label: "Variants & Themes" },
  { path: "/docs/positions", label: "Positions" },
  { path: "/docs/config", label: "Global Configuration" },
  { path: "/docs/api", label: "API Reference" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} onClick={() => setIsOpen(false)}></div>
      
      <aside className={`${styles.sidebar} ${isOpen ? styles.openSidebar : ""}`}>
        <nav className={styles.nav}>
          <div className={styles.navGroup}>
            <h4 className={styles.groupTitle}>Documentation</h4>
            <ul className={styles.linkList}>
              {DOCS_ROUTES.map((route) => {
                const isActive = pathname === route.path;
                return (
                  <li key={route.path}>
                    <Link 
                      href={route.path} 
                      className={`${styles.link} ${isActive ? styles.active : ""}`}
                    >
                      {route.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
