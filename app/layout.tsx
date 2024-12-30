import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[1440px] h-[1024px] mx-auto overflow-hidden">
        <header className="flex items-center bg-header h-12 p-2">
          <div className="text-slate-50 text-2xl font-bold">NewLoa</div>
        </header>
        <div className="bg-separator h-8"></div>
        {children}
      </body>
    </html>
  );
}
