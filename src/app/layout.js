import HeaderMobile from "@/components/layout/HeaderMobile";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="font-objectSans" lang="en">
      <body>
        <header>
          <HeaderMobile />
          <Header />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
