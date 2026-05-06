import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Monday Likes Baseball — Sports Analytics & Biomechanics",
  description:
    "데이터로 보는 야구. 세이버메트릭스, 머신러닝, 컴퓨터 비전으로 풀어내는 야구 분석.",
  keywords: ["baseball analytics", "sabermetrics", "MLB", "Texas Rangers", "biomechanics"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="bg-rangers-ink">
      <body className="noise relative">
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
