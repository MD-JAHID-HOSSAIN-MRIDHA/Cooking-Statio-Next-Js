import Footer from "@/Components/shared/Footer";
import Navbar from "@/Components/shared/Navbar";

//CSS
import "swiper/css";

export default function Landings({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
