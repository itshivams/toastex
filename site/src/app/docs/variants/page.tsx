import styles from "../docs.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function VariantsDocs() {
  return (
    <div className={styles.article}>
      <h1>Variants & Themes</h1>
      <p>
        Toastex comes fully equipped with 7 distinct architectural variants and 2 powerful themes to match any design language.
      </p>

      <h2>Themes</h2>
      <p>
        By default, Toastex supports <code>dark</code> and <code>light</code> themes. The theme completely overhauls the internal CSS variables of the toast, maintaining perfect contrast ratios.
      </p>
      <CodeBlock code={`Toastex.success('Operation completed', { theme: 'dark' });
Toastex.error('Failed to load', { theme: 'light' });`} language="typescript" />

      <h2>Variants</h2>
      
      <h3>1. Default</h3>
      <p>The standard, highly reliable toast notification. Best for general use cases where you need a standard icon-left, content-right layout.</p>
      <CodeBlock code={`Toastex.info('Standard notification', { variant: 'default' });`} language="typescript" />

      <h3>2. Swift</h3>
      <p>A sleek, Apple-inspired layout featuring a solid colored vertical bar on the left edge denoting the severity type. Perfect for minimalist dashboards.</p>
      <CodeBlock code={`Toastex.warning('System update required', { variant: 'swift' });`} language="typescript" />

      <h3>3. Chat</h3>
      <p>Designed for messaging apps or user-driven events. It supports rendering a custom avatar via the <code>logoUrl</code> parameter.</p>
      <CodeBlock code={`Toastex.info('New message received', { 
  variant: 'chat',
  title: 'Alice',
  logoUrl: 'https://i.pravatar.cc/150?u=alice'
});`} language="typescript" />

      <h3>4. Minimal</h3>
      <p>Absolutely no icons, no titles. Just pure, unadulterated text. Perfect for ultra-minimalist UIs where space is at a premium.</p>
      <CodeBlock code={`Toastex.success('Draft saved.', { variant: 'minimal' });`} language="typescript" />

      <h3>5. Outline</h3>
      <p>A stark, high-contrast variant that removes the background fill and relies entirely on a crisp, colored border.</p>
      <CodeBlock code={`Toastex.error('Connection lost', { variant: 'outline' });`} language="typescript" />

      <h3>6. Liquid Glass</h3>
      <p>A beautiful iOS-inspired notification with a heavily blurred, translucent background. Adapts dynamically to its underlying colors.</p>
      <CodeBlock code={`Toastex.show({
  title: 'iMessage',
  message: 'Hey! Are we still on for the meeting?',
  variant: 'liquid-glass',
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg'
});`} language="typescript" />

      <h3>7. Liquid Chat</h3>
      <p>A sophisticated, stacked iOS/macOS notification layout featuring large avatars, app badges, subtitles, and timestamps against a rich frosted-glass background.</p>
      <CodeBlock code={`Toastex.show({
  title: 'Armando Cajide',
  subtitle: 'Gym Training',
  message: 'Anyone up for powerlifting this weekend?',
  time: 'now',
  variant: 'liquid-chat',
  avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
  appIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg'
});`} language="typescript" />

    </div>
  );
}
