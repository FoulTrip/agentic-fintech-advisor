import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Disclaimer from "@/components/Disclaimer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Fintech Advisor",
  description: "IA avanzada para análisis financiero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950 text-slate-50 min-h-screen`}>
        <header className="border-b border-slate-800 p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">AFA <span className="text-blue-500">Terminal</span></h1>
          <div className="flex gap-4 text-sm font-medium">
            <span className="text-green-400">MARKET OPEN</span>
            <span className="text-slate-400">USD/EUR: 1.08</span>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
        <Disclaimer />
      </body>
    </html>
  );
}