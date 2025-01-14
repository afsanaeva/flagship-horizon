import Header from "@/components/layout/Header";
import HeaderNotification from "../(home)/HeaderNotification";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <HeaderNotification />
      <Header />
      {children}
      <Footer />
    </>
  );
}
