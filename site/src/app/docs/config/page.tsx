import styles from "../docs.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function ConfigDocs() {
  return (
    <div className={styles.article}>
      <h1>Global Configuration</h1>
      <p>
        Tired of passing the same options to every single toast? Toastex provides a static <code>config</code> method that allows you to set global defaults for your entire application.
      </p>

      <h2>Setup</h2>
      <p>
        Call <code>Toastex.config()</code> once during your application's initialization phase (e.g., in your root layout, <code>_app.tsx</code>, or main entry point).
      </p>

      <CodeBlock code={`import { Toastex } from 'toastex';

// Set global defaults
Toastex.config({
  theme: 'dark',
  variant: 'swift',
  position: 'bottom-center',
  duration: 8, // 8 seconds
  sound: true
});`} language="typescript" />

      <h2>Overrides</h2>
      <p>
        Global configuration acts as a baseline. You can still override these defaults on a per-toast basis by simply passing the specific option during the method call.
      </p>

      <CodeBlock code={`// Uses the global theme ('dark') but overrides the position
Toastex.success('Profile updated', { position: 'top-right' });`} language="typescript" />

    </div>
  );
}
