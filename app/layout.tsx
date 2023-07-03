import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Pokemon Battle',
  description: 'See Who Wins',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <main className="max-w-7xl main-wrapper my-8 mx-auto">
          <div>
            <Navbar />
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
