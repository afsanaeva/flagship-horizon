import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeaderNotification from "./HeaderNotification";

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
