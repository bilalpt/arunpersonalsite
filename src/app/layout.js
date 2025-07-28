import "./globals.css";

export const metadata = {
  title: "Dark Mode Test",
  description: "Testing Tailwind Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black  transition-colors">
        {children}
      </body>
    </html>
  );
}
