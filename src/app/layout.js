import HeaderMobile from "@/components/layout/HeaderMobile";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Letatlin",
  description:
    "ЛЕТАТЛИН — бюро проектирования высокотехнологичных объектов агропромышленного сектора, промышленных объектов, производственно-логистических комплексов",
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
