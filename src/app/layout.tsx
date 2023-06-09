import LayoutWrapper from "./LayoutWrapper";
import "./globals.css";

export const metadata = {
  title: "Steven Jaya Profile",
  description: "Web Portofolio Steven Jaya",
  icon: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
