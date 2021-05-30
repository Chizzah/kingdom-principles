import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-[#1DBFBF]">
        <Header />
        <Hero />
        <main className="container flex-grow mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
