import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: "Global Square IT",
  description: "We provide top-notch IT solutions and services",
  keywords: "IT solutions, web development, app development, software development", 
  openGraph: {
    title: "Global Square IT",
    description: "We provide top-notch IT solutions and services",
    url: "https://globalsquareit.com", 
    siteName: "Global Square IT",
    images: [
      {
        url: "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?t=st=1733320693~exp=1733324293~hmac=8d84da25e30131778d1e1185d7c78eb113ef19125f2bf0f573135b400698d219&w=740",  
        width: 1200,
        height: 630,
        alt: "Global Square IT",
      },
    ],
  },
 
};

const roboto = Roboto({
  weight: ['400', '700'], 
  subsets: ['latin'],     
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
