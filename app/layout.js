import { Roboto, Roboto_Condensed } from 'next/font/google'
import { Header } from 'components/header';

import "./globals.css";

export const metadata = {
  title: "Grow books",
};

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto',
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto_condensed.variable} bg-[#F2F3F5] bg-no-repeat min-h-screen`}>
        <div className='flex w-full h-[5px] bg-top-border-gradiant'></div>
        <Header />
        <main className="flex flex-col p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
