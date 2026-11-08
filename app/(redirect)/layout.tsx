import "../globals.css";

// Separate root layout for `/`, which sits outside `app/[lang]`.
export default function RedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
