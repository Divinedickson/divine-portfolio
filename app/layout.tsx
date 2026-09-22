import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Divine Dickson-Uwakwe | Software & AI", description: "Software engineering, full-stack development, and applied AI projects by Divine Dickson-Uwakwe." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
