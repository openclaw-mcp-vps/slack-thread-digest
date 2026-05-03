import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Digest — Daily summaries for busy Slack channels",
  description: "Auto-generates daily digest emails of important Slack thread conversations, filtering noise and highlighting decisions for engineering managers and team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a36cb850-7b67-4f53-99a7-1979cc2ddf21"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
