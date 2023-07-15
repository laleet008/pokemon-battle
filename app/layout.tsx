import Navbar from '@/components/Navbar';
import Providers from '../utils/Provider';
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
          <Providers>
            <Navbar />
            <div>{children}</div>
          </Providers>
        </main>
      </body>
    </html>
  );
}
