import "./globals.css";

export const metadata = {
  title: "reFilc",
  description: "reFilc",
  icon: "./icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" href="/shortcut.png" className="rounded-full" />
      </head>
      <body className="bg-primary ">{children}</body>
    </html>
  );
}
