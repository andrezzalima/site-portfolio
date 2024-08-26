import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
<<<<<<< HEAD
  title: "Andrezza Lima",
=======
  title: "Portfólio | Andrezza Lima - Web Developer",
>>>>>>> 12df3ce422b4412a3754270139293875163c09da
  description: "Site Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
