import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
