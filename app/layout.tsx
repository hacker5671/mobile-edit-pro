import "./globals.css";

export const metadata = {
  title: "Mobile Edit Pro",
  description: "CapCut-like online video editor"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}