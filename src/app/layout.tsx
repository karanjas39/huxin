import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Huxin - Build & Share",
  description:
    "Huxin is a user-friendly portfolio building platform designed to help you showcase your talents and achievements effortlessly. Create, share, and manage your professional presence with customizable templates and a seamless user experience.",
  keywords:
    "portfolio, resume builder, Huxin, showcase, projects, user-friendly, non-technical, web application",
  authors: [
    { name: "Jaskaran Singh", url: "https://developerjaskaran.netlify.app/" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
