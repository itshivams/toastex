import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Toastex - Toast Notifications",
  description: "A robust, enterprise-standard, and highly customizable vanilla JS/TS toast notification library with zero dependencies. Create beautiful alerts, snackbars, and popups.",
  keywords: [
    "toast", "notifications", "alerts", "snackbar", "popup", 
    "vanilla js", "typescript", "react toast", "web notifications", 
    "toastex", "ui components", "frontend"
  ],
  authors: [{ name: "Shivam" }],
  openGraph: {
    title: "Toastex - Ultimate Toast Notifications",
    description: "Enterprise-grade, zero dependency toast notifications for modern web applications.",
    url: "https://toastex.itshivam.in",
    siteName: "Toastex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toastex - Toast Notifications",
    description: "Enterprise-grade, zero dependency toast notifications for modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('toastex-theme');
                  if (savedTheme) {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                  } else {
                    var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (!systemPrefersDark) {
                      document.documentElement.setAttribute('data-theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="page-wrapper">
          <Header />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
