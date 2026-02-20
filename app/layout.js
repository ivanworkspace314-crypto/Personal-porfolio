import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationShell from "@/components/navigation/NavigationShell";
import PageShell from "@/components/layout/PageShell";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ivan Lo - MERN Stack Developer Portfolio",
  description: "Portfolio of Ivan Lo, a MERN stack web developer with 2 years of experience creating dynamic, user-friendly applications.",
  keywords: ["web developer", "MERN stack", "React", "Node.js", "MongoDB", "Express.js", "full stack developer"],
  author: "Ivan Lo",
  icons: {
    icon: "/Favicon.png",
  },
  openGraph: {
    title: "Ivan Lo - MERN Stack Developer Portfolio",
    description: "Portfolio of Ivan Lo, a MERN stack web developer with 2 years of experience creating dynamic, user-friendly applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Serif+Pro:wght@400;600&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationShell>
          <PageShell>{children}</PageShell>
        </NavigationShell>
      </body>
    </html>
  );
}
