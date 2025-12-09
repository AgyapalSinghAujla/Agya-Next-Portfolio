import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import { Montserrat, Poppins } from "next/font/google";
import SmoothScrolling from "./components/SmoothScrolling";
import TabMessageClient from "./components/Hooks/TabMessageClient";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Agyapal Singh",
  description: "Your Web Partner for website development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <ThemeToggle />
        <TabMessageClient />
        <SmoothScrolling> {children}</SmoothScrolling>
      </body>
    </html>
  );
}
