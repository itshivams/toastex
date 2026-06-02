import styles from "../docs.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function ApiDocs() {
  return (
    <div className={styles.article}>
      <h1>API Reference</h1>
      <p>
        Toastex exposes a simple, heavily typed API. Below are the available methods and interfaces.
      </p>

      <h2>Methods</h2>
      <ul>
        <li><code>Toastex.success(message: string, options?: ToastexOptions)</code></li>
        <li><code>Toastex.error(message: string, options?: ToastexOptions)</code></li>
        <li><code>Toastex.info(message: string, options?: ToastexOptions)</code></li>
        <li><code>Toastex.warning(message: string, options?: ToastexOptions)</code></li>
        <li><code>Toastex.show(options: ToastexOptions | string)</code></li>
        <li><code>Toastex.config(options: ToastexGlobalConfig)</code></li>
      </ul>

      <h2>ToastexOptions Interface</h2>
      <div style={{ overflowX: 'auto', marginTop: '1.5rem', marginBottom: '2rem', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--surface)' }}>
          <thead>
            <tr>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}>Property</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}>Type</th>
              <th style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>title</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Optional title for the toast.</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>message</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>The main text content.</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>type</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>ToastType</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}><code>'success' | 'error' | 'warning' | 'info' | 'default'</code></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>theme</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>ToastTheme</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}><code>'light' | 'dark'</code></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>variant</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}><code>'default' | 'swift' | 'chat' | 'minimal' | 'outline' | 'liquid-glass' | 'liquid-chat'</code></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>position</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>ToastPosition</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>e.g. <code>'top-right'</code>, <code>'bottom-center'</code></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>duration</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>number</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Duration in seconds. Use 0 to disable auto-close. Default is 5.</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>sound</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>boolean</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Whether to play a sound effect.</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>logoUrl</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>URL for a custom avatar (useful in <code>chat</code> variant).</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>avatarUrl</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Large avatar image URL (specifically for <code>liquid-chat</code>).</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>appIconUrl</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Small app icon overlaid on avatar (specifically for <code>liquid-chat</code>).</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>subtitle</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}><code>string</code></td>
              <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)', color: 'var(--secondary)' }}>Secondary title text (specifically for <code>liquid-chat</code>).</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><code>time</code></td>
              <td style={{ padding: '1rem' }}><code>string</code></td>
              <td style={{ padding: '1rem', color: 'var(--secondary)' }}>Timestamp text, e.g., 'now' (specifically for <code>liquid-chat</code>).</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
