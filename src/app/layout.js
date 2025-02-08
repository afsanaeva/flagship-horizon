import './globals.css';
import localFont from 'next/font/local';

const neuePlak = localFont({
  src: [
    {
      path: '../fonts/neue-plak/NeuePlak_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/neue-plak/NeuePlak_SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_DOMAIN,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={neuePlak.className + ' text-[#1C2B33]'}>{children}</body>
    </html>
  );
}
