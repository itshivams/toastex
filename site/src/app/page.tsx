"use client";

import Link from "next/link";
import { useState } from "react";
import { Toastex } from "toastex";
import "toastex/toastex.css";
import styles from "./page.module.css";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  const [type, setType] = useState<"success" | "error" | "info" | "warning" | "default">("success");
  const [variant, setVariant] = useState<"default" | "swift" | "chat" | "minimal" | "outline" | "liquid-glass" | "liquid-chat">("swift");
  const [position, setPosition] = useState<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center">("bottom-right");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [sound, setSound] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("This is a highly customizable Toastex notification!");

  const triggerToast = () => {
    const opts: any = {
      title: variant === "liquid-glass" ? "iMessage" : "Notification",
      message: message,
      type: type,
      variant: variant,
      position: position,
      theme: theme,
      sound: sound,
      duration: 5,
    };
    
    if (variant === "liquid-chat") {
      opts.avatarUrl = "https://avatars.githubusercontent.com/u/9919?v=4";
      opts.appIconUrl = "https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg";
      opts.subtitle = "Gym Training";
      opts.time = "now";
    } else if (variant === "liquid-glass") {
      opts.logoUrl = "https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg";
    } else if (variant === "chat") {
      opts.logoUrl = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    }

    Toastex.show(opts);
  };

  const codeSnippet = `Toastex.show({
  title: '${variant === "liquid-glass" ? "iMessage" : "Notification"}',
  message: '${message}',
  type: '${type}',
  variant: '${variant}',
  position: '${position}',
  theme: '${theme}',
  sound: ${sound},
  duration: 5${variant === 'liquid-chat' ? `,
  avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
  appIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg',
  subtitle: 'Gym Training',
  time: 'now'` : ''}${variant === 'liquid-glass' ? `,
  logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg'` : ''}${variant === 'chat' ? `,
  logoUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'` : ''}
});`;

  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          <span className="gradient-text">Toastex</span>
        </h1>
        <p className={styles.subtitle}>
          A robust, enterprise-standard, and highly customizable vanilla JS/TS toast notification library with zero dependencies.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/docs" className="btn btn-primary">
            Get Started
          </Link>
          <a
            href="https://github.com/itshivams/toastex"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className={styles.demoSection}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.5rem" }}>
          Comprehensive <span className="gradient-text">Playground</span>
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", opacity: 0.8 }}>
          Test every single configuration, style, variant, and direction that Toastex offers!
        </p>
        
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
          
          <div className="glass" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--secondary)", fontWeight: "700" }}>Message</label>
              <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                style={{ width: "100%", padding: "1.25rem" }}
              />
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--secondary)", fontWeight: "700" }}>Type</label>
                <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value as any)}
                  style={{ width: "100%", padding: "1.25rem" }}
                >
                  <option value="default">Default</option>
                  <option value="success">Success</option>
                  <option value="error">Error</option>
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--secondary)", fontWeight: "700" }}>Variant</label>
                <select 
                  value={variant} 
                  onChange={(e) => setVariant(e.target.value as any)}
                  style={{ width: "100%", padding: "1.25rem" }}
                >
                  <option value="default">Default</option>
                  <option value="swift">Swift</option>
                  <option value="chat">Chat</option>
                  <option value="minimal">Minimal</option>
                  <option value="outline">Outline</option>
                  <option value="liquid-glass">Liquid Glass</option>
                  <option value="liquid-chat">Liquid Chat</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--secondary)", fontWeight: "700" }}>Position</label>
                <select 
                  value={position} 
                  onChange={(e) => setPosition(e.target.value as any)}
                  style={{ width: "100%", padding: "1.25rem" }}
                >
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                  <option value="top-center">Top Center</option>
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-center">Bottom Center</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--secondary)", fontWeight: "700" }}>Theme</label>
                <select 
                  value={theme} 
                  onChange={(e) => setTheme(e.target.value as any)}
                  style={{ width: "100%", padding: "1.25rem" }}
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1.5rem" }}>
              <input 
                type="checkbox" 
                id="soundToggle" 
                checked={sound} 
                onChange={(e) => setSound(e.target.checked)}
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
              <label htmlFor="soundToggle" style={{ fontSize: "1rem", color: "var(--foreground)", cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>Enable Sound Effects</label>
            </div>

            <button 
              onClick={triggerToast} 
              className="btn btn-primary" 
              style={{ width: "100%", marginTop: "1rem" }}
            >
              Show Toast
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.2rem", letterSpacing: "-0.02em" }}>Generated Code</h3>
            <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>Copy this snippet to use the exact configuration you just built.</p>
            <CodeBlock code={codeSnippet} language="typescript" />
          </div>

        </div>
      </section>

      <section className={styles.installSection}>
        <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>
          Quick <span className="gradient-text">Install</span>
        </h2>
        <CodeBlock code="npm install toastex" language="bash" />
        <div style={{ marginTop: "2rem" }}>
          <Link href="/docs" className="btn btn-primary">
            Read the Documentation →
          </Link>
        </div>
      </section>
    </div>
  );
}
