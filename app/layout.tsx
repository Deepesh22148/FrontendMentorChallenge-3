import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-VariableFont_slnt,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-inter-local",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Social links profile",
  description: "Social links profile using tailwind and nextjs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">{children}</body>
    </html>
  );
}
