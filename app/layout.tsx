import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECH Yerevan 2027",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
