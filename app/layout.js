import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MechiHack 2024",
  description:
    "MechiHack 2024 is a hackathon event organized by Mechi Multiple Campus, Bhadrapur, Jhapa. The event will be held in May 2024. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10",
  image: "https://i.ibb.co/rv49qw3/image.png",
  url: "https://mechihacks.vercel.app",
  type: "website",
  // add og:image
  openGraph: {
    type: "website",
    url: "https://mechihacks.vercel.app",
    title: "MechiHack 2024",
    description:
      "MechiHack 2024 is a hackathon event organized by Mechi Multiple Campus, Bhadrapur, Jhapa. The event will be held in May 2024. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10 teams will be competing in the final round. The event will be conducted in Mechi Multiple Campus, Bhadrapur, Jhapa. The main event will be held on May X, 2024. The top 10",
    image: "https://i.ibb.co/rv49qw3/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
