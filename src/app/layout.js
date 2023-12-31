import { Inter } from "next/font/google";
import "@/styles/globals.css";

import { NoteProvider } from "@/components/providers/NoteProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Note App by Jordan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteProvider>{children}</NoteProvider>
      </body>
    </html>
  );
}
