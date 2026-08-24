import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Coded Message Desk | Bookchaowalit", description: "Encode and decode URL components in the browser." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
