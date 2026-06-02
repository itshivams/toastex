import styles from "./docs.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function DocsPage() {
  return (
    <div className={styles.article}>
      <h1>Getting Started</h1>
      <p>
        Welcome to the <strong>Toastex</strong> documentation! 
        Toastex is a robust, enterprise-standard, and highly customizable vanilla JS/TS toast notification library with zero dependencies.
      </p>

      <h2>Installation</h2>
      <p>Install Toastex via your preferred package manager:</p>
      
      <CodeBlock code="npm install toastex" language="bash" />
      <CodeBlock code="pnpm add toastex" language="bash" />
      <CodeBlock code="yarn add toastex" language="bash" />

      <h2>Basic Usage</h2>
      <p>
        Toastex automatically handles DOM injection, so you don't need to wrap your application in a massive Context Provider. Just import it and call it anywhere.
      </p>

      <CodeBlock code={`import { Toastex } from 'toastex';
import 'toastex/toastex.css'; // Important: Import the core styles

// Trigger a success toast
Toastex.success('Data saved successfully!');

// Trigger an error toast with options
Toastex.error('Connection failed', {
  variant: 'swift',
  theme: 'dark',
  position: 'top-right'
});`} language="typescript" />

    </div>
  );
}
