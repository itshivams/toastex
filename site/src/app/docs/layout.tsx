import Sidebar from "@/components/Sidebar";
import styles from "./docs.module.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.docsLayout}>
      <Sidebar />
      <div className={styles.docsContent}>
        {children}
      </div>
    </div>
  );
}
