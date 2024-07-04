import Footer from "@/Components/shared/Footer";
import Navbar from "@/Components/shared/Navbar";
import Support from "@/Components/shared/Support";

//CSS
import "swiper/css";

export default function Landings({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Support />
      <Footer />
    </>
  );
}
