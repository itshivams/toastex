import styles from "../docs.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function PositionsDocs() {
  return (
    <div className={styles.article}>
      <h1>Positions & Layout</h1>
      <p>
        Toastex includes a fully responsive, built-in layout engine that allows you to render toasts in 6 distinct regions of the screen.
      </p>

      <h2>Available Positions</h2>
      <ul>
        <li><code>top-right</code> (Default)</li>
        <li><code>top-left</code></li>
        <li><code>top-center</code></li>
        <li><code>bottom-right</code></li>
        <li><code>bottom-left</code></li>
        <li><code>bottom-center</code></li>
      </ul>

      <h2>Usage</h2>
      <p>
        Simply pass the <code>position</code> property in the options object when triggering a toast. Toastex will automatically generate a fixed container for that region if it doesn't already exist, and elegantly stack new toasts within it.
      </p>
      
      <CodeBlock code={`// Bottom Right (Standard desktop positioning)
Toastex.success('Downloaded successfully', { position: 'bottom-right' });

// Top Center (Great for mobile notifications)
Toastex.info('New friend request', { position: 'top-center' });`} language="typescript" />

      <h2>Animation Engine</h2>
      <p>
        Toastex handles entry and exit animations automatically based on the position. 
        Toasts positioned at the top of the screen will slide down, while toasts positioned at the bottom will slide up, ensuring a natural physical flow to the UI.
      </p>

    </div>
  );
}
