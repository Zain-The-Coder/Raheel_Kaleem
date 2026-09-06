import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata = {
  title: `${profileData.name} - ${profileData.title}`,
  description: profileData.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${space.variable} font-sans antialiased text-slate-600`}>
        {children}
      </body>
    </html>
  );
}
