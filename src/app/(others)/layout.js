import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import HeaderNotification from '../(home)/HeaderNotification';

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderNotification />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
